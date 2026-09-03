const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;

function resizePNG(srcPng, targetWidth, targetHeight, padPercent = 0.05) {
  // 1. Find bounding box of non-transparent pixels
  let minX = srcPng.width, maxX = 0, minY = srcPng.height, maxY = 0;
  for (let y = 0; y < srcPng.height; y++) {
    for (let x = 0; x < srcPng.width; x++) {
      const idx = (srcPng.width * y + x) << 2;
      const alpha = srcPng.data[idx + 3];
      if (alpha > 15) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cropW = Math.max(1, maxX - minX + 1);
  const cropH = Math.max(1, maxY - minY + 1);

  // Available size in target with padding
  const availW = targetWidth * (1 - padPercent * 2);
  const availH = targetHeight * (1 - padPercent * 2);
  const scale = Math.min(availW / cropW, availH / cropH);

  const finalW = Math.round(cropW * scale);
  const finalH = Math.round(cropH * scale);
  const offsetX = Math.round((targetWidth - finalW) / 2);
  const offsetY = Math.round((targetHeight - finalH) / 2);

  const destPng = new PNG({ width: targetWidth, height: targetHeight });

  // Clear to transparent
  for (let i = 0; i < destPng.data.length; i += 4) {
    destPng.data[i] = 0;
    destPng.data[i + 1] = 0;
    destPng.data[i + 2] = 0;
    destPng.data[i + 3] = 0;
  }

  // Bilinear interpolation
  for (let dy = 0; dy < finalH; dy++) {
    for (let dx = 0; dx < finalW; dx++) {
      const srcX = minX + (dx / finalW) * cropW;
      const srcY = minY + (dy / finalH) * cropH;

      const x0 = Math.floor(srcX);
      const x1 = Math.min(x0 + 1, srcPng.width - 1);
      const y0 = Math.floor(srcY);
      const y1 = Math.min(y0 + 1, srcPng.height - 1);

      const wx = srcX - x0;
      const wy = srcY - y0;

      const idx00 = (srcPng.width * y0 + x0) << 2;
      const idx10 = (srcPng.width * y0 + x1) << 2;
      const idx01 = (srcPng.width * y1 + x0) << 2;
      const idx11 = (srcPng.width * y1 + x1) << 2;

      const outX = offsetX + dx;
      const outY = offsetY + dy;
      if (outX >= 0 && outX < targetWidth && outY >= 0 && outY < targetHeight) {
        const outIdx = (destPng.width * outY + outX) << 2;
        for (let c = 0; c < 4; c++) {
          const top = srcPng.data[idx00 + c] * (1 - wx) + srcPng.data[idx10 + c] * wx;
          const btm = srcPng.data[idx01 + c] * (1 - wx) + srcPng.data[idx11 + c] * wx;
          destPng.data[outIdx + c] = Math.round(top * (1 - wy) + btm * wy);
        }
      }
    }
  }

  return destPng;
}

function createIco(pngBuffers) {
  // pngBuffers: array of { size: number, buffer: Buffer }
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4); // Number of images

  let offset = 6 + 16 * numImages;
  const dirEntries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    const sizeByte = item.size >= 256 ? 0 : item.size;
    entry.writeUInt8(sizeByte, 0); // Width
    entry.writeUInt8(sizeByte, 1); // Height
    entry.writeUInt8(0, 2); // Colors
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // Size of image
    entry.writeUInt32LE(offset, 12); // Offset
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([
    header,
    ...dirEntries,
    ...pngBuffers.map((i) => i.buffer),
  ]);
}

const logoData = fs.readFileSync(path.join(__dirname, '../public/logo.png'));
const srcPng = PNG.sync.read(logoData);

// 1. 512x512
const png512 = resizePNG(srcPng, 512, 512, 0.04);
const buf512 = PNG.sync.write(png512);

// 2. 180x180 (Apple Touch Icon)
const png180 = resizePNG(srcPng, 180, 180, 0.04);
const buf180 = PNG.sync.write(png180);

// 3. 48x48
const png48 = resizePNG(srcPng, 48, 48, 0.04);
const buf48 = PNG.sync.write(png48);

// 4. 32x32
const png32 = resizePNG(srcPng, 32, 32, 0.04);
const buf32 = PNG.sync.write(png32);

// 5. 16x16
const png16 = resizePNG(srcPng, 16, 16, 0.04);
const buf16 = PNG.sync.write(png16);

// Build multi-res ICO (16, 32, 48)
const icoBuf = createIco([
  { size: 16, buffer: buf16 },
  { size: 32, buffer: buf32 },
  { size: 48, buffer: buf48 },
]);

// Write destinations
fs.writeFileSync(path.join(__dirname, '../src/app/icon.png'), buf512);
fs.writeFileSync(path.join(__dirname, '../src/app/apple-icon.png'), buf180);
fs.writeFileSync(path.join(__dirname, '../src/app/favicon.ico'), icoBuf);

fs.writeFileSync(path.join(__dirname, '../public/icon.png'), buf512);
fs.writeFileSync(path.join(__dirname, '../public/apple-icon.png'), buf180);
fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuf);
fs.writeFileSync(path.join(__dirname, '../public/favicon-32x32.png'), buf32);
fs.writeFileSync(path.join(__dirname, '../public/favicon-16x16.png'), buf16);

console.log('Successfully generated company logo icons and favicons!');

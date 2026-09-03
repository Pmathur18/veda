const fs = require('fs');
const path = require('path');

const routes = [
  { name: 'Home', file: '.next/server/app/index.html' },
  { name: 'Products Listing', file: '.next/server/app/products.html' },
  { name: 'Product: Psyllium Husk', file: '.next/server/app/products/psyllium-husk.html' },
  { name: 'Product: Psyllium Powder', file: '.next/server/app/products/psyllium-powder.html' },
  { name: 'Product: Senna Leaves', file: '.next/server/app/products/senna-leaves.html' },
  { name: 'Product: Senna Pods', file: '.next/server/app/products/senna-pods.html' },
  { name: 'About', file: '.next/server/app/about.html' },
  { name: 'Export Process', file: '.next/server/app/export-process.html' },
  { name: 'Contact', file: '.next/server/app/contact.html' },
];

console.log('\n--- SEO PRE-LAUNCH AUDIT REPORT ---\n');

routes.forEach((r) => {
  const filePath = path.join(__dirname, '..', r.file);
  if (!fs.existsSync(filePath)) {
    console.log(`[MISSING] ${r.name} (${r.file})`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  const hasSchema = html.includes('application/ld+json');

  console.log(`=== ${r.name} ===`);
  console.log(`Title:       ${titleMatch ? titleMatch[1] : 'NONE'}`);
  console.log(`Description: ${descMatch ? descMatch[1] : 'NONE'}`);
  console.log(`Canonical:   ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`);
  console.log(`JSON-LD:     ${hasSchema ? 'YES' : 'NO'}`);
  console.log('');
});

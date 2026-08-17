export interface ProductItem {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  specifications: string[];
  // Extended fields for details page
  leadTime: string;
  shippingModes: string[];
  compliance: string[];
  ports: string[];
  details: string;
}

export const productsData: ProductItem[] = [
  {
    id: "prod-spices",
    name: "Premium Spices",
    description: "High-grade spices sourced from top plantations across India and Southeast Asia, including Black Pepper, Cardamom, Turmeric, Cumin, and Cloves.",
    category: "Spices & Agricultural Products",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop",
    specifications: ["Moisture: < 12%", "Admixture: < 1%", "Grade: A / Premium export quality", "Certifications: Phytosanitary, Spices Board"],
    leadTime: "10-15 Days (Air), 25-35 Days (Ocean)",
    shippingModes: ["Ocean Freight (FCL/LCL)", "Priority Air Freight"],
    compliance: ["Phytosanitary Certification", "FDA Registration", "Spices Board of India Compliance"],
    ports: ["Mundra Port (IN)", "Rotterdam Port (NL)", "Hamburg Port (DE)"],
    details: "Our premium spices are hand-selected from certified ecological estates in Kerala and Rajasthan. We handle full physical quality controls, fumigation, phytosanitary certificates, and vacuum packing to preserve volatile oil content during maritime transit."
  },
  {
    id: "prod-textiles",
    name: "Textiles & Garments",
    description: "Finest quality cotton yarns, organic fabrics, home textiles, and readymade apparel shipped in compliance with global fashion standards.",
    category: "Textiles & Apparel",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
    specifications: ["Material: 100% Organic Cotton / Poly-Cotton Blends", "GSM Range: 120 - 450", "Dyeing: AZO-free eco-friendly dyes", "Compliance: OEKO-TEX Standard 100"],
    leadTime: "20-30 Days",
    shippingModes: ["Ocean Freight (FCL)", "Intermodal Rail & Road"],
    compliance: ["OEKO-TEX Standard 100", "GOTS Certification", "SGS Quality Verification"],
    ports: ["Nhava Sheva Port (IN)", "Los Angeles Port (US)", "Felixstowe Port (GB)"],
    details: "Direct sourcing of high-density organic cotton fabrics and combed yarns. We manage strict quality verification at manufacturing lines, coordinating container packing to prevent humidity-related fiber damage in ocean lanes."
  },
  {
    id: "prod-grain",
    name: "Grains & Pulses",
    description: "Bulk supply of Basmati rice, wheat, yellow corn, lentils, and chickpeas packaged in high-resistance export-grade bags.",
    category: "Spices & Agricultural Products",
    imageUrl: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=600&auto=format&fit=crop",
    specifications: ["Average Grain Length: 8.3 mm (Basmati)", "Damaged/Discolored: Max 1%", "Packaging: 25kg/50kg PP Bags or Jute Bags"],
    leadTime: "15-20 Days",
    shippingModes: ["Ocean Bulk Vessel", "Ocean Container Freight (FCL)"],
    compliance: ["FSSAI Certificate", "USDA Organic Certification", "SGS Weight & Quality Clearance"],
    ports: ["Kandla Port (IN)", "Jebel Ali Port (AE)", "Singapore Port (SG)"],
    details: "Direct-from-farm procurement of long-grain Basmati rice, high-gluten wheat, and yellow corn. We maintain dedicated grain elevators at ports to ensure bulk load speed while preserving grain moisture levels under 12%."
  },
  {
    id: "prod-electronics",
    name: "Industrial Electronics & PCBs",
    description: "Microchips, printed circuit board assemblies (PCBA), connectors, and custom electronic modules for machinery automation.",
    category: "Electronics & Machinery",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    specifications: ["Standards: IPC-A-610 Class 2 & 3", "RoHS Compliant: Yes", "Testing: 100% AOI & Functional Tested", "Traceability: Component-level barcode"],
    leadTime: "5-8 Days",
    shippingModes: ["Air Express Freight", "Priority Courier Desk"],
    compliance: ["IPC-A-610 Class 3 Standards", "RoHS Directives", "CE Conformity", "FCC Part 15 Compliance"],
    ports: ["Bangalore Air Cargo (IN)", "Frankfurt Air Cargo (DE)", "Chicago O'Hare Airport (US)"],
    details: "High-reliability PCB assemblies and semiconductor modules designed for harsh industrial applications. Shipped in high-protection ESD shielding and moisture-barrier vacuum packaging with real-time temperature/humidity trackers."
  },
  {
    id: "prod-machinery",
    name: "Precision Machined Parts",
    description: "High-tolerance CNC machined components, valves, fasteners, and gear systems designed for heavy automotive and manufacturing industries.",
    category: "Electronics & Machinery",
    imageUrl: "https://images.unsplash.com/photo-1537462715879-360eeb61a0bc?q=80&w=600&auto=format&fit=crop",
    specifications: ["Material: Stainless Steel, Carbon Steel, Brass, Titanium", "Tolerance: Up to ±0.005mm", "Finishes: Anodizing, Zinc Plating, Passivation", "Inspection: CMM Verified"],
    leadTime: "14-21 Days",
    shippingModes: ["Ocean Container Freight (FCL/LCL)", "Priority Air Cargo"],
    compliance: ["ISO 9001:2015 Certification", "AS9100D (Aerospace) Standard", "CMM Inspection Reports"],
    ports: ["Chennai Port (IN)", "Tokyo Port (JP)", "Houston Port (US)"],
    details: "CNC turnings, micro-tolerance fittings, and structural fasteners fabricated from aerospace-grade titanium and stainless steel. We provide complete chemical composition melt sheets and dimensional reports with every batch."
  },
  {
    id: "prod-chemicals",
    name: "Specialty Chemicals",
    description: "Industrial chemical compounds, solvents, pigments, and active pharmaceutical ingredients (APIs) transported via certified ISO tank containers.",
    category: "Chemical Products",
    imageUrl: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=600&auto=format&fit=crop",
    specifications: ["Purity: 99.5% Min", "Transport Mode: ISO Tanks / UN Approved Drums", "Hazard Class: Class 3, 6.1, 8, 9", "Documentation: MSDS, REACH Registration"],
    leadTime: "18-25 Days",
    shippingModes: ["ISO Tank Container Shipping", "UN Drums Ocean Lanes (FCL)"],
    compliance: ["EU REACH Registration Dossier", "IMDG Code (Hazardous Goods)", "ISO 14001 Environmental Standard"],
    ports: ["Hazira Port (IN)", "Antwerp Port (BE)", "Rotterdam Port (NL)"],
    details: "High-purity solvents, active pharmaceutical reagents, and specialty pigments. We operate in full alignment with international maritime dangerous goods (IMDG) packing laws and provide full REACH documentation for EU port entry."
  }
];

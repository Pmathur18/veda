export interface SpecTable {
  product: string;
  botanicalName: string;
  origin: string;
  form: string;
  packaging: string;
  moq: string;
  availability: string;
  documentation: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  specifications: string[]; // Keep for compatibility/summary lists
  specTable: SpecTable;
  overview: string;
  grades: string[];
  applications: string[];
}

export const productsData: ProductItem[] = [
  {
    id: "psyllium-husk",
    name: "Psyllium Husk & Powder",
    description: "High-purity dietary fiber sourced from the fertile regions of Rajasthan and Gujarat, processed for international food and pharmaceutical standards.",
    category: "Natural Ingredients",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop", // Seeds & grains representation
    specifications: [
      "Purity: 99%, 98%, 95%, 85% options",
      "Swell Volume: > 40 ml/g (for 99% purity)",
      "Origin: Jodhpur, Rajasthan | India",
      "MOQ: 10 Metric Tons"
    ],
    specTable: {
      product: "Psyllium Husk & Powder (Isabgol)",
      botanicalName: "Plantago ovata",
      origin: "Rajasthan / Gujarat, India (Processed in Jodhpur)",
      form: "Whole Husk, Husk Powder (40 mesh, 60 mesh, 100 mesh)",
      packaging: "25 Kg Multi-wall Paper Bags / PP Bags / HDPE bags with inner liner",
      moq: "10 Metric Tons (1x20' FCL)",
      availability: "Year-Round (New crop harvest: Feb - Mar)",
      documentation: "Phytosanitary Certificate, COA (Lab Analysis), Fumigation Cert, Origin Certificate, GSP (where applicable)"
    },
    overview: "Psyllium husk is a natural soluble fiber derived from the seeds of Plantago ovata. Known commercially as Isabgol, it is widely utilized as a dietary fiber supplement, a natural thickening agent, and an active ingredient in pharmaceutical laxatives. We coordinate the supply directly from the crop hubs, ensuring processing and sorting matching high cleanliness requirements.",
    grades: [
      "99% Purity (Swell volume: >40 ml/g)",
      "98% Purity (Swell volume: >35 ml/g)",
      "95% Purity (Swell volume: >30 ml/g)",
      "Psyllium Industrial Grade (85% Purity)"
    ],
    applications: [
      "Pharmaceuticals: Natural laxatives, fiber formulations, capsules.",
      "Food & Bakery: Gluten-free baking binder, moisture retention agent.",
      "Animal Feed: Soluble fiber source for equine and canine nutrition."
    ]
  },
  {
    id: "senna-leaves",
    name: "Senna Leaves & Pods",
    description: "Premium grade Cassia angustifolia leaves and pods, sorted and baled for export, utilized worldwide as a natural botanical laxative.",
    category: "Natural Ingredients",
    imageUrl: "https://images.unsplash.com/photo-1564894536308-4011244a307e?q=80&w=600&auto=format&fit=crop", // Dry leaves representation
    specifications: [
      "Botanical: Cassia angustifolia",
      "Sennoside Content: 2% to 3% Min",
      "Form: Prime Cut Leaves, Pods, Powder",
      "MOQ: 12 Metric Tons"
    ],
    specTable: {
      product: "Senna Leaves & Pods",
      botanicalName: "Cassia angustifolia / Senna alexandrina",
      origin: "Rajasthan / Tamil Nadu, India",
      form: "Dried Leaves (Prime Cut / Whole), Pods, Leaves Powder",
      packaging: "100 Kg Hydraulic Compressed Bales / 25-50 Kg Bags",
      moq: "12 Metric Tons (1x20' FCL) / 25 Metric Tons (1x40' HC)",
      availability: "Year-Round (Harvest season post-monsoon)",
      documentation: "Phytosanitary Certificate, Lab Analysis (Sennosides %), Fumigation Certificate, COO"
    },
    overview: "Senna (Cassia angustifolia) is a potent medicinal herb indigenous to India, primarily cultivated in arid regions. Renowned for its natural laxative properties, it is an essential ingredient in herbal teas, OTC laxatives, and phytomedicines. Our supply is sourced, cleaned, and hydraulically compressed into high-density bales to ensure shipping efficiency.",
    grades: [
      "Senna Leaves Prime No. 1 (Premium large green leaves)",
      "Senna Leaves No. 2 (Medium sorted leaves)",
      "Senna Pods (Whole clean pods)",
      "Senna Leaves Powder (US/EU mesh size standard)"
    ],
    applications: [
      "Herbal Teas & Infusions: Primary ingredient in digestive and detox tea blends.",
      "Pharmaceuticals: Active botanical ingredient for laxative syrups and tablets.",
      "Extracts: Input material for concentrated Sennoside calcium extracts."
    ]
  }
];

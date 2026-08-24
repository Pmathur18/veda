export interface SpecTableData {
  headers: string[];
  rows: string[][];
}

export interface LogisticInfo {
  packaging: string[];
  capacity: string[];
  compliance: string[];
}

export interface ApplicationItem {
  title: string;
  desc: string;
}

export interface ProductItem {
  id: string;
  name: string;
  botanicalName: string;
  description: string;
  category: string;
  imageUrl: string;
  overview: string;
  highlights: string[];
  specTable: SpecTableData;
  applications: ApplicationItem[];
  logistics: LogisticInfo;
}

export const productsData: ProductItem[] = [
  {
    id: "psyllium-husk",
    name: "Psyllium Husk",
    botanicalName: "Plantago ovata",
    description: "High-purity whole seed coating of Plantago ovata, sourced from Rajasthan and Gujarat with high swell volume and strict quality standards.",
    category: "Natural Ingredients",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
    overview: "Psyllium Husk is the outer seed coating of Plantago ovata, retained in its whole, natural husk form. India dominates global production, supplying over 85% of the world’s demand. VEDA IMPEX procures raw psyllium seeds from prime agricultural belts, ensuring high swell volume, exceptional mucilage content, and strict purity grades for global buyers.",
    highlights: [
      "Origin: Rajasthan & Gujarat",
      "Purity: 85% to 99% Grades",
      "Swell Volume: Min. 35-50 ml/g",
      "Form: Whole Raw Husk"
    ],
    specTable: {
      headers: ["Parameter", "Grade A: 99% Purity", "Grade B: 95% Purity", "Grade C: 85% / 90% Purity"],
      rows: [
        ["Purity Level", "Min. 99%", "Min. 95%", "85% – 90%"],
        ["Form", "Raw Whole Husk", "Raw Whole Husk", "Raw Whole Husk"],
        ["Swell Volume", "Min. 50 ml/g", "Min. 40–45 ml/g", "Min. 35–40 ml/g"],
        ["Light Extraneous Matter", "Max 0.5%", "Max 2.5%", "Max 5.0%"],
        ["Heavy Extraneous Matter", "Max 0.5%", "Max 2.5%", "Max 5.0%"],
        ["Moisture Content", "Max 11.0%", "Max 12.0%", "Max 12.0%"],
        ["Insect Infestation", "Nil", "Nil", "Nil"]
      ]
    },
    applications: [
      {
        title: "Dietary Supplements",
        desc: "Widely packaged as raw natural fiber or packaged Isabgol for daily digestive health formulations."
      },
      {
        title: "Food Industry",
        desc: "Used as a natural binding agent and high-fiber additive in cereals and snacks."
      },
      {
        title: "Animal Health & Equine Care",
        desc: "Incorporated into specialized equine feed to prevent sand colic and support digestive function."
      }
    ],
    logistics: {
      packaging: [
        "25 kg / 50 lb Multi-wall Paper Bags with inner PE Poly-liner (Food Grade).",
        "25 kg / 50 kg HDPE Woven Bags with PE inner liner.",
        "500 kg / 900 kg Customized Jumbo Bags (FIBC) with top spout and discharge bottom."
      ],
      capacity: [
        "20 ft FCL (Loose Bag Loading): ~9.5 Metric Tons",
        "20 ft FCL (Palletized): ~8 Metric Tons",
        "40 ft FCL (Palletized): ~16 Metric Tons"
      ],
      compliance: [
        "Certificate of Analysis (COA)",
        "Phytosanitary Certificate",
        "Fumigation Certificate",
        "Certificate of Origin (COO)"
      ]
    }
  },
  {
    id: "psyllium-powder",
    name: "Psyllium Husk Powder",
    botanicalName: "Plantago ovata",
    description: "Mechanically pulverized whole Psyllium Husk from 40 to 100 Mesh, ideal for seamless blending in commercial food, baking, and pharmaceutical manufacturing.",
    category: "Natural Ingredients",
    imageUrl: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=600&auto=format&fit=crop",
    overview: "Psyllium Husk Powder is produced by mechanically pulverizing whole Psyllium Husk into fine particle mesh sizes ranging from 40 mesh to 100 mesh. Milling increases bulk density and surface area, making it an ideal ingredient for seamless blending in commercial food, baking, and pharmaceutical manufacturing.",
    highlights: [
      "Origin: Rajasthan & Gujarat",
      "Mesh Sizes: 40 to 100 Mesh",
      "Purity: 95% to 99% Grades",
      "Ideal for: Blending & Baking"
    ],
    specTable: {
      headers: ["Parameter", "40 Mesh Powder", "60 Mesh Powder", "80 / 100 Mesh Fine Powder"],
      rows: [
        ["Purity Options", "95% / 98% / 99%", "95% / 98% / 99%", "98% / 99% High Purity"],
        ["Particle Size", "Passes through 40 Mesh", "Passes through 60 Mesh", "Passes through 80/100 Mesh"],
        ["Swell Volume", "Min. 40–45 ml/g", "Min. 45–50 ml/g", "Min. 50+ ml/g"],
        ["Moisture Content", "Max 10.0%", "Max 10.0%", "Max 9.5%"],
        ["Ash Content", "Max 3.0%", "Max 3.0%", "Max 2.5%"],
        ["Heavy Metals", "Meets USP / EU Limits", "Meets USP / EU Limits", "Meets USP / EU Limits"]
      ]
    },
    applications: [
      {
        title: "Pharmaceuticals & Capsule Filling",
        desc: "Preferred for tableting, capsule encapsulation, and smooth-mixing laxative powders."
      },
      {
        title: "Gluten-Free & Keto Baking",
        desc: "Essential gluten replacer that provides dough elasticity, moisture retention, and crumb structure in gluten-free breads."
      },
      {
        title: "Functional Drinks & Nutraceuticals",
        desc: "Used in soluble dietary fiber drink mixes and meal replacement shakes."
      }
    ],
    logistics: {
      packaging: [
        "25 kg Multi-wall Paper Bags with food-grade inner PE lining.",
        "25 kg Fiber Drums for pharmaceutical clients."
      ],
      capacity: [
        "20 ft FCL (Loose Bag Loading): ~18 Metric Tons",
        "20 ft FCL (Palletized): ~14 to 15 Metric Tons",
        "40 ft FCL (Palletized): ~24 to 25 Metric Tons"
      ],
      compliance: [
        "Batch-tested COA",
        "Phytosanitary Certificate",
        "Fumigation Certificate",
        "Heavy Metal & Microbe testing reports"
      ]
    }
  },
  {
    id: "senna-leaves",
    name: "Senna Leaves & Pods",
    botanicalName: "Cassia angustifolia",
    description: "Premium Cassia angustifolia leaves and pods, sun-dried and graded into prime cuts with standardized Sennosides for global markets.",
    category: "Natural Ingredients",
    imageUrl: "https://images.unsplash.com/photo-1564894536308-4011244a307e?q=80&w=600&auto=format&fit=crop",
    overview: "Senna (Cassia angustifolia), harvested predominantly in the arid regions of Rajasthan, is world-renowned for its anthraquinone glycosides (Sennosides A & B). VEDA IMPEX supplies premium-graded Senna leaves, pods, and siftings that are carefully machine-cleaned, sun-dried, and sorted to retain active botanical properties.",
    highlights: [
      "Origin: Rajasthan, India",
      "Sennosides: 1.5% to 3.5%",
      "Form: Cut Leaves, Pods, Powder",
      "Packaging: Compressed Bales"
    ],
    specTable: {
      headers: ["Product Variant", "Grade / Description", "Sennoside Content (Avg.)", "Primary Application"],
      rows: [
        ["Prime Cut Leaf No. 1", "Large, bold unbroken leaves", "2.5% – 3.0%", "Herbal Teas & Infusions"],
        ["Prime Cut Leaf No. 2", "Medium-sized clean leaves", "2.0% – 2.5%", "Herbal Teas & Extracts"],
        ["Senna Leaves No. 3 / 4", "Small cut leaves / Siftings", "1.5% – 2.0%", "Extraction & Milling"],
        ["Senna Pods (Hand Picked)", "Whole unbroken seed pods", "2.5% – 3.5%", "Botanical Formulations"],
        ["Senna Leaf Powder", "40 to 80 Mesh Fine Powder", "2.0% – 3.0%", "Capsules, Tablets & Extracts"]
      ]
    },
    applications: [
      {
        title: "Herbal Teas & Infusions",
        desc: "Prime cut leaves are widely used in commercial detox and laxative tea blends."
      },
      {
        title: "Pharmaceutical Extraction",
        desc: "High-sennoside crude leaves and pods serve as raw material for manufacturing Sennoside concentrates, syrups, and tablets."
      },
      {
        title: "Cosmetics & Personal Care",
        desc: "Incorporated into natural hair conditioning henna formulations."
      }
    ],
    logistics: {
      packaging: [
        "High-density Hydraulic Compressed Bales (100 kg / 150 kg per bale) wrapped in HDPE cloth and strapped with steel/PP bands.",
        "25 kg / 50 kg HDPE Bags for loose leaf requirements."
      ],
      capacity: [
        "20 ft FCL (Compressed Bales): ~13 to 14 Metric Tons",
        "40 ft High Cube FCL (Compressed Bales): ~26 to 28 Metric Tons"
      ],
      compliance: [
        "Certified low moisture",
        "Pesticide residue tested",
        "Certificate of Analysis (COA)",
        "Phytosanitary Certificate",
        "Fumigation clearances"
      ]
    }
  }
];

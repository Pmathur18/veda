export interface LegalDocumentRequirement {
  country: string;
  product: string;
  documentsRequired: string[];
  notes?: string;
}

export const documentsData: LegalDocumentRequirement[] = [
  {
    country: "United States",
    product: "Spices & Agricultural Products",
    documentsRequired: [
      "FDA Prior Notice",
      "USDA Phytosanitary Certificate",
      "Bill of Lading",
      "Commercial Invoice",
      "Certificate of Origin",
      "Packing List",
      "FDA Food Facility Registration"
    ],
    notes: "Subject to strict FDA inspections. Organic labeling requires USDA certification."
  },
  {
    country: "United States",
    product: "Textiles & Apparel",
    documentsRequired: [
      "Commercial Invoice (with detailed fiber breakdown)",
      "Certificate of Origin (Form A)",
      "Bill of Lading",
      "Packing List",
      "US Customs Bond",
      "EPA TSCA Certification (if treated with flame retardants)"
    ],
    notes: "Must specify percentage of fiber composition, manufacturer details, and country of origin."
  },
  {
    country: "United States",
    product: "Electronics & Machinery",
    documentsRequired: [
      "FCC Declaration of Conformity",
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading",
      "Customs Entry Summary (Form 7501)",
      "UL Safety Certifications (optional but recommended)"
    ],
    notes: "Requires FCC registration for radio-frequency radiating devices."
  },
  {
    country: "United Arab Emirates",
    product: "Spices & Agricultural Products",
    documentsRequired: [
      "Halal Certificate (for processed foods)",
      "Phytosanitary Certificate",
      "Certificate of Origin (attested by UAE Embassy)",
      "Commercial Invoice (attested)",
      "Bill of Lading",
      "Packing List",
      "Health Certificate (issued by government of exporting country)"
    ],
    notes: "Attestation by the UAE Embassy in the exporting country is mandatory for invoices and CO."
  },
  {
    country: "United Arab Emirates",
    product: "Textiles & Apparel",
    documentsRequired: [
      "Commercial Invoice",
      "Certificate of Origin",
      "Bill of Lading",
      "Packing List",
      "Import License"
    ],
    notes: "Standard customs duties apply. Ensure clear labelling of origin on packaging."
  },
  {
    country: "United Arab Emirates",
    product: "Chemical Products",
    documentsRequired: [
      "Material Safety Data Sheet (MSDS) in Arabic/English",
      "Import Permit from Ministry of Climate Change & Environment",
      "Commercial Invoice (attested)",
      "Certificate of Origin (attested)",
      "Bill of Lading",
      "Packing List",
      "Chemical Analysis Report"
    ],
    notes: "Approval from Dubai Municipality or relevant environmental authority required before arrival."
  },
  {
    country: "Germany (European Union)",
    product: "Spices & Agricultural Products",
    documentsRequired: [
      "EU Health Certificate",
      "Phytosanitary Certificate",
      "Certificate of Origin",
      "Commercial Invoice",
      "Packing List",
      "Common Entry Document (CED)",
      "Aflatoxin Analysis Report (mandatory for certain spices)"
    ],
    notes: "Strict maximum residue limits (MRL) for pesticides apply. Compliant with EU food safety standards."
  },
  {
    country: "Germany (European Union)",
    product: "Electronics & Machinery",
    documentsRequired: [
      "CE Declaration of Conformity",
      "RoHS & WEEE Compliance Certificates",
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading",
      "Customs Declaration (Single Administrative Document - SAD)"
    ],
    notes: "CE mark must be physically attached to products and packaging. RoHS certification is mandatory."
  },
  {
    country: "Germany (European Union)",
    product: "Chemical Products",
    documentsRequired: [
      "REACH Registration Certificate",
      "Safety Data Sheet (SDS) in German",
      "Commercial Invoice",
      "Certificate of Origin",
      "Bill of Lading",
      "Packing List",
      "Dangerous Goods Declaration (if applicable)"
    ],
    notes: "Compliance with EU REACH regulations is mandatory for chemicals imported over 1 metric ton/year."
  },
  {
    country: "Singapore",
    product: "Electronics & Machinery",
    documentsRequired: [
      "Enterprise Singapore Safety Mark Certificate (if consumer electronic)",
      "Customs Import Permit (TradeNet)",
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading"
    ],
    notes: "GST registration required. Regulated consumer electronics must carry the Safety Mark."
  },
  {
    country: "Singapore",
    product: "Spices & Agricultural Products",
    documentsRequired: [
      "SFA (Singapore Food Agency) Import Permit",
      "Phytosanitary Certificate",
      "Certificate of Origin",
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading"
    ],
    notes: "Importer must be registered with Singapore Food Agency. Subject to random border testing."
  },
  {
    country: "Australia",
    product: "Spices & Agricultural Products",
    documentsRequired: [
      "BICON Import Permit (Department of Agriculture)",
      "Phytosanitary Certificate (with specific declarations)",
      "Manufacturer's Declaration of Treatment (fumigation/heat)",
      "Commercial Invoice",
      "Packing List",
      "Certificate of Origin",
      "Bill of Lading"
    ],
    notes: "Australia has extremely strict biosecurity and quarantine controls. Fumigation certificate is vital."
  },
  {
    country: "Australia",
    product: "Chemical Products",
    documentsRequired: [
      "AICIS Registration (Australian Industrial Chemicals Introduction Scheme)",
      "Safety Data Sheet (SDS) compliant with GHS",
      "Commercial Invoice",
      "Certificate of Origin",
      "Bill of Lading",
      "Packing List"
    ],
    notes: "Importers must register chemicals with the Australian Industrial Chemicals Introduction Scheme."
  },
  {
    country: "India",
    product: "Electronics & Machinery",
    documentsRequired: [
      "BIS Registration (Bureau of Indian Standards)",
      "WPC ETA Approval (for wireless components)",
      "Bill of Entry",
      "Commercial Invoice",
      "Packing List",
      "Certificate of Origin",
      "Bill of Lading"
    ],
    notes: "Compulsory registration under BIS is required for many consumer electronics items before import."
  },
  {
    country: "India",
    product: "Chemical Products",
    documentsRequired: [
      "CIBRC Registration (for pesticides/herbicides)",
      "BIS Certificate (for specific chemicals)",
      "Bill of Entry",
      "Material Safety Data Sheet (MSDS)",
      "Certificate of Origin",
      "Commercial Invoice",
      "Packing List",
      "Test Analysis Report"
    ],
    notes: "Requires classification under Indian Customs Tariff and clearance from chemical controller if hazardous."
  }
];

export const allCountries = Array.from(new Set(documentsData.map(d => d.country))).sort();
export const allProducts = Array.from(new Set(documentsData.map(d => d.product))).sort();

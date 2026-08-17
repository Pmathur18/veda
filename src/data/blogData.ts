export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogSection {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: "Logistics" | "Customs" | "Sourcing" | "Compliance";
  publishedAt: string;
  readTime: string;
  author: Author;
  gradientFrom: string;
  gradientTo: string;
  content: BlogSection[];
}

export const authors: Record<string, Author> = {
  amit: {
    name: "Amit Varma",
    role: "Founder & Managing Director",
    avatar: "AV",
    bio: "20+ years of experience in cross-border trade lanes, ocean carrier negotiations, and maritime freight routing across APAC."
  },
  jean: {
    name: "Jean-Pierre Dubois",
    role: "Head of European Logistics",
    avatar: "JD",
    bio: "Former Hamburg port compliance director, specializing in REACH regulations, tariff schedules, and European custom procedures."
  },
  sarah: {
    name: "Sarah Patel",
    role: "Chief Compliance Officer",
    avatar: "SP",
    bio: "Licensed US Customs Broker with 15 years focusing on USDA, FDA, and customs clearance regulations."
  }
};

export const blogPosts: BlogPost[] = [
  {
    slug: "navigating-eu-reach-chemical-exports",
    title: "Navigating the New EU REACH Directives: A Guide for Chemical Exporters",
    description: "How the latest European chemical regulations affect documentation, testing, and shipping lanes for global chemical manufacturers.",
    category: "Compliance",
    publishedAt: "August 12, 2026",
    readTime: "6 min read",
    author: authors.jean,
    gradientFrom: "from-[#0B3D91]",
    gradientTo: "to-[#1261C9]",
    content: [
      {
        type: "paragraph",
        text: "The European Union's Registration, Evaluation, Authorisation and Restriction of Chemicals (REACH) regulation stands as one of the most comprehensive and stringent chemical safety frameworks in the world. For international exporters looking to ship chemical substances, mixtures, or finished articles into the European Economic Area (EEA), compliance is not just a matter of checking a box—it is a critical operational gatekeeper."
      },
      {
        type: "heading",
        text: "Understanding the Core Requirements"
      },
      {
        type: "paragraph",
        text: "Under REACH, companies exporting substances into the EU in quantities of one tonne or more per year must register these substances with the European Chemicals Agency (ECHA). Failure to register means the chemical cannot be legally manufactured, imported, or placed on the European market."
      },
      {
        type: "paragraph",
        text: "This regulation operates under the principle of 'no data, no market.' This means the burden of proof lies on the manufacturer or exporter. You must identify and manage the risks linked to the substances you manufacture and market in the EU. You must demonstrate to ECHA how the substance can be safely used, and communicate the risk management measures to the users."
      },
      {
        type: "heading",
        text: "Key Compliance Checklist for Exporters"
      },
      {
        type: "list",
        items: [
          "Appoint an Only Representative (OR): Non-EU manufacturers cannot register substances directly. You must appoint an EU-based 'Only Representative' to fulfill the registration obligations.",
          "Substance Identification & Analytics: Gather precise spectral and analytical data to confirm the composition and purity of the chemical substance.",
          "Compile Safety Data Sheets (SDS): Ensure your Safety Data Sheets comply with Annex II of REACH, translated into the official language of the importing EU member state.",
          "Monitor SVHCs: Check if your substance is on the Candidate List of Substances of Very High Concern (SVHC). If SVHCs are present above 0.1% weight-by-weight, you have immediate communication and notification duties."
        ]
      },
      {
        type: "heading",
        text: "Implications for Shipping and Logistics"
      },
      {
        type: "paragraph",
        text: "From a logistical perspective, non-compliance leads to severe consequences at port terminals. European customs authorities collaborate closely with environmental agencies. Lacking a valid REACH registration or Only Representative certificate can result in container seizures, heavy fines, and mandatory cargo return procedures at ports like Rotterdam, Antwerp, or Hamburg."
      },
      {
        type: "paragraph",
        text: "At Veda Impex, our European Logistics Desk coordinates directly with pre-appointed Only Representatives at port arrival. We verify that all REACH dossiers and registration numbers match the physical cargo manifest before the ship leaves the port of loading, safeguarding your shipments from costly customs holds."
      }
    ]
  },
  {
    slug: "ocean-freight-blank-sailings",
    title: "Understanding Ocean Freight Alliances: How Blank Sailings Affect Your Supply Chain",
    description: "An in-depth look at carrier alliances, structural scheduling drops, and strategies to secure container space.",
    category: "Logistics",
    publishedAt: "July 28, 2026",
    readTime: "5 min read",
    author: authors.amit,
    gradientFrom: "from-[#071B3A]",
    gradientTo: "to-[#0B3D91]",
    content: [
      {
        type: "paragraph",
        text: "Ocean freight is the backbone of global trade, carrying over 80% of all international commercial goods. However, the maritime landscape is dominated by a few massive carrier alliances that dictate schedule frequencies, route capacities, and container pricing. For importers and exporters, understanding how these alliances function—and particularly how they utilize 'blank sailings'—is essential to maintaining an active supply chain."
      },
      {
        type: "heading",
        text: "What are Carrier Alliances?"
      },
      {
        type: "paragraph",
        text: "Global ocean carriers operate under three major vessel-sharing agreements (VSAs): the 2M Alliance, Ocean Alliance, and THE Alliance. By pooling vessels, sharing slots on container ships, and coordinating routes, these alliances allow carriers to optimize space and cut operational costs."
      },
      {
        type: "paragraph",
        text: "While this coordination increases efficiency for shipping lines, it centralized control over trade capacities. When demand drops, alliances collectively cancel scheduled voyages to artificially support freight rates. This operational tactic is known as a blank sailing."
      },
      {
        type: "heading",
        text: "The Impact of Blank Sailings on Shippers"
      },
      {
        type: "paragraph",
        text: "A blank sailing occurs when a vessel skips a scheduled port of call or when the entire voyage is cancelled. The consequences for your logistics include:"
      },
      {
        type: "list",
        items: [
          "Cargo Rollover: If a sailing is blanked, your container is pushed ('rolled') to the next week's vessel, causing immediate transit delays.",
          "Equipment Shortages: Blank sailings disrupt the empty container return cycle, causing shortages of standard 20ft and 40ft containers at exporting ports.",
          "Increased Spot Rates: Reduced shipping capacity drives up competitive spot freight rates, increasing logistics costs."
        ]
      },
      {
        type: "heading",
        text: "Mitigation Strategies for Supply Chain Managers"
      },
      {
        type: "paragraph",
        text: "To protect your business from the volatility of blank sailings, you must adopt a proactive logistical approach. First, book your shipments at least 3 to 4 weeks prior to the cargo ready date. This gives you a buffer in case of capacity cuts. Second, spread your risk by utilizing multiple ocean carriers across different alliances, ensuring that a single blanking does not halt your entire import program."
      },
      {
        type: "paragraph",
        text: "Veda Impex mitigates carrier risks by maintaining contract space agreements across all three major ocean alliances. By securing direct allocations, we can dynamically re-route rolled cargo to alternative carrier vessels, ensuring that your commercial goods arrive on schedule."
      }
    ]
  },
  {
    slug: "avoiding-customs-holds-documentation",
    title: "Avoiding Customs Holds: The 5 Most Common Documentation Mistakes Exporters Make",
    description: "A checklist of critical invoicing, tariff codes, and compliance certifications required to prevent port detention fees.",
    category: "Customs",
    publishedAt: "June 15, 2026",
    readTime: "4 min read",
    author: authors.sarah,
    gradientFrom: "from-[#1261C9]",
    gradientTo: "to-[#38A9F5]",
    content: [
      {
        type: "paragraph",
        text: "A shipping delay at a custom checkpoint is one of the most expensive errors in international trade. Beyond missing critical delivery timelines, cargo stuck in custom clearance accumulates demurrage and detention fees daily, eroding profit margins. Over 70% of customs holds are not caused by contraband or illegal goods, but by minor paperwork discrepancies."
      },
      {
        type: "heading",
        text: "The Top 5 Paperwork Errors at Borders"
      },
      {
        type: "paragraph",
        text: "Here are the most frequent documentation errors flagged by customs inspectors worldwide, and how you can resolve them before cargo departure:"
      },
      {
        type: "list",
        items: [
          "Incorrect HS/HTS Code Classification: Declaring the wrong Harmonized System (HS) code can result in incorrect duty assessments. Even a minor classification error can trigger suspected tariff evasion flags, triggering physical examinations.",
          "Discrepancies in Commercial Invoice Value: The values listed on the Commercial Invoice, Packing List, and Bill of Lading must match. Any mismatch between declared values and market rates flags potential under-invoicing.",
          "Vague Description of Goods: Vague terms like 'metal parts' or 'agricultural items' invite suspicion. Customs agencies require specific descriptions, such as 'Threaded brass bolts' or 'Dried organic cumin seeds.'",
          "Missing or Incomplete Certificates of Origin: Trade agreements offer reduced duty rates, but only if supported by a valid Certificate of Origin. Inaccurate declaration formatting invalidates the certificate.",
          "Mismatched Consignee Details: Ensure the legal entity name, corporate address, and tax registration numbers match legal entity records. A single spelling error can result in cargo holds."
        ]
      },
      {
        type: "heading",
        text: "Building a Compliance-First Trade Desk"
      },
      {
        type: "paragraph",
        text: "Eliminating these errors requires establishing a strict pre-shipment auditing protocol. Your compliance team should review every trade form against import country regulations, ensuring that phytosanitary certificates, dangerous goods declarations, or conformity seals are securely attached."
      },
      {
        type: "paragraph",
        text: "At Veda Impex, we maintain an in-house customs brokerage desk. We run electronic pre-clearance filings through the Automated Broker Interface (ABI) and local customs portals hours before the ship docks, identifying and resolving potential document discrepancies before physical cargo inspection."
      }
    ]
  },
  {
    slug: "decarbonization-maritime-logistics",
    title: "Decarbonization in Maritime Logistics: The Shift Towards Green Shipping Lanes",
    description: "Exploring the transition to low-emission fuels, carbon pricing rules, and how it impacts ocean freight rates.",
    category: "Logistics",
    publishedAt: "May 08, 2026",
    readTime: "7 min read",
    author: authors.amit,
    gradientFrom: "from-[#071B3A]",
    gradientTo: "to-[#1261C9]",
    content: [
      {
        type: "paragraph",
        text: "Global shipping accounts for approximately 3% of total greenhouse gas emissions. As international climate targets tighten, the maritime industry faces pressure to transition to sustainable operations. The International Maritime Organization (IMO) has set targets to achieve net-zero greenhouse gas emissions by or around 2050, initiating a shift in cargo transportation mechanics."
      },
      {
        type: "heading",
        text: "The Rise of Alternate Maritime Fuels"
      },
      {
        type: "paragraph",
        text: "Achieving decarbonization requires moving away from heavy fuel oil (HFO), which has powered container ships for decades. Maritime carriers are investing in alternative fuel technologies, each presenting unique engineering and supply chain challenges:"
      },
      {
        type: "list",
        items: [
          "Liquefied Natural Gas (LNG): Serves as a bridge fuel, reducing CO2 emissions by up to 20%, but criticized due to methane slip concerns.",
          "Green Methanol: Gaining traction as major carriers order methanol-capable vessels, though production of carbon-neutral methanol remains limited.",
          "Green Ammonia: Offers zero-carbon combustion, but presents safety and toxicity handling risks on commercial vessels."
        ]
      },
      {
        type: "heading",
        text: "Regulations Driving Change"
      },
      {
        type: "paragraph",
        text: "Decarbonization is driven by legislative policies. The inclusion of maritime transport in the European Union Emissions Trading System (EU ETS) requires shipping lines to purchase emission allowances for voyages starting or ending at EU ports. This creates a direct financial penalty for carbon-intensive shipping, driving the adoption of fuel-efficient routing."
      },
      {
        type: "paragraph",
        text: "Shippers must expect environmental surcharges as carriers pass on ETS compliance costs and alternate fuel investments. Understanding and calculating these surcharges is essential to predicting landed logistics costs."
      },
      {
        type: "heading",
        text: "Veda Impex's Commitment to Sustainable Sourcing"
      },
      {
        type: "paragraph",
        text: "We assist clients in navigating these changes by offering 'Green Routing' options. By partnering with carriers that utilize biofuel blending and route optimization systems, we help you calculate and reduce your supply chain's carbon footprint, preparing your business for upcoming environmental reporting requirements."
      }
    ]
  }
];

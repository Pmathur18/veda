import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance & Export Process | Indian Export Compliance & Documentation",
  description: "Learn about Veda Impex's agro product quality control, export packaging standards, and compliance. We provide pre-shipment inspection (SGS), phytosanitary certificates, and verified COAs.",
  keywords: [
    "agro product quality control",
    "Indian export compliance",
    "pre-shipment inspection exporter",
    "quality export documentation India",
    "SGS inspected agro exporter",
    "APEDA certified exporter India",
    "Phytosanitary certified export products",
    "export packaging standards India",
    "COA certified Psyllium exporter",
    "quality tested Senna Leaves supplier",
    "export quality standards Indian agro commodities"
  ],
  alternates: {
    canonical: "https://www.vedaimpex.com/export-process",
  },
  openGraph: {
    title: "Quality Assurance & Export Compliance | Veda Impex",
    description: "Explore our pre-shipment inspection protocols, phytosanitary verification, APEDA/SGS compliance, and quality documentation standards for agricultural exports.",
    url: "https://www.vedaimpex.com/export-process",
    siteName: "Veda Impex",
    locale: "en_US",
    type: "website",
  }
};

export default function ExportProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

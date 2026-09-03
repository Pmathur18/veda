import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Control & Export Workflow | VEDA IMPEX India",
  description: "Discover how VEDA IMPEX ensures strict batch quality, laboratory testing (COA), customized packaging, and seamless export fulfillment for global agro commodity buyers.",
  keywords: [
    "agro product quality control",
    "Indian export compliance",
    "pre-shipment inspection exporter",
    "COA certified Psyllium exporter",
    "quality export documentation India"
  ],
  alternates: {
    canonical: "https://www.vedaimpex.com/export-process",
  },
  openGraph: {
    title: "Quality Control & Export Workflow | VEDA IMPEX India",
    description: "Discover how VEDA IMPEX ensures strict batch quality, laboratory testing (COA), customized packaging, and seamless export fulfillment for global agro commodity buyers.",
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

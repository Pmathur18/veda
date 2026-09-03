import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Bulk Psyllium Husk, Psyllium Powder & Senna Leaves Exporters India | VEDA IMPEX",
  description:
    "Source premium Psyllium Husk (99%, 98%, 95%), Psyllium Powder (40-100 Mesh), and Senna Leaves (Prime Cut, Pods) directly from India with custom packaging and COA.",
  keywords: [
    "Psyllium Husk export specifications",
    "Psyllium Powder bulk exporter",
    "buy Senna Leaves bulk",
    "Plantago ovata exporter",
    "Cassia angustifolia exporter India"
  ],
  alternates: {
    canonical: "https://www.vedaimpex.com/products",
  },
  openGraph: {
    title: "Bulk Psyllium Husk, Psyllium Powder & Senna Leaves Exporters India | VEDA IMPEX",
    description:
      "Source premium Psyllium Husk (99%, 98%, 95%), Psyllium Powder (40-100 Mesh), and Senna Leaves (Prime Cut, Pods) directly from India with custom packaging and COA.",
    url: "https://www.vedaimpex.com/products",
    siteName: "VEDA IMPEX",
    locale: "en_US",
    type: "website",
  }
};

export default function ProductsPage() {
  return <ProductsClient />;
}

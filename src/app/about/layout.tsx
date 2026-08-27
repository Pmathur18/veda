import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VEDA IMPEX | Trusted Indian Agro Exporter Jodhpur",
  description: "Learn about VEDA IMPEX, an India-based export house in Jodhpur, Rajasthan, connecting global importers with high-purity Psyllium Husk and Senna Leaves through transparent trade.",
  keywords: [
    "Indian export house",
    "agro export company Jodhpur",
    "trusted Indian trade partner",
    "reliable bulk supplier India",
    "Jodhpur export house",
    "Indian agricultural exporter",
    "B2B export coordinator India",
    "transparent trade exporter India",
    "authentic Indian agro suppliers",
    "verified exporter Jodhpur Rajasthan",
    "ethical agro export company India"
  ],
  alternates: {
    canonical: "https://www.vedaimpex.com/about",
  },
  openGraph: {
    title: "About VEDA IMPEX | Trusted Indian Agro Exporter Jodhpur",
    description: "Learn about VEDA IMPEX, an India-based export house in Jodhpur, Rajasthan, connecting global importers with high-purity Psyllium Husk and Senna Leaves through transparent trade.",
    url: "https://www.vedaimpex.com/about",
    siteName: "VEDA IMPEX",
    locale: "en_US",
    type: "website",
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

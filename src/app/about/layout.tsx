import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VEDA IMPEX | Trusted Indian Product Exporter Jodhpur",
  description: "Discover VEDA IMPEX, a Jodhpur-based export house bridging the gap between premium Indian agro-products and global commercial buyers.",
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
    title: "About VEDA IMPEX | Trusted Indian Product Exporter Jodhpur",
    description: "Discover VEDA IMPEX, a Jodhpur-based export house bridging the gap between premium Indian agro-products and global commercial buyers.",
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

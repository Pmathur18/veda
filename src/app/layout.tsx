import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veda Impex | Trusted Indian Agro Exporters & Trade Partner",
  description: "Veda Impex is a Jodhpur-based B2B agro exporter and trade partner. We are a reliable bulk supplier of premium Psyllium Husk (Plantago ovata) and Senna Leaves.",
  keywords: [
    "Indian agro exporters",
    "Psyllium Husk bulk supplier",
    "Senna Leaves exporter India",
    "trusted Indian trade partner",
    "Indian export house",
    "natural ingredients exporter India",
    "bulk agro commodities supplier",
    "Jodhpur export company",
    "B2B agro exporter India",
    "buy Indian agro products in bulk",
    "reliable Psyllium and Senna exporter",
    "Indian origin natural products supplier"
  ],
  alternates: {
    canonical: "https://www.vedaimpex.com",
  },
  openGraph: {
    title: "Veda Impex | Trusted Indian Agro Exporters & Trade Partner",
    description: "Veda Impex is a leading Jodhpur export company coordinating bulk shipments of premium Psyllium Husk and Senna Leaves from India to global B2B buyers.",
    url: "https://www.vedaimpex.com",
    siteName: "Veda Impex",
    locale: "en_US",
    type: "website",
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Jodhpur",
    "geo.position": "26.2389;73.0243",
    "ICBM": "26.2389, 73.0243",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, montserrat.variable, "font-sans")}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "@id": "https://www.vedaimpex.com/#corporation",
              "name": "Veda Impex",
              "url": "https://www.vedaimpex.com",
              "logo": "https://www.vedaimpex.com/logo.png",
              "description": "Veda Impex is a premier Indian export coordinator specializing in premium botanical commodities, including high-purity Psyllium Husk (Plantago ovata) and commercial-grade Senna Leaves (Cassia angustifolia).",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Heavy Industrial Area",
                "addressLocality": "Jodhpur",
                "addressRegion": "Rajasthan",
                "postalCode": "342001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.2389,
                "longitude": 73.0243
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-291-555-0145",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": "English"
              },
              "location": [
                {
                  "@type": "Place",
                  "name": "Veda Impex Headquarters (Jodhpur)",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Heavy Industrial Area",
                    "addressLocality": "Jodhpur",
                    "addressRegion": "Rajasthan",
                    "postalCode": "342001",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 26.2389,
                    "longitude": 73.0243
                  }
                },
                {
                  "@type": "Place",
                  "name": "Mundra Port Liaison Office",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Port User Building, Mundra Port",
                    "addressLocality": "Kutch",
                    "addressRegion": "Gujarat",
                    "postalCode": "370421",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 22.8397,
                    "longitude": 69.7153
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-dark-blue text-dark-blue flex flex-col font-sans antialiased overflow-x-hidden">
        <Header />
        
        {/* Floating parallax page wrapper */}
        <div className="relative z-10 bg-[#FFFFFF] shadow-[0_20px_50px_rgba(0,0,0,0.12)] rounded-b-[40px] md:rounded-b-[55px]">
          <main className="min-h-screen flex flex-col pt-16 pb-12">
            {children}
          </main>
        </div>

        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

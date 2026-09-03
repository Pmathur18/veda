import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact VEDA IMPEX | Request a Quote or Spec Sheet",
  description:
    "Get in touch with VEDA IMPEX for Psyllium Husk and Senna Leaves export enquiries. Share your specifications, volume, and destination port for a commercial quote.",
  keywords: [
    "Contact VEDA IMPEX",
    "Request Quote Psyllium Husk",
    "Senna Leaves supplier enquiry",
    "bulk agro export quote India",
    "Jodhpur export desk contact",
    "FOB CIF quote India"
  ],
  alternates: {
    canonical: "https://www.vedaimpex.com/contact",
  },
  openGraph: {
    title: "Contact VEDA IMPEX | Request a Quote or Spec Sheet",
    description:
      "Get in touch with VEDA IMPEX for Psyllium Husk and Senna Leaves export enquiries. Share your specifications, volume, and destination port for a commercial quote.",
    url: "https://www.vedaimpex.com/contact",
    siteName: "VEDA IMPEX",
    locale: "en_US",
    type: "website",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VEDA IMPEX Headquarters",
    "image": "https://www.vedaimpex.com/logo.png",
    "url": "https://www.vedaimpex.com/contact",
    "telephone": "+91-291-555-0145",
    "email": "connect@vedaimpex.com",
    "priceRange": "$$",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.vedaimpex.com"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd)
        }}
      />
      {children}
    </>
  );
}

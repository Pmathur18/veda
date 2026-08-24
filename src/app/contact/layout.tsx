import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Request Quote & Source Agro Products India | VEDA IMPEX",
  description: "Connect with Veda Impex's Jodhpur coordinate desk for FOB/CIF bulk pricing. Request quote on Psyllium Husk containers and Senna Leaves compressed bales.",
  keywords: [
    "VEDA IMPEX contact",
    "Indian exporter quote",
    "source agro products India",
    "bulk export enquiry India",
    "request Psyllium Husk quote",
    "Senna Leaves bulk pricing enquiry",
    "FOB CIF agro quotation India",
    "request quote Psyllium Husk container",
    "contact Indian Senna supplier",
    "commercial agro enquiry VEDA IMPEX"
  ],
  alternates: {
    canonical: "https://www.vedaimpex.com/contact",
  },
  openGraph: {
    title: "Contact Veda Impex | Source Agro Products India & Request Quotes",
    description: "Submit your container-load specifications and commercial export inquiries. Get FOB or CIF quotes directly from our Jodhpur headquarters.",
    url: "https://www.vedaimpex.com/contact",
    siteName: "Veda Impex",
    locale: "en_US",
    type: "website",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

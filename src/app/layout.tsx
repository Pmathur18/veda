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
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Veda Impex | Global Freight, Logistics & Import-Export Solutions",
  description: "Veda Impex delivers elite international freight forwarding, ocean shipping, air cargo, custom clearances, and global trading services with unmatched efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, montserrat.variable, "font-sans")}>
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

import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "PARĀ — The Sthapatya Studio | Architecture & Interior Design",
  description:
    "Premium contemporary Indian architecture, interior design, Vastu and spatial design studio based in Rajkot, Gujarat, led by Principal Architect Ar. Urval Dhruve.",
  keywords: [
    "PARĀ",
    "The Sthapatya Studio",
    "Ar. Urval Dhruve",
    "Architect Rajkot",
    "Architecture Gujarat",
    "Luxury Interior Design",
    "Vastu Architect",
    "Pranic FengShui",
    "Residential Architecture",
    "Commercial Architecture",
    "Resort Architecture Sasan"
  ],
  authors: [{ name: "Ar. Urval Dhruve" }],
  openGraph: {
    title: "PARĀ — The Sthapatya Studio",
    description: "Spaces with soul. Architecture, interiors, and spatial sanctuaries shaped around the way you live.",
    url: "https://parasthapatya.in",
    siteName: "PARĀ — The Sthapatya Studio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-para-charcoal text-para-ivory antialiased selection:bg-para-bronze selection:text-para-ivory">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

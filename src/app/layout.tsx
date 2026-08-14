import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveatScript = Caveat({
  variable: "--font-script-handwriting",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Raso Pulang | Surat Cinta untuk Rendang",
  description:
    "A romantic digital love letter to Rendang. Slow-cooked with patience, layered with memory, and shared across generations — Rendang is more than a dish. It is a feeling of home.",
  keywords: [
    "Rendang",
    "Minangkabau",
    "Surat Cinta",
    "Indonesian Cuisine",
    "Comfort Food",
    "Scrapbook Storytelling",
    "DEV Community Frontend Challenge",
  ],
  authors: [{ name: "Raso Pulang" }],
  openGraph: {
    title: "Raso Pulang | Surat Cinta untuk Rendang",
    description:
      "A digital love letter to Rendang — celebrating patience, family, memory, and Minangkabau culture.",
    url: "https://raso-pulang.vercel.app",
    siteName: "Raso Pulang",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} ${caveatScript.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF5ED] text-[#2B1710] font-sans selection:bg-[#B95032] selection:text-[#FFF9EF]">
        {children}
      </body>
    </html>
  );
}

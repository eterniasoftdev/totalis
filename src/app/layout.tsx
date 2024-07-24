import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StickyNav from "./_components/StickyEnquiry/Page";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Totalis by Hindalco",
  description: "A Totalis Doors and Windows Product by Aditya Birla Hindalco",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Totalis",
  url: "https://totalis.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://totalis.in/product?product=sliding",
    "query-input": "required name=Sliding windows",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Totalis - Quality Doors and Windows"
        />
        <meta
          property="og:description"
          content="Discover high-quality doors and windows from Totalis, an Eternia product. Enhance your home with our durable and stylish solutions."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="relative z-30">{children}</div>
        <Footer />
        <StickyNav />
        <Toaster />
      </body>
    </html>
  );
}

"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StickyNav from "./_components/StickyEnquiry/Page";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Totalis",
//   description: "An Eternia Windows Product",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`w - screen ${isChecked ? "md:h-screen" : ""}`}>
          <Header setIsChecked={setIsChecked} isChecked={isChecked} />
          <StickyNav />
          <div className="relative z-30">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

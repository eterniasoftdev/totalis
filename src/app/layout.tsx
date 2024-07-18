"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StickyNav from "./_components/StickyEnquiry/Page";
import { Suspense, useState } from "react";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

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
          <Head>
            <title>Totalis</title>
            <meta name="description" content="An Eternia Windows Product" />
            <meta name="keywords" content="totalis, windows, aluminium" />
            {/* Add more metadata tags as needed */}
          </Head>
          <Header setIsChecked={setIsChecked} isChecked={isChecked} />
          <Suspense fallback={<div>Loading...</div>}>
            <div className="relative z-30">{children}</div>
            <Toaster />
          </Suspense>
          <Footer />
          <StickyNav />
          {/* <button className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md z-50">
            Button
          </button> */}
        </div>
      </body>
    </html>
  );
}

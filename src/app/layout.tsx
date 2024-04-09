import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StickyNav from "./_components/StickyEnquiry/Page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Totalist",
  description: "An Eternia Windows Product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="w-screen bg-gray-200"> */}

        <Header />
        <StickyNav />
        <div className="relative z-30">{children}</div>
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}

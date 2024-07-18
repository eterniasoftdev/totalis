import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Why Totalis",
  description:
    "Superior Strength & Durability, Rigorously Tested and Certified, Low Maintenance, Versatile Design Options, Environmentally Sustainable, Sleek Aesthetics, Superior Performance and High Durability, Unparalleled Strength, Effortless Operation ",
};
export default function WhyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

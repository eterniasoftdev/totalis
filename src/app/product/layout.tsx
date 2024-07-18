import type { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Totalis-Products",
  description: "Sliding Windows, Casement, Doors. ",
};
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense>{children}</Suspense>;
}

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Totalis-Products",
  description: "Sliding Windows, Casement, Doors. ",
};
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { ReactNode } from "react";
import Navbar from "@/modules/common/components/Navbar";

export default function DefaultLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <>
      <Navbar />
      <main className={className ?? ""}>{children}</main>
    </>
  );
}

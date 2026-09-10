import type { ReactNode } from "react";

import { HelpHeader } from "@/components/layout/HelpHeader";

export default function HelpLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <HelpHeader />
      {children}
    </>
  );
}
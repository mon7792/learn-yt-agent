"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/provider/theme";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
"use client";
import { ThemeProvider } from "@/provider/theme";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <ThemeProvider>
        {children}
      </ThemeProvider>
  );
}
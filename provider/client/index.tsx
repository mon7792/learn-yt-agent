"use client";
import { ThemeProvider } from "@/provider/theme";
import { SchematicProvider } from "@schematichq/schematic-react";
export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY) {
    throw new Error("NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY is not set");
  }

  return (
    <SchematicProvider
      publishableKey={process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </SchematicProvider>
  );
}

import { type Metadata } from "next";
import { Cabin } from "next/font/google";
import ClientWrapper from "@/provider/client";
import { Header } from "@/components/structure/Header";

import "./globals.css";
import "./themes.css";


const cabinFont = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Learn YT",
  description: "Learn YT is a platform for learning from YouTube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cabinFont.variable} antialiased`}
      >
        <ClientWrapper>
          <Header />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}

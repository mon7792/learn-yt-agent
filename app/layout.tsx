import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientWrapper from "@/components/client-wrapper";
import { Header } from "@/components/structure/Header";

import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" data-theme="dark" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>
          <Header />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}

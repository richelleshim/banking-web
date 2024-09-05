export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import {  Open_Sans } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Plutus",
  description: "Banking",
  icons: {
    icon: "/icons/plutusLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

// {`${inter.variable}
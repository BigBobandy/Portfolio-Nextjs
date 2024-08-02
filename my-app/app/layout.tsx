import type { Metadata } from "next";
import { Hind } from "next/font/google";

import "./globals.css";

const hind = Hind({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Jackson | Portfolio",
  description: "Web dev portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`hind.className  text-secondary w-full h-screen 
           `}
      >
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Tickete",
  description: "Discover the best of Dubai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}

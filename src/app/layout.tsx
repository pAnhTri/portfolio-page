import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils/cn";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anh-Tri Pham's Portfolio Page",
  description: "Anh-Tri Pham's Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${inter.className} antialiased`)}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
      <body className="flex flex-col min-h-screen antialiased">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}

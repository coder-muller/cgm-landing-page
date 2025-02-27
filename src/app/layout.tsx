import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CGM Sistemas",
  description: "Soluções completas para farmácias, drogarias, lojas, mercados, postos de combustíveis e silos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}> {children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Use metadata export for global <head> values
export const metadata: Metadata = {
  title: "Filaquin™ Anal Gland Support Soft Chews for Dogs",
  description:
    "Filaquin™ Anal Gland Support Soft Chews contain pre & postbiotics, beta-glucans, and NMXFBR4™ for digestive and immune health.",
  openGraph: {
    title: "Filaquin™ Anal Gland Support Soft Chews for Dogs",
    description:
      "Support your dog's anal gland, digestive, and immune health with Filaquin™ and NMXFBR4™.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

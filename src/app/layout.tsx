import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joel Duran — AI Product Manager",
  description:
    "AI Product Manager with 5+ years building intelligent products at scale. Previously shipping Copilot & Recall at Microsoft.",
  openGraph: {
    title: "Joel Duran — AI Product Manager",
    description:
      "AI Product Manager with 5+ years building intelligent products at scale. Previously shipping Copilot & Recall at Microsoft.",
    url: "https://joelduran.com",
    siteName: "Joel Duran",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Duran — AI Product Manager",
    description:
      "AI Product Manager with 5+ years building intelligent products at scale. Previously shipping Copilot & Recall at Microsoft.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

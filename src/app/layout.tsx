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
    images: [{ url: "https://joelduran.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Duran — AI Product Manager",
    description:
      "AI Product Manager with 5+ years building intelligent products at scale. Previously shipping Copilot & Recall at Microsoft.",
    images: ["https://joelduran.com/og-image.png"],
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-foreground focus:outline focus:outline-accent"
        >
          Skip to main content
        </a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

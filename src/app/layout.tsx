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
  metadataBase: new URL("https://joelduran.com"),
  title: "Joel Duran — AI Product Manager",
  description:
    "AI Product Manager who built Copilot and Recall at Microsoft and is now shipping agentic AI at WebMD. 490M+ users across products.",
  openGraph: {
    title: "Joel Duran — AI Product Manager",
    description:
      "AI Product Manager who built Copilot and Recall at Microsoft and is now shipping agentic AI at WebMD. 490M+ users across products.",
    url: "https://joelduran.com",
    siteName: "Joel Duran",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Duran — AI Product Manager",
    description:
      "AI Product Manager who built Copilot and Recall at Microsoft and is now shipping agentic AI at WebMD. 490M+ users across products.",
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joel Duran",
  jobTitle: "AI Product Manager",
  worksFor: {
    "@type": "Organization",
    name: "WebMD",
  },
  url: "https://joelduran.com",
  sameAs: [
    "https://www.linkedin.com/in/joeldabr/",
    "https://github.com/joelszn",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
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

import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/ui/BackToTop";
import config from "@/content/config.json";

const GA_MEASUREMENT_ID = config.gaMeasurementId;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://julihstu.github.io";

export const metadata: Metadata = {
  title: "Julekha Khatun | Digital Marketer & Project Coordinator",
  description:
    "Digital Marketer, Social Media Strategist, and Project Coordinator with 2+ years creating SEO-optimized content, scaling ad campaigns, and managing brand pages with a 30K+ combined audience.",
  keywords: [
    "digital marketer",
    "social media strategist",
    "media buyer",
    "project coordinator",
    "content writer",
    "SEO",
    "Meta Ads",
    "portfolio",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Julekha Khatun" }],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Julekha Khatun | Digital Marketer & Project Coordinator",
    description:
      "Digital Marketer and Project Coordinator specializing in social media strategy, paid ads, and content.",
    type: "website",
    url: BASE_URL,
  },
  twitter: {
    card: "summary",
    title: "Julekha Khatun | Digital Marketer & Project Coordinator",
    description:
      "Digital Marketer and Project Coordinator specializing in social media strategy, paid ads, and content.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Julekha Khatun",
  alternateName: "Juli",
  url: BASE_URL,
  jobTitle: "Digital Marketer & Project Coordinator",
  worksFor: { "@type": "Organization", name: "Holy Gift" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://jkjuli.notion.site/Juli-s-Portfolio-285e6f8b1c91808095dfe3e1adce3b48",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        <div className="md:pl-20">
          <main id="main-content">{children}</main>
          <Footer />
        </div>
        <BackToTop />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

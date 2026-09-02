import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { HashScroll } from "@/components/hash-scroll";
import { MotionProvider } from "@/components/motion-provider";
import { profile } from "@/data/portfolio";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const siteUrl = "https://www.madhurjain.in";
const description =
  "Madhur Jain combines customer insight, commercial judgment, data fluency, and hands-on AI depth across growth, pricing, subscriptions, and ecommerce products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Product Manager for Growth, Pricing and AI`,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  keywords: [
    "Madhur Jain",
    "Product Manager",
    "Senior Product Manager",
    "AI Product Manager",
    "Growth Product Manager",
    "Pricing Product Manager",
    "Product portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  category: "Product management portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} | Product Manager for Growth, Pricing and AI`,
    description,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Madhur Jain, product manager for growth, pricing, and AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Product Manager for Growth, Pricing and AI`,
    description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${hankenGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body>
        <MotionProvider />
        <HashScroll />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: `${profile.name} Portfolio`,
                  description,
                  inLanguage: "en-IN",
                  author: { "@id": `${siteUrl}/#person` },
                },
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: profile.name,
                  url: siteUrl,
                  jobTitle: "Product Manager",
                  description,
                  homeLocation: {
                    "@type": "Place",
                    name: profile.location,
                  },
                  worksFor: {
                    "@type": "Organization",
                    name: "PRISM",
                  },
                  sameAs: [profile.linkedinUrl, profile.githubUrl],
                  knowsAbout: [
                    "AI product management",
                    "Consumer products",
                    "Data products",
                    "Consumer growth",
                    "Pricing",
                    "Monetization",
                    "Ecommerce",
                    "Product strategy",
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

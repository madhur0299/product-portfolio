import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
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

const siteUrl = "https://www.madhurjain.in";
const description =
  "Madhur Jain is a product manager building AI, US consumer, and growth products: pricing and conversion at PRISM, subscriber growth at SplashLearn, and D2C growth at Honasa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | AI, Consumer & Growth Product Manager`,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  keywords: [
    "Madhur Jain",
    "Product Manager",
    "Senior Product Manager",
    "AI Product Manager",
    "Growth Product Manager",
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
    title: `${profile.name} | AI, Consumer & Growth Product Manager`,
    description,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Madhur Jain, AI, data, and growth product manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | AI, Consumer & Growth Product Manager`,
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
    <html lang="en" className={`${manrope.variable} ${jetBrainsMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              url: siteUrl,
              jobTitle: "AI, Consumer & Growth Product Manager",
              description,
              sameAs: [profile.linkedinUrl, profile.githubUrl],
              knowsAbout: [
                "AI product management",
                "Consumer products",
                "Data products",
                "Consumer growth",
                "Monetization",
                "Ecommerce",
                "Product strategy",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

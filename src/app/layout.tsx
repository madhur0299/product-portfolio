import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

const siteUrl = "https://www.madhurjain.in";
const description =
  "Portfolio of Madhur Jain, Product Manager III with 5+ years across AI and data products, consumer growth, monetization, and ecommerce.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | Product Manager III`,
    template: `%s | ${profile.name}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Madhur Jain",
    "Product Manager III",
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
    title: `${profile.name} | Product Manager III`,
    description,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Madhur Jain, Product Manager III",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Product Manager III`,
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
    <html lang="en">
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
              jobTitle: "Product Manager III",
              description,
              sameAs: [profile.linkedinUrl, profile.githubUrl],
              knowsAbout: [
                "AI product management",
                "Data products",
                "Consumer growth",
                "Monetization",
                "Ecommerce",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

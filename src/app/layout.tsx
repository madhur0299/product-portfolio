import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

const siteUrl = "https://www.madhurjain.in";
const description =
  "Portfolio of Madhur Jain, a product manager with 5+ years across AI and data products, consumer growth, monetization, and ecommerce.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | AI, Data & Growth Product Manager`,
    template: `%s | ${profile.name}`,
  },
  description,
  alternates: {
    canonical: "/",
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
    title: `${profile.name} | AI, Data & Growth Product Manager`,
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
    title: `${profile.name} | AI, Data & Growth Product Manager`,
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
              jobTitle: "Product Manager",
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

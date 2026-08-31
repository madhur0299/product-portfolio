import type { Metadata } from "next";
import { profile } from "@/data/portfolio";

const siteUrl = "https://www.madhurjain.in";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const socialTitle = path === "/" ? `${profile.name} | ${title}` : `${title} | ${profile.name}`;

  return {
    title: path === "/" ? { absolute: socialTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: canonical,
      title: socialTitle,
      description,
      siteName: `${profile.name} Portfolio`,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${title} by ${profile.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}

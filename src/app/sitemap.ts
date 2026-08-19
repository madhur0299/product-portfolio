import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/portfolio";

const siteUrl = "https://www.madhurjain.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((caseStudy) => ({
      url: `${siteUrl}/work/${caseStudy.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

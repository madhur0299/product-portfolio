import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/portfolio";

const siteUrl = "https://www.madhurjain.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutes = ["experience", "coach", "skills", "how-i-work", "resume"];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...portfolioRoutes.map((route) => ({
      url: `${siteUrl}/${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "resume" ? 0.7 : 0.9,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: `${siteUrl}/work/${caseStudy.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

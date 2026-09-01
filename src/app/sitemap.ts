import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/portfolio";

const siteUrl = "https://www.madhurjain.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutes = ["experience", "coach", "skills", "how-i-work", "resume"];

  return [
    {
      url: siteUrl,
    },
    ...portfolioRoutes.map((route) => ({
      url: `${siteUrl}/${route}`,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: `${siteUrl}/work/${caseStudy.slug}`,
    })),
  ];
}

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    excerpt: z.string().optional(),
    heroImage: z.string().optional(),
	locale: z.enum(["en", "de"]),
    translationKey: z.string(),
  }),
});

export const collections = { blog };
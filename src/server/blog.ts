import { createServerFn } from "@tanstack/react-start";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// We read from the current working directory
const CONTENT_DIR = path.join(process.cwd(), "content");

export const getPosts = createServerFn({ method: "GET" }).handler(async () => {
  const blogDir = path.join(CONTENT_DIR, "blog");
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir);
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: data.slug || file.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || "2026-04-28",
        category: data.category || "General",
        tags: data.tags || [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // descending

  return posts;
});

export const getPostBySlug = createServerFn({ method: "GET" })
  .handler(async ({ data: payload }: { data: unknown }) => {
    const slug = typeof payload === "string" ? payload : String(payload);
    const blogDir = path.join(CONTENT_DIR, "blog");
    if (!fs.existsSync(blogDir)) throw new Error("Blog directory not found");

    const files = fs.readdirSync(blogDir);
    const matchedFile = files.find((file) => {
      // It can either match the filename or the slug in the frontmatter
      const fullPath = path.join(blogDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      const fileSlug = data.slug || file.replace(/\.md$/, "");
      return fileSlug === slug;
    });

    if (!matchedFile) {
      throw new Error("Post not found");
    }

    const fullPath = path.join(blogDir, matchedFile);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      frontmatter: {
        slug: data.slug || matchedFile.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || "2026-04-28",
        category: data.category || "General",
        tags: data.tags || [],
      },
      content,
    };
  });

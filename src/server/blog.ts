import { createServerFn } from "@tanstack/react-start";
import matter from "gray-matter";

// Load all markdown files at build time for Cloudflare compatibility
const markdownFiles = import.meta.glob('/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const getPosts = createServerFn({ method: "GET" }).handler(async () => {
  const posts = Object.entries(markdownFiles)
    .map(([filepath, fileContents]) => {
      const filename = filepath.split("/").pop() || "";
      const { data } = matter(fileContents);
      return {
        slug: data.slug || filename.replace(/\.md$/, ""),
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

    const matchedEntry = Object.entries(markdownFiles).find(([filepath, fileContents]) => {
      const filename = filepath.split("/").pop() || "";
      const { data } = matter(fileContents);
      const fileSlug = data.slug || filename.replace(/\.md$/, "");
      return fileSlug === slug;
    });

    if (!matchedEntry) {
      throw new Error("Post not found");
    }

    const { data, content } = matter(matchedEntry[1]);

    return {
      frontmatter: {
        slug: data.slug || matchedEntry[0].split("/").pop()?.replace(/\.md$/, "") || "",
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || "2026-04-28",
        category: data.category || "General",
        tags: data.tags || [],
      },
      content,
    };
  });

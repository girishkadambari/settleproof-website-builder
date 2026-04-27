import { createFileRoute, Link } from "@tanstack/react-router";
import { getPostBySlug } from "@/server/blog";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/routes/index";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    return await getPostBySlug({ data: params.slug });
  },
  component: BlogPost,
});

function BlogPost() {
  const { frontmatter, content } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-black pt-32 pb-16 font-sans text-white">
      <Navbar />
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-white font-medium mb-12 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>
        
        <header className="mb-16">
          <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
              {frontmatter.category}
            </span>
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            {frontmatter.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {frontmatter.description}
          </p>
        </header>

        <div className="markdown-body text-lg leading-relaxed text-muted-foreground space-y-6">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-white mt-12 mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-white mt-10 mb-4" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold text-white mt-8 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="mb-6" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-6 space-y-2 text-white/80" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-6 space-y-2 text-white/80" {...props} />,
              a: ({node, ...props}) => <a className="text-primary hover:underline font-medium" {...props} />,
              strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-4 italic text-white/70 my-6" {...props} />,
              code: ({node, ...props}) => <code className="bg-white/10 rounded px-1.5 py-0.5 text-sm text-primary" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}

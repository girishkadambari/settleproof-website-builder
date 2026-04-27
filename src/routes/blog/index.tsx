import { createFileRoute, Link } from "@tanstack/react-router";
import { getPosts } from "@/server/blog";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/routes/index";

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    return await getPosts();
  },
  component: BlogIndex,
});

function BlogIndex() {
  const posts = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-black pt-32 pb-16 font-sans">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Resources</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            The SettleProof Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical guides, product updates, and insights on how to automate your financial operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/$slug`}
              params={{ slug: post.slug }}
              className="group flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/10"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {post.category}
                  </span>
                  <time dateTime={post.date} className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </time>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary">
                Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

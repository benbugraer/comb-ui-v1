import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVariants } from "@/data/variant";
import { CSSProperties } from "react";
import { Badge } from "@/components/ui/badge";

// export async function generateMetadata({
//   params,
// }: {
//   params: {
//     slug: string;
//   };
// });

export default async function Variant({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getVariants(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section
      id="blog"
      className="mx-auto relative max-w-2xl py-[3.25rem] sm:py-[6.1rem] sm:w-1/2 lg:w-3/5 flex-col"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https:/  /schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
          }),
        }}
      />
      <h1
        className="title font-medium text-2xl tracking-tighter max-w-[650px] animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        {post.metadata.title}
      </h1>
      <div
        className="flex s items-center mt-2 mb-8 text-sm gap-4 animate-in"
        style={{ "--index": 1 } as CSSProperties}
      >
        {post.metadata.tags.map((tag: string) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      <article
        className="prose dark:prose-invert animate-in"
        style={{ "--index": 2 } as CSSProperties}
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}

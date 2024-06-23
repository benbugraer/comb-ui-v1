import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVariants } from "@/data/variant";

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
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]"></div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}

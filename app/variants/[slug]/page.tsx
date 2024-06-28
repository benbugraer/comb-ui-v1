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
  let variant = await getVariants(params.slug);

  if (!variant) {
    notFound();
  }

  return (
    <div className="mx-auto relative max-w-2xl py-[3.25rem] sm:py-[6.1rem] sm:w-1/2 lg:w-3/5 flex-col">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            headline: variant.metadata.title,
            description: variant.metadata.description,
            icons: variant.metadata.icons,
          }),
        }}
      />
      <h1
        className="title font-medium uppercase rounded-2xl text-2xl max-w-[650px] animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        {variant.metadata.title}
      </h1>
      <div
        className="flex s items-center mt-8 mb-8 text-sm gap-4 animate-in"
        style={{ "--index": 1 } as CSSProperties}
      >
        {variant.metadata.tags.map((tag: string) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="mt-4">{variant.metadata.icons}</div>
      <article
        className="prose dark:prose-invert animate-in"
        style={{ "--index": 2 } as CSSProperties}
        dangerouslySetInnerHTML={{ __html: variant.source }}
      ></article>
    </div>
  );
}

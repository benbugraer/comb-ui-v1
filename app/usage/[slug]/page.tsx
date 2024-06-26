import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUsages } from "@/data/usage";
import { CSSProperties } from "react";
import { Snippet } from "@nextui-org/react";

// export async function generateMetadata({
//   params,
// }: {
//   params: {
//     slug: string;
//   };
// });

export default async function Usages({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let usage = await getUsages(params.slug);

  if (!usage) {
    notFound();
  }

  return (
    <div className="mx-auto relative max-w-2xl py-[3.25rem] sm:py-[6.1rem] sm:w-1/2 lg:w-3/5 flex-col">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            title: usage.metadata.title,
            description: usage.metadata.description,
            snippet: usage.metadata.snippet,
          }),
        }}
      />
      <h1
        className="title font-medium bg-black text-white p-2.5 inline-block rounded-2xl text-xl max-w-[650px] animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        {usage.metadata.title}
      </h1>
      <div
        className="flex s items-center mt-8 mb-8 text-sm gap-4 animate-in"
        style={{ "--index": 1 } as CSSProperties}
      >
        <Snippet
          variant="shadow"
          className="bg-tertiary text-primary"
          tooltipProps={{
            content: "Copy this snippet",
            placement: "right",
            closeDelay: 0,
          }}
        >
          {usage.metadata.snippet}
        </Snippet>
      </div>
      <article
        className="prose dark:prose-invert animate-in"
        style={{ "--index": 2 } as CSSProperties}
        dangerouslySetInnerHTML={{ __html: usage.source }}
      ></article>
    </div>
  );
}

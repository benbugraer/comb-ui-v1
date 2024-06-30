import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUsages } from "@/data/usage";
import { CSSProperties } from "react";
import { Snippet } from "@nextui-org/react";
import { Package } from "lucide-react";
import PackagesTabs from "@/components/PackagesTabs";

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
            snippet2: usage.metadata.snippet2,
            snippet3: usage.metadata.snippet3,
          }),
        }}
      />
      <h1
        className="title font-medium uppercase inline-block rounded-2xl text-2xl max-w-[650px] animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        {usage.metadata.title}
      </h1>
      <p
        className="text-tertiary text-lg animate-in mt-4 mb-12"
        style={{ "--index": 1 } as CSSProperties}
      >
        {usage.metadata.description}
      </p>
      <h1
        className="text-2xl mt-3 font-bold animate-in"
        style={{ "--index": 2 } as CSSProperties}
      >
        Installations
      </h1>
      <p
        className="mt-3 text-tertiary text-lg animate-in"
        style={{ "--index": 3 } as CSSProperties}
      >
        There 3 packet modules for your own project.
      </p>
      <PackagesTabs />
      {/* <div
        className="grid grid-rows-1 sm:grid-flow-row items-center mt-8 mb-8 text-sm gap-4 animate-in"
        style={{ "--index": 4 } as CSSProperties}
      >
        {[
          usage.metadata.snippet,
          usage.metadata.snippet2,
          usage.metadata.snippet3,
        ].map((snippet, index) => (
          <Snippet
            key={index}
            variant="shadow"
            className="bg-tertiary text-primary animate-in max-w-md w-full" // Burada max-w-md sınıfı ekledim
            tooltipProps={{
              content: "Copy this snippet",
              placement: "right",
              closeDelay: 0,
            }}
            style={{ "--index": index + 5 } as CSSProperties}
          >
            <span>{snippet}</span>
          </Snippet>
        ))}
      </div> */}

      <div
        className="prose dark:prose-invert animate-in"
        style={{ "--index": 8 } as CSSProperties}
        dangerouslySetInnerHTML={{ __html: usage.source }}
      ></div>
    </div>
  );
}

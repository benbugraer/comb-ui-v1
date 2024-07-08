import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecipes } from "@/data/recipes";
import { CSSProperties } from "react";

// export async function generateMetadata({
//   params,
// }: {
//   params: {
//     slug: string;
//   };
// });

export default async function Recipe({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let recipe = await getRecipes(params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="mx-auto relative max-w-2xl py-[3.25rem] sm:py-[6.1rem] sm:w-1/2 lg:w-3/5 flex-col">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            headline: recipe.metadata.title,
            description: recipe.metadata.description,
            icons: recipe.metadata.icons,
          }),
        }}
      />
      <h1
        className="font-medium  rounded-xl p-2 bg-tertiary text-xl inline-block animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        {recipe.metadata.title}
      </h1>
      <div
        className="prose dark:prose-invert animate-in"
        style={{ "--index": 2 } as CSSProperties}
        dangerouslySetInnerHTML={{ __html: recipe.source }}
      ></div>
    </div>
  );
}

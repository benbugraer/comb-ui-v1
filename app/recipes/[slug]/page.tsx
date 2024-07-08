import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecipes } from "@/data/recipes";
import { CSSProperties } from "react";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";

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
    <div className="mx-auto relative max-w-2xl py-[3.25rem] sm:py-[3.1rem] sm:w-1/2 lg:w-3/5 flex-col">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            headline: recipe.metadata.title,
            description: recipe.metadata.description,
          }),
        }}
      />
      <h1
        className="font-bold tracking-tighter text-4xl inline-block animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        {recipe.metadata.title}
      </h1>
      <p
        className="text-lg text-tertiary my-6 animate-in"
        style={{ "--index": 1 } as CSSProperties}
      >
        {recipe.metadata.description}
      </p>
      <div
        className="prose dark:prose-invert animate-in"
        style={{ "--index": 2 } as CSSProperties}
        dangerouslySetInnerHTML={{ __html: recipe.source }}
      ></div>
      <Link
        href="/recipes"
        className="group mt-12 relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-[10rem] animate-in"
        style={{ "--index": 3 } as CSSProperties}
      >
        <div className="absolute left-3.5">
          <HiArrowLeft className="w-6 h-6 text-neutral-200" />
        </div>
        <div className="inline-flex pl-2.5 whitespace-nowrap opacity-0 transition-all duration-500 group-hover:translate-x-3 group-hover:opacity-100">
          Back to Recipes
        </div>
      </Link>
    </div>
  );
}

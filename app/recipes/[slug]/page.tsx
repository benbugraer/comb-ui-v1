import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecipes } from "@/data/recipes";
import { CSSProperties } from "react";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import MDXWrapper from "@/components/MDXWrapper";

export default async function Recipe({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const recipe = await getRecipes(params.slug);

  if (!recipe) {
    notFound();
  }

  // const MDXWrapper = dynamic(() => import("../../../components/MDXWrapper"), {
  //   ssr: false,
  //   loading: () => <p>Loading...</p>,
  // });

  return (
    <div className="mx-auto relative max-w-2xl py-[3.25rem] sm:py-[3.1rem] sm:w-1/2 lg:w-3/5 flex-col">
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
        className="prose animate-in"
        style={{ "--index": 3 } as CSSProperties}
      >
        <MDXWrapper {...recipe.source} />
      </div>
      {/* <Link
        href="/recipes"
        className="flex text-link items-center gap-2 mt-12 hover:text-primary duration-300 ease-in-out transition-colors animate-in"
        style={{ "--index": 4 } as CSSProperties}
      >
        <HiArrowLeft />
        <span>Back to recipes</span>
      </Link> */}

      <Link
        href="/recipes"
        className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-tertiary shadow-lg font-medium text-link transition-all duration-300 hover:w-32"
      >
        <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:translate-x-3 group-hover:opacity-100">
          Recipe
        </div>
        <div className="absolute left-3.5">
          <HiArrowLeft className="w-5 h-5 text-center flex items-center justify-center" />
        </div>
      </Link>
    </div>
  );
}

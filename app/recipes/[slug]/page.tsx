import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecipes } from "@/data/recipes";
import { CSSProperties } from "react";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import dynamic from "next/dynamic";
import DockPreview from "../components/DockPreview";

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

  const MDXWrapper = dynamic(() => import("../../../components/MDXWrapper"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

  const components = {
    DockPreview,
  };

  return (
    <div className="mx-auto relative max-w-2xl py-[3.25rem] sm:py-[3.1rem] sm:w-1/2 lg:w-3/5 flex-col">
      {/*<script*/}
      {/*    type="application/ld+json"*/}
      {/*    suppressHydrationWarning*/}
      {/*    dangerouslySetInnerHTML={{*/}
      {/*        __html: JSON.stringify({*/}
      {/*            headline: recipe.metadata.title,*/}
      {/*            description: recipe.metadata.description,*/}
      {/*        }),*/}
      {/*    }}*/}
      {/*/>*/}
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
        <MDXWrapper {...recipe.source} components={components} />
      </div>
      <Link
        href="/recipes"
        className="flex text-link items-center gap-2 mt-12 hover:text-primary duration-300 ease-in-out transition-colors animate-in"
        style={{ "--index": 4 } as CSSProperties}
      >
        <HiArrowLeft />
        <span>Back to recipes</span>
      </Link>
    </div>
  );
}

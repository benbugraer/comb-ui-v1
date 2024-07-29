import type { Metadata } from "next";
import Link from "next/link";
import { getRecipePosts } from "@/data/recipes";
import { CSSProperties } from "react";
import { ProjectCard } from "@/components/ui/project-card";

export const metadata: Metadata = {
  title: "CombUI | Recipes",
  description:
    "Welcome to the Recipes page of CombUI. Explore different variations and options available in our product.",
};

export default async function RecipesPage() {
  const recipes = await getRecipePosts();

  return (
    <section className="mx-auto relative max-w-4xl py-[3.25rem] sm:py-[2.1rem] sm:w-1/2 lg:w-3/5 flex-col space-y-12">
      <div
        className="relative bg-tertiary  flex-row text-center h-full w-full max-w-full items-center justify-center overflow-hidden rounded-lg border p-16 mb-24 md:shadow-xl dark:shadow-gray-400/25 animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        <h1
          className="z-10 uppercase whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter animate-in"
          style={{ "--index": 1 } as CSSProperties}
        >
          Recipes
        </h1>
        <p
          className="text-tertiary mt-4 animate-in"
          style={{ "--index": 2 } as CSSProperties}
        >
          Welcome to the recipes page of CombUI. Explore different variations
          and options available in our product.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[1000px] mx-auto">
        {recipes.map((recipe, id) => (
          <Link
            key={id}
            className="flex flex-col space-y-1 mb-4 animate-in"
            href={`/recipes/${recipe.slug}`}
            style={{ "--index": 3 } as CSSProperties}
          >
            <div className="w-full flex flex-col">
              <ProjectCard
                video={recipe.metadata.video}
                title={recipe.metadata.title}
                description={recipe.metadata.description}
                tags={recipe.metadata.tags}
              ></ProjectCard>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

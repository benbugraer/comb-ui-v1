import type { Metadata } from "next";
import Link from "next/link";
import { getVariantPosts } from "@/data/variant";
import Meteors from "@/components/ui/meteors";
import { CSSProperties } from "react";
import { ProjectCard } from "@/components/ui/project-card";

export const metadata: Metadata = {
  title: "CombUI | Variants",
  description:
    "Welcome to the Variants page of CombUI. Explore different variations and options available in our product.",
};

export default async function VariantsPage() {
  const variants = await getVariantPosts();

  return (
    <section className="mx-auto relative max-w-4xl py-[3.25rem] sm:py-[2.1rem] sm:w-1/2 lg:w-3/5 flex-col space-y-12">
      <div
        className="relative flex-row text-center h-full w-full max-w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-16 mb-24 md:shadow-xl animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        <Meteors number={30} />
        <h1
          className="z-10 uppercase whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black dark:text-white animate-in"
          style={{ "--index": 1 } as CSSProperties}
        >
          Variants
        </h1>
        <p
          className="text-tertiary mt-4 animate-in"
          style={{ "--index": 2 } as CSSProperties}
        >
          Welcome to the Variants page of CombUI. Explore different variations
          and options available in our product.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {variants.map((variant, id) => (
          <Link
            key={id}
            className="flex flex-col space-y-1 mb-4 animate-in"
            href={`/variants/${variant.slug}`}
            style={{ "--index": 3 } as CSSProperties}
          >
            <div className="w-full flex flex-col">
              <ProjectCard
                image={variant.metadata.image}
                title={variant.metadata.title}
                description={variant.metadata.description}
                tags={variant.metadata.tags}
              ></ProjectCard>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

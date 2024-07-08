import type { Metadata } from "next";
import Link from "next/link";
import { getUsagePosts } from "@/data/usage";
import { CSSProperties } from "react";
import { ProjectCard } from "@/components/ui/project-card";

export const metadata: Metadata = {
  title: "CombUI | Usage & Installations",
  description:
    "Welcome to the Variants page of CombUI. Explore different variations and options available in our product.",
};

export default async function UsagesPage() {
  const usages = await getUsagePosts();

  return (
    <section className="mx-auto relative max-w-4xl py-[3.25rem] sm:py-[2.1rem] sm:w-1/2 lg:w-3/5 flex-col space-y-12">
      <div
        className="relative flex-row text-center h-full w-full max-w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-16 mb-24 md:shadow-xl animate-in"
        style={{ "--index": 0 } as CSSProperties}
      >
        <h1
          className="z-10 uppercase whitespace-pre-wrap text-center text-3xl font-medium  text-black dark:text-white animate-in"
          style={{ "--index": 1 } as CSSProperties}
        >
          Usage & Installations
        </h1>
        <p
          className="text-tertiary mt-4 animate-in"
          style={{ "--index": 2 } as CSSProperties}
        >
          Here are the installations you need to make to beautify your projects
          with CombUI and examples of how to use it. For more information about
          the setups, you can visit the official websites of the UI libraries.{" "}
        </p>
      </div>
      <ul className="animated-list grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {usages.map((usages, id) => (
          <Link
            key={id}
            className="flex flex-col space-y-1 mb-4 animate-in"
            href={`/usage/${usages.slug}`}
            style={{ "--index": 3 } as CSSProperties}
          >
            <li className="w-full flex flex-col">
              <ProjectCard
                image={usages.metadata.image}
                title={usages.metadata.title}
                description={usages.metadata.description}
                tags={usages.metadata.tags}
              ></ProjectCard>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

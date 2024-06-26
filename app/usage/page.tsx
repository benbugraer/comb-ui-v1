import Meteors from "@/components/ui/meteors";
import { Metadata } from "next";
import { CSSProperties } from "react";

export const metadata: Metadata = {
  title: "CombUI | Usage",
  description: "Learn how to use CombUI in your projects.",
};

export default function UsagePage() {
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
          Usage
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
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {/* Add your content here */}
      </div>
    </section>
  );
}

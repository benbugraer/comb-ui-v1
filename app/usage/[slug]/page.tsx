import { notFound } from "next/navigation";
import { getUsages } from "@/data/usage";
import { CSSProperties } from "react";
import { Card, Snippet } from "@nextui-org/react";
import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiNpm, SiPnpm, SiYarn } from "react-icons/si";
import { CardContent } from "@/components/ui/card";
import Button from "@/components/Button";
import { HiArrowLeft } from "react-icons/hi";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const slug = params.slug;
  // Add a return statement here
  return Promise.resolve({}); // Replace {} with the actual metadata object
}

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
  const tabData = [
    {
      value: "npm",
      label: "npm",
      icon: <SiNpm className="w-5 h-5" />,
      snippet: usage.metadata.snippet,
    },
    {
      value: "yarn",
      label: "yarn",
      icon: <SiYarn className="w-5 h-5" />,
      snippet: usage.metadata.snippet2,
    },
    {
      value: "pnpm",
      label: "pnpm",
      icon: <SiPnpm className="w-5 h-5" />,
      snippet: usage.metadata.snippet3,
    },
  ];

  return (
    <>
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
        <div className="my-12 items-center">
          <Tabs defaultValue="npm" className="w-[500px] max-w-full">
            <TabsList
              className="grid w-full grid-cols-3 sm:grid sm:grid-cols-3 gap-2 sm:gap-0 transition ease-linear duration-500 animate-in"
              style={{ "--index": 4 } as CSSProperties}
            >
              {tabData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="text-center flex gap-4"
                >
                  {tab.icon}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <Card className="animate-in">
                  <CardContent
                    className="p-4 animate-in"
                    style={{ "--index": 2 } as CSSProperties}
                  >
                    <Snippet className="w-full">{tab.snippet}</Snippet>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div
          className="prose dark:prose-invert animate-in"
          style={{ "--index": 5 } as CSSProperties}
          dangerouslySetInnerHTML={{ __html: usage.source }}
        ></div>
        <div
          className="mt-12 animate-in"
          style={{ "--index": 6 } as CSSProperties}
        >
          <Button href="/usage">
            <HiArrowLeft className="w-5 h-6" />
            Back to Usages
          </Button>
        </div>
      </div>
    </>
  );
}

"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { Card, CardBody, Snippet } from "@nextui-org/react";
import { SiNpm, SiYarn, SiPnpm } from "react-icons/si";
import { CSSProperties } from "react";

const packages = [
  {
    name: <SiNpm className="w-5 h-5" />,
    snippet: "npm install @nextui-org/react",
  },
  {
    name: <SiYarn className="w-5 h-5" />,
    snippet: "yarn add @nextui-org/react",
  },
  {
    name: <SiPnpm className="w-5 h-5" />,
    snippet: "pnpm install @nextui-org/react",
  },
];

export default function PackagesTabs() {
  return (
    <div className="my-8 flex w-full flex-col">
      <Tabs
        aria-label="Packages Tab"
        className="animate-in"
        style={{ "--index": 4 } as CSSProperties}
      >
        {packages.map((item, index) => (
          <Tab
            key={index}
            title={item.name}
            className="max-w-md w-full p-5 animate-in"
          >
            <Card>
              <CardBody
                className="animate-in"
                style={{ "--index": 1 } as CSSProperties}
              >
                <Snippet
                  tooltipProps={{
                    content: "Copy this snippet",
                  }}
                  className="bg-tertiary text-primary max-w-md w-full"
                >
                  {item.snippet}
                </Snippet>
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

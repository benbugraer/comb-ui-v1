"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import Image from "next/image";
import Markdown from "react-markdown";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  image?: string;
  className?: string;
}

export function ProjectCard({ title, description, tags, image }: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      {image && (
        <div className="h-40 w-full overflow-hidden object-cover object-top">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        </div>
      )}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <Markdown className="prose max-w-full text-tertiary font-sans text-xs">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] bg-tertiary text-primary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2"></CardFooter>
    </Card>
  );
}

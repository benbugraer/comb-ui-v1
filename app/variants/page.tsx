import Link from "next/link";
import { getVariantPosts } from "@/data/variant";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default async function BlogPage() {
  const variants = await getVariantPosts();

  return (
    <section className="mx-auto relative max-w-4xl py-[3.25rem] sm:py-[6.1rem] sm:w-1/2 lg:w-3/5 flex-col">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      {variants
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((variant, id) => (
          <Link
            key={id}
            className="flex flex-col space-y-1 mb-4"
            href={`/variants/${variant.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="tracking-tight">{variant.metadata.title}</p>
              <p className="h-6 text-xs ">{variant.metadata.publishedAt}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}

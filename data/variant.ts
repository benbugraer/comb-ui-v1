import fs from "fs";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import matter from "gray-matter"; // Import the 'matter' module
import { transformerCopyButton } from "@rehype-pretty/transformers";

type Metadata = {
  title: string;
  description: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
      theme: "one-light",
      filterMetaString: (string) => string.replace(/filename="[^"]*"/, ""),
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getVariants(slug: string) {
  const filePath = path.join("content", "variants", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllVariants(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getVariants(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getVariantPosts() {
  return getAllVariants(path.join(process.cwd(), "content", "variants"));
}

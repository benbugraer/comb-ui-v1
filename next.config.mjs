// import nextMDX from "@next/mdx";
// import rehypePrettyCode from "rehype-pretty-code";

// /** @type {import('rehype-pretty-code').Options} */
// const options = {
//   theme: {}
// };

// const withMDX = nextMDX({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [[rehypePrettyCode, options]],
//   },
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
//   images: {
//     domains: [
//       "api.microlink.io", // Microlink Image Preview
//     ],
//   },
// };

// export default withMDX(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

export default nextConfig;

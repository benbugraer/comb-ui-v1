import type { MDXComponents } from "mdx/types";
import DockPreview from "./recipes/components/DockPreview";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    DockPreview,
  };
}

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ul: (props) => <ul className="list-disc pl-8 my-4 space-y-2" {...props} />,
    ol: (props) => (
      <ol className="list-decimal pl-8 my-4 space-y-2" {...props} />
    ),
    li: (props) => <li className="ml-4" {...props} />,
    ...components,
  };
}

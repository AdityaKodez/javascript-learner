"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Callout } from "@/components/learning/callout";
import { CodeBlock } from "@/components/playground/code-block";

// ---------------------------------------------------------------------------
// Markdown renderer for any free-form lesson prose.
//
// Supports GFM (tables, checklists). Recognizes fenced ```mermaid blocks
// (lazy-loaded) and plain ```code``` blocks. Also supports a lightweight
// callout syntax via blockquotes starting with ":::tip / :::info / :::warning".
// ---------------------------------------------------------------------------

export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-custom">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-[15px] leading-relaxed text-foreground">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="flex flex-col gap-1.5 text-[15px] leading-relaxed">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="flex list-decimal flex-col gap-1.5 pl-5 text-[15px] leading-relaxed marker:text-muted-foreground">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="pl-1 marker:text-muted-foreground [&>ul]:mt-1.5">
              {children}
            </li>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          code: (props) => {
            const { className, children } = props as {
              className?: string;
              children?: React.ReactNode;
            };
            const isInline = !className;
            if (isInline) {
              return (
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
                  {children}
                </code>
              );
            }
            return <CodeBlock code={String(children).replace(/\n$/, "")} />;
          },
          table: ({ children }) => (
            <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b bg-muted/50 px-4 py-2.5 text-left font-medium">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b px-4 py-2.5 align-top last:border-0">
              {children}
            </td>
          ),
          input: (props) => (
            <input
              {...props}
              disabled
              className="mr-2 size-4 accent-primary align-middle"
            />
          ),
          blockquote: ({ children }) => (
            <Callout variant="info" text={flattenText(children)} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

function flattenText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(flattenText).join("");
  return "";
}

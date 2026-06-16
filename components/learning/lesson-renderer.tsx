import type { ContentBlock } from "@/types";

import { AnalogyBlock } from "@/components/learning/analogy-block";
import { Callout } from "@/components/learning/callout";
import { CodeBlock } from "@/components/playground/code-block";
import { CommonMistakeAlert } from "@/components/learning/common-mistake-alert";
import { ConceptCard } from "@/components/learning/concept-card";
import { ContentTable } from "@/components/learning/content-table";
import { MermaidDiagram } from "@/components/learning/mermaid-diagram";
import { Playground } from "@/components/playground/playground";
import { RecapCard } from "@/components/learning/recap-card";
import { ResourceList } from "@/components/learning/resource-list";
import { StepsCard } from "@/components/learning/steps-card";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// LessonRenderer — turns the declarative content block list into a vertical
// stack of components. This is the single source of truth for "how each kind
// of block renders". Add a new block kind here + in types/index.ts.
// ---------------------------------------------------------------------------

export function LessonRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case "heading":
      return block.level === 2 ? (
        <h2 className="scroll-mt-24 border-t pt-8 font-heading text-2xl font-semibold tracking-tight first:border-t-0 first:pt-0">
          {block.text}
        </h2>
      ) : (
        <h3 className="scroll-mt-24 font-heading text-lg font-semibold tracking-tight">
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p className="text-[15px] leading-relaxed text-foreground">
          <InlineMarkdown text={block.text} />
        </p>
      );

    case "callout":
      return <Callout variant={block.variant} title={block.title} text={block.text} />;

    case "code":
      return (
        <CodeBlock
          code={block.code}
          title={block.title}
          summary={block.summary}
          lines={block.lines}
          output={block.output}
          language={block.language}
        />
      );

    case "concept":
      return (
        <ConceptCard title={block.title} points={block.points} />
      );

    case "analogy":
      return (
        <AnalogyBlock
          title={block.title}
          analogy={block.analogy}
          takeaway={block.takeaway}
        />
      );

    case "mistake":
      return <CommonMistakeAlert mistakes={block.mistakes} />;

    case "playground":
      return (
        <Playground
          initialCode={block.initialCode}
          hint={block.hint}
          title={block.title ?? "Try it"}
        />
      );

    case "diagram":
      return <MermaidDiagram chart={block.mermaid} caption={block.caption} />;

    case "steps":
      return <StepsCard title={block.title} steps={block.steps} />;

    case "table":
      return <ContentTable headers={block.headers} rows={block.rows} />;

    case "resources":
      return <ResourceList title={block.title} items={block.items} />;

    case "recap":
      return <RecapCard points={block.points} />;

    default:
      return null;
  }
}

// Minimal inline markdown (bold **text** and code `text`) without pulling a
// full markdown parser into every paragraph.
function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

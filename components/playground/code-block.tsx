"use client";

import { ListTree, Play, Terminal } from "lucide-react";
import { useState } from "react";

import { runCode } from "@/lib/run-code";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// ---------------------------------------------------------------------------
// CodeBlock — a static code example with:
//   - optional summary
//   - line-by-line breakdown (toggle)
//   - "Output" preview (computed live so it's always correct)
//
// Distinct from Playground (which is freely editable). CodeBlock is for
// teaching examples; the learner reads + optionally reveals the breakdown.
// ---------------------------------------------------------------------------

export function CodeBlock({
  code,
  title,
  summary,
  lines,
  output,
  language = "javascript",
}: {
  code: string;
  title?: string;
  summary?: string;
  lines?: string[];
  output?: string;
  language?: string;
}) {
  const [showLines, setShowLines] = useState(false);
  const codeLines = code.split("\n");
  const computedOutput = output ?? runCode(code).output.join("\n");

  return (
    <figure className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
      {(title || summary) && (
        <figcaption className="border-b bg-muted/40 px-2 py-2.5">
          {title ? (
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Terminal className="size-3.5" />
              {title}
            </div>
          ) : null}
          {summary ? (
            <p className="mt-1 text-sm text-foreground">{summary}</p>
          ) : null}
        </figcaption>
      )}

    
        <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
          <SyntaxHighlighter language={language} style={a11yDark}>
            {code}
          </SyntaxHighlighter>
        </pre>
    

      {lines && lines.length > 0 ? (
        <div className="border-t border-white/10 bg-white/3">
          <button
            type="button"
            onClick={() => setShowLines((v) => !v)}
            aria-expanded={showLines}
            className="flex w-full items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/5"
          >
            <ListTree className="size-3.5" />
            {showLines ? "Hide" : "Show"} line-by-line breakdown
          </button>
          {showLines ? (
            <ol className="flex flex-col gap-1 px-4 pb-4">
              {codeLines.map((src, i) => (
                <li key={i} className="grid grid-cols-[1.5rem_1fr] gap-2 text-xs">
                  <span className="text-right font-mono text-zinc-500">
                    {i + 1}
                  </span>
                  <span className="text-zinc-300">
                    <code className="font-mono text-zinc-400">{src.trim() || " "}</code>
                    <span className="mt-0.5 block text-zinc-200">
                      {lines[i] ?? ""}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          ) : null}
        </div>
      ) : null}

      {computedOutput ? (
        <div className="border-t bg-background">
          <div className="flex items-center gap-2 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-400">
            <Play className="size-3" />
            Output
          </div>
          <pre className="whitespace-pre-wrap wrap-break-word px-4 pb-4 font-mono text-[13px] text-emerald-300">
            {computedOutput}
          </pre>
        </div>
      ) : null}
    </figure>
  );
}

// Extremely lightweight syntax tinting — not a full highlighter, just enough
// to visually separate strings/keywords/numbers so code scans more easily.
function highlight(code: string) {
  const tokens = code.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g);
  return tokens.map((tok, i) => {
    if (tok.startsWith('"') || tok.startsWith("'")) {
      return (
        <span key={i} className="text-amber-300">
          {tok}
        </span>
      );
    }
    // keywords + numbers within the non-string chunk
    const parts = tok.split(/\b(let|const|var|function|return|if|else|for|while|console|log|true|false|null|undefined)\b|(\b\d+(?:\.\d+)?\b)/g);
    return (
      <span key={i}>
        {parts.map((p, j) => {
          if (!p) return null;
          if (/^(let|const|var|function|return|if|else|for|while|true|false|null|undefined)$/.test(p)) {
            return (
              <span key={j} className="text-fuchsia-400">
                {p}
              </span>
            );
          }
          if (/^(console|log)$/.test(p)) {
            return (
              <span key={j} className="text-sky-400">
                {p}
              </span>
            );
          }
          if (/^\d+(?:\.\d+)?$/.test(p)) {
            return (
              <span key={j} className="text-emerald-300">
                {p}
              </span>
            );
          }
          return <span key={j}>{p}</span>;
        })}
      </span>
    );
  });
}

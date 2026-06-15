"use client";

import { Play, RotateCcw, Terminal } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { runCode } from "@/lib/run-code";

export function Playground({
  initialCode,
  hint,
  title = "Try it",
  className,
}: {
  initialCode: string;
  hint?: string;
  title?: string;
  className?: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasRun, setHasRun] = useState(false);
  const [tab, setTab] = useState<"code" | "output">("code");

  function handleRun() {
    const { output: out, error: err } = runCode(code);
    setOutput(out);
    setError(err);
    setHasRun(true);
    setTab("output");
  }

  function handleReset() {
    setCode(initialCode);
    setOutput([]);
    setError(null);
    setHasRun(false);
    setTab("code");
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border bg-zinc-950 text-zinc-100 ring-1 ring-foreground/10",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-white/5 px-3 py-2">
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
          <Terminal className="size-3.5" />
          {title}
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            size="xs"
            variant="ghost"
            onClick={handleReset}
            className="text-zinc-300 hover:bg-white/10 hover:text-white"
          >
            <RotateCcw className="size-3" />
            Reset
          </Button>
          <Button size="xs" onClick={handleRun} className="bg-emerald-600 text-white hover:bg-emerald-500">
            <Play className="size-3" />
            Run
          </Button>
        </div>
      </div>

      <Tabs value={tab} onValueChange={(v) => setTab(v as "code" | "output")} className="gap-0">
        <div className="flex items-center justify-between border-b border-white/10 px-3">
          <TabsList className="bg-transparent p-0">
            <TabsTrigger
              value="code"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent data-[state=active]:text-white"
            >
              Code
            </TabsTrigger>
            <TabsTrigger
              value="output"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent data-[state=active]:text-white"
            >
              Output
            </TabsTrigger>
          </TabsList>
          {hint ? (
            <span className="py-1 text-[11px] text-zinc-500">{hint}</span>
          ) : null}
        </div>

        <TabsContent value="code" className="mt-0 p-0">
          <label htmlFor={`playground-${title}`} className="sr-only">
            Editable JavaScript code
          </label>
          <textarea
            id={`playground-${title}`}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            aria-label="JavaScript code editor"
            className="block min-h-32 w-full resize-y bg-transparent p-4 font-mono text-sm leading-relaxed text-zinc-100 outline-none placeholder:text-zinc-500"
          />
        </TabsContent>

        <TabsContent value="output" className="mt-0 p-0">
          <OutputPanel output={output} error={error} hasRun={hasRun} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export function OutputPanel({
  output,
  error,
  hasRun,
}: {
  output: string[];
  error: string | null;
  hasRun: boolean;
}) {
  if (!hasRun) {
    return (
      <div className="p-4 font-mono text-sm text-zinc-500">
        {"// Press Run to see the output…"}
      </div>
    );
  }
  return (
    <div className="p-4 font-mono text-sm">
      {error ? (
        <pre className="whitespace-pre-wrap wrap-break-word text-red-400">
          {error}
        </pre>
      ) : output.length === 0 ? (
        <p className="text-zinc-500">(no output)</p>
      ) : (
        <div className="flex flex-col gap-0.5">
          {output.map((line, i) => (
            <span key={i} className="whitespace-pre-wrap wrap-break-words text-emerald-300">
              {line || " "}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
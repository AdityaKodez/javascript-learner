"use client";

import { useTheme } from "next-themes";
import { useEffect, useId, useRef, useState } from "react";

export function MermaidDiagram({
  chart,
  caption,
}: {
  chart: string;
  caption?: string;
}) {
  const baseId = useId().replace(/[:]/g, "");
  const renderSeq = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState<string>("");

useEffect(() => {
  const mermaidTheme = resolvedTheme === "dark" ? "dark" : "default";
  let cancelled = false;
  const renderId = `mmd-${baseId}-${renderSeq.current++}`;

  (async () => {
    try {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: mermaidTheme,
        securityLevel: "strict",
        fontFamily: "inherit",
      });
      const { svg } = await mermaid.render(renderId, chart);
      if (cancelled) return;
      if (containerRef.current) {
        containerRef.current.innerHTML = svg;
        setStatus("idle");
      }
    } catch (err) {
      if (cancelled) return;
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : String(err));
    }
  })();

  return () => { cancelled = true; };
}, [chart, baseId, resolvedTheme]);

  return (
    <figure className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
      <div className="relative flex min-h-32 items-center justify-center bg-muted/30 p-4 [&_svg]:max-w-full [&_svg]:h-auto">
        <div
          ref={containerRef}
          role="img"
          aria-label={caption ?? "Diagram"}
          className={status === "error" ? "hidden" : undefined}
        />
        {status === "loading" ? (
          <div className="absolute inset-4 animate-pulse rounded bg-muted" />
        ) : null}
        {status === "error" ? (
          <div className="p-4 text-center text-sm text-destructive">
            <p className="font-medium">Diagram couldn&apos;t render.</p>
            <pre className="mt-2 max-h-32 overflow-auto text-left text-xs text-muted-foreground">
              {errorMsg}
            </pre>
          </div>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="border-t px-4 py-2 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
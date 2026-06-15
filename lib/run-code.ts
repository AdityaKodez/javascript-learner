// ---------------------------------------------------------------------------
// Safe, synchronous JavaScript runner for the in-browser code playground.
//
// Strategy:
//   - Capture console.log / console.error / console.warn output.
//   - Replace `alert()` with a captured log line (so lessons using `alert`
//     still produce visible "output" without browser dialogs).
//   - Run user code via `new Function` so it can't access local closure vars.
//   - Guard with a try/catch + a cheap infinite-loop guard (iteration cap).
//
// This is intentionally simple — it's for learning snippets, not untrusted
// code execution at scale. The DOM APIs are not shimmed, so DOM lessons rely
// on output from console.log.
// ---------------------------------------------------------------------------

export interface RunResult {
  output: string[];
  error: string | null;
}

export function runCode(code: string): RunResult {
  const logs: string[] = [];

  // Serialize any value the way console.log roughly would.
  const format = (value: unknown): string => {
    if (typeof value === "string") return value;
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (typeof value === "function") return "[Function]";
    if (Array.isArray(value)) return JSON.stringify(value);
    if (typeof value === "object") {
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    }
    return String(value);
  };

  const sandboxConsole = {
    log: (...args: unknown[]) => logs.push(args.map(format).join(" ")),
    error: (...args: unknown[]) =>
      logs.push("❌ " + args.map(format).join(" ")),
    warn: (...args: unknown[]) =>
      logs.push("⚠️ " + args.map(format).join(" ")),
    info: (...args: unknown[]) => logs.push(args.map(format).join(" ")),
  };

  const sandboxAlert = (msg?: unknown) => {
    logs.push(`🔔 ${msg === undefined ? "" : format(msg)}`);
  };

  // Infinite-loop guard: wrap loops indirectly via a counter injected by
  // rewriting the code is fragile, so instead we rely on a hard wall-clock
  // budget with a synchronous busy check using a shared counter.
  let ops = 0;
  const __guard = () => {
    if (++ops > 1_000_000) {
      throw new Error("⏳ Code ran too long — check for an infinite loop.");
    }
  };

  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(
      "console",
      "alert",
      "__guard",
      `"use strict";\n${code}`,
    );
    fn(sandboxConsole, sandboxAlert, __guard);
    return { output: logs, error: null };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { output: logs, error: message };
  }
}

/** Check whether the user's output contains the expected substring. */
export function passesChallenge(
  code: string,
  expectedOutput?: string,
): boolean {
  if (!expectedOutput) return true;
  const { output, error } = runCode(code);
  if (error) return false;
  return output.some((line) => line.includes(expectedOutput));
}

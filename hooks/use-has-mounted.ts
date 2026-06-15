"use client";

import { useEffect, useState } from "react";

/**
 * Returns true after the component has mounted on the client.
 *
 * Zustand's persisted store reads from localStorage, so any UI that depends on
 * progress values must avoid rendering stale server/initial state until mount,
 * otherwise we get hydration mismatches and a flash of "empty" progress.
 */
export function useHasMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timeout = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timeout);
  }, []);
  return mounted;
}

"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useHasMounted } from "@/hooks/use-has-mounted";

// ---------------------------------------------------------------------------
// ThemeToggle — switches light/dark. The scaffold also binds `d` as a global
// hotkey (see theme-provider), so this is just a visible control.
// Renders a stable placeholder until mounted to avoid hydration mismatch.
// ---------------------------------------------------------------------------

export function ThemeToggle() {
  const mounted = useHasMounted();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <MoonStar className="size-4" />
      )}
    </Button>
  );
}

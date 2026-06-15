import { Info, Lightbulb, AlertTriangle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// ---------------------------------------------------------------------------
// Callout — inline highlighted note: info / tip / warning.
// Wraps shadcn Alert with friendlier default styling + the right icon.
// ---------------------------------------------------------------------------

const CONFIG = {
  info: {
    icon: Info,
    className:
      "border-sky-400/40 bg-sky-50/60 text-sky-900 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-100",
    iconClass: "text-sky-600 dark:text-sky-400",
  },
  tip: {
    icon: Lightbulb,
    className:
      "border-emerald-400/40 bg-emerald-50/60 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100",
    iconClass: "text-emerald-600 dark:text-emerald-400",
  },
  warning: {
    icon: AlertTriangle,
    className:
      "border-amber-400/50 bg-amber-50/70 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100",
    iconClass: "text-amber-600 dark:text-amber-400",
  },
} as const;

export function Callout({
  variant = "info",
  title,
  text,
}: {
  variant?: keyof typeof CONFIG;
  title?: string;
  text: string;
}) {
  const cfg = CONFIG[variant];
  const Icon = cfg.icon;
  return (
    <Alert className={cfg.className}>
      <Icon className={cfg.iconClass} />
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      <AlertDescription className="text-inherit">{text}</AlertDescription>
    </Alert>
  );
}

import {
  AlertTriangle,
  Bell,
  Boxes,
  Brain,
  Calculator,
  CheckCircle2,
  Clock,
  Flame,
  FunctionSquare,
  GitBranch,
  GraduationCap,
  Info,
  Lightbulb,
  ListOrdered,
  Lock,
  type LucideIcon,
  MousePointerClick,
  Rocket,
  Shapes,
  Sparkles,
  Target,
  Trophy,
  Variable,
  Repeat,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Maps the string icon names used in content data → lucide-react components.
// Centralizing this avoids dynamic imports and keeps content files as plain
// data. Add new icons here as content grows.
// ---------------------------------------------------------------------------

const ICONS = {
  AlertTriangle,
  Bell,
  Boxes,
  Brain,
  Calculator,
  CheckCircle2,
  Clock,
  Flame,
  FunctionSquare,
  GitBranch,
  GraduationCap,
  Info,
  Lightbulb,
  ListOrdered,
  Lock,
  MousePointerClick,
  Rocket,
  Shapes,
  Sparkles,
  Target,
  Trophy,
  Variable,
  Repeat,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

export function getIcon(name?: string): LucideIcon {
  if (name && name in ICONS) return ICONS[name as IconName];
  return Sparkles;
}

export { ICONS };

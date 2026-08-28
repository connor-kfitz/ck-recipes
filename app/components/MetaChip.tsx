import type { LucideIcon } from "lucide-react";

interface MetaChipProps {
  icon: LucideIcon;
  label: string;
  size?: "sm" | "md";
}

export function MetaChip({ icon: Icon, label, size = "md" }: MetaChipProps) {
  const scale =
    size === "sm"
      ? "gap-1.5 px-2 py-1 text-[11px]"
      : "gap-2 px-3 py-1.5 text-[13px]";

  return (
    <span
      className={`inline-flex items-center rounded-full border border-rule bg-wash font-body font-medium tabular-nums text-ink ${scale}`}
    >
      <Icon
        className={size === "sm" ? "size-3 text-gold-deep" : "size-3.5 text-gold-deep"}
        strokeWidth={2.25}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

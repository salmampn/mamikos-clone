import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { cn } from "@/lib/utils";

type ViewAllCardProps = {
  href: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
};

export function ViewAllCard({
  href,
  label = "Lihat semua",
  ariaLabel,
  className,
}: ViewAllCardProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? label}
      className={cn(
        "group flex items-center justify-center rounded-md border border-border bg-card p-4 text-center outline-none",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-primary hover:shadow-card",
        "focus-visible:ring-4 focus-visible:ring-ring/20",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 text-base font-bold text-foreground transition-colors group-hover:text-primary">
        {label}

        <FiArrowRight
          size={18}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
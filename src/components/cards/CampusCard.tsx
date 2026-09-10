import Image from "next/image";
import Link from "next/link";

import type { CampusItem } from "@/types/campus";
import { cn } from "@/lib/utils";

type CampusCardProps = {
  campus: CampusItem;
  className?: string;
};

export function CampusCard({
  campus,
  className,
}: CampusCardProps) {
  return (
    <Link
      href={campus.href}
      aria-label={`Lihat kos di sekitar ${campus.name}, ${campus.city}`}
      className={cn(
        "group flex min-h-20 items-center gap-3 rounded-md border border-border bg-card p-3 outline-none",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:border-primary hover:shadow-card",
        "focus-visible:ring-4 focus-visible:ring-ring/20",
        "sm:min-h-24 sm:gap-4 sm:p-4",
        "lg:min-h-28 lg:gap-5 lg:rounded-lg lg:px-6 lg:py-5",
        className,
      )}
    >
      <div className="relative size-9 shrink-0 overflow-hidden sm:size-11 lg:size-14">
        <Image
          src={campus.logo}
          alt={`Logo ${campus.name}`}
          fill
          sizes="(max-width: 639px) 36px, (max-width: 1023px) 44px, 56px"
          className="object-contain"
        />
      </div>

      <div className="min-w-0">
        <h3 className="text-xs font-bold leading-4 text-foreground transition-colors group-hover:text-primary sm:text-sm sm:leading-5 lg:text-base">
          {campus.name}
        </h3>

        <p className="mt-0.5 text-xs leading-4 text-muted-foreground sm:mt-1 sm:text-sm sm:leading-5 lg:text-sm">
          {campus.city}
        </p>
      </div>
    </Link>
  );
}
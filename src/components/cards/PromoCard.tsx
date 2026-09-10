import Image from "next/image";
import Link from "next/link";

import type { PromoItem } from "@/types/promo";
import { cn } from "@/lib/utils";

type PromoCardProps = {
  promo: PromoItem;
  className?: string;
};

export function PromoCard({
  promo,
  className,
}: PromoCardProps) {
  return (
    <Link
      href={promo.href}
      aria-label={promo.title}
      className={cn(
        "group relative block h-[180px] w-full overflow-hidden rounded-md bg-muted outline-none",
        "transition-transform duration-200 ease-out",
        "hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-ring/20",
        "sm:h-[250px]",
        className,
      )}
    >
      <Image
        src={promo.image}
        alt={promo.alt}
        fill
        sizes="(max-width: 639px) 86vw, 590px"
        className="object-cover"
      />
    </Link>
  );
}
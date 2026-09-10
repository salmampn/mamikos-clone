import Image from "next/image";
import Link from "next/link";
import {
  FiStar,
  FiZap,
} from "react-icons/fi";

import type { KosItem } from "@/types/kos";
import { formatRupiah } from "@/lib/formatters";
import { cn } from "@/lib/utils";

type KosCardProps = {
  item: KosItem;
  className?: string;
};

export function KosCard({
  item,
  className,
}: KosCardProps) {
  return (
    <article
      className={cn(
        "group min-w-0 bg-card",
        className,
      )}
    >
      <Link
        href={`/kos/${item.slug}`}
        className="block outline-none focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-ring/20"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
          <Image
            src={item.image}
            alt={`Foto ${item.name}`}
            fill
            sizes="(max-width: 639px) 78vw, (max-width: 1023px) 45vw, 25vw"
            className="object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
          />

          <span className="absolute left-0 top-0 grid size-6 place-items-center rounded-br-md bg-card text-primary shadow-sm">
            <span className="size-2 rounded-full bg-primary" />
          </span>
        </div>

        <div className="pt-2">
          <div className="flex min-h-5 flex-wrap items-center gap-x-2 gap-y-1">
            <span className="rounded-sm border border-border bg-card px-2 py-2 text-xs font-bold leading-none text-foreground">
              {item.gender}
            </span>

            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-foreground">
              <FiStar
                size={13}
                aria-hidden="true"
                className="fill-primary text-primary"
              />
              {item.rating.toFixed(1)}
            </span>

            <span className="text-[11px] italic text-destructive">
              Sisa {item.availableRooms} kamar
            </span>
          </div>

          <h3 className="mt-2 line-clamp-2 text-sm font-normal leading-5 text-foreground transition-colors group-hover:text-primary">
            {item.name}
          </h3>

          <p className="mt-0.5 text-sm font-bold leading-5 text-foreground">
            {item.district}
          </p>

          <p className="mt-1 line-clamp-1 text-[11px] leading-4 text-muted-foreground">
            {item.facilities.join(" · ")}
          </p>

          <div className="mt-2 min-h-10">
            {item.promoText && (
              <p className="inline-flex items-center gap-1 text-xs font-bold text-destructive">
                <FiZap size={13} aria-hidden="true" />
                {item.promoText}
              </p>
            )}

            {item.originalPrice && (
              <span className="ml-1 text-xs text-muted-foreground line-through">
                {formatRupiah(item.originalPrice)}
              </span>
            )}

            <p className="mt-0.5 text-sm font-bold leading-5 text-foreground">
              {formatRupiah(item.currentPrice)}
              <span className="ml-1 text-xs font-normal text-foreground">
                (Bulan pertama)
              </span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
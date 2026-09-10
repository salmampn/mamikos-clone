import Image from "next/image";
import Link from "next/link";

import type { AreaItem } from "@/types/location";
import { cn } from "@/lib/utils";

type AreaCardProps = {
  area: AreaItem;
  className?: string;
};

export function AreaCard({
  area,
  className,
}: AreaCardProps) {
  return (
    <Link
      href={area.href}
      aria-label={`Lihat kos di ${area.name.replace("Kos ", "")}`}
      className={cn(
        "group relative block aspect-video overflow-hidden rounded-md bg-muted outline-none",
        "transition-transform duration-200 ease-out hover:-translate-y-0.5",
        "focus-visible:ring-4 focus-visible:ring-ring/20",
        className,
      )}
    >
      <Image
        src={area.image}
        alt={area.name}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/35 transition-colors duration-200 group-hover:bg-black/45"
      />

      <span className="absolute inset-0 grid place-items-center px-4 text-center text-lg font-bold text-white drop-shadow-sm sm:text-xl">
        {area.name}
      </span>
    </Link>
  );
}
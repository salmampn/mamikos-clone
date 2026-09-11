import Link from "next/link";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { IconButton } from "@/components/shared/IconButton";

type ListingActionsProps = {
  viewAllHref: string;
  title: string;
  onPrevious: () => void;
  onNext: () => void;
  canScrollPrevious: boolean;
  canScrollNext: boolean;
};

export function ListingActions({
  viewAllHref,
  title,
  onPrevious,
  onNext,
  canScrollPrevious,
  canScrollNext,
}: ListingActionsProps) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <Link
        href={viewAllHref}
        className="inline-flex h-10 shrink-0 items-center rounded-md border border-border bg-card px-5 text-sm font-bold text-foreground outline-none transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary focus-visible:ring-4 focus-visible:ring-ring/20"
      >
        Lihat semua
      </Link>

      <span
        aria-hidden="true"
        className="h-7 w-px shrink-0 bg-border"
      />

      <IconButton
        label={`Group ${title} sebelumnya`}
        variant="outline"
        size="sm"
        onClick={onPrevious}
        disabled={!canScrollPrevious}
        className="size-10 shrink-0 border-border bg-card text-foreground shadow-card hover:border-primary hover:bg-primary-soft hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FiChevronLeft
          size={20}
          aria-hidden="true"
        />
      </IconButton>

      <IconButton
        label={`Group ${title} selanjutnya`}
        variant="outline"
        size="sm"
        onClick={onNext}
        disabled={!canScrollNext}
        className="size-10 shrink-0 border-border bg-card text-foreground shadow-card hover:border-primary hover:bg-primary-soft hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FiChevronRight
          size={20}
          aria-hidden="true"
        />
      </IconButton>
    </div>
  );
}
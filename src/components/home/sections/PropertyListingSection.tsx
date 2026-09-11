"use client";

import {
  useCallback,
  useMemo,
  useState,
} from "react";
import Link from "next/link";

import { ListingEmptyState } from "@/components/home/components/property/ListingEmptyState";
import { PropertyListingHeader } from "@/components/home/components/property/PropertyListingHeader";
import { usePropertyListingCarousel } from "@/components/home/components/property/usePropertyListingCarousel";

import { KosCard } from "@/components/home/cards/KosCard";
import { Container } from "@/components/shared/Container";
import { chunkArray } from "@/lib/array";
import type { KosItem } from "@/types/kos";
import { cn } from "@/lib/utils";

type PropertyListingSectionProps = {
  title: string;
  mobileTitle?: string;
  items: KosItem[];
  cities: readonly string[];
  defaultCity?: string;
  viewAllHref: string;
  showCountdown?: boolean;
  learnMoreHref?: string;
  className?: string;
};

const GROUP_SIZE = 4;

export function PropertyListingSection({
  title,
  mobileTitle,
  items,
  cities,
  defaultCity = "Semua Kota",
  viewAllHref,
  showCountdown = false,
  learnMoreHref,
  className,
}: PropertyListingSectionProps) {
  const [selectedCity, setSelectedCity] = useState(defaultCity);

  const filteredItems = useMemo(() => {
    if (selectedCity === "Semua Kota") {
      return items;
    }

    return items.filter((item) => item.city === selectedCity);
  }, [items, selectedCity]);

  const listingGroups = useMemo(() => {
    return chunkArray(filteredItems, GROUP_SIZE);
  }, [filteredItems]);

  const {
    emblaRef,
    canScrollPrevious,
    canScrollNext,
    scrollPrevious,
    scrollNext,
    resetCarousel,
  } = usePropertyListingCarousel({
    groupCount: listingGroups.length,
  });

  const handleCityChange = useCallback(
    (city: string) => {
      setSelectedCity(city);

      window.setTimeout(() => {
        resetCarousel();
      }, 0);
    },
    [resetCarousel],
  );

  return (
    <section
      aria-label={`${title} ${selectedCity}`}
      className={cn(
        "bg-background py-5 sm:py-8 lg:py-10",
        className,
      )}
    >
      <Container>
        <PropertyListingHeader
          title={title}
          mobileTitle={mobileTitle}
          selectedCity={selectedCity}
          cities={cities}
          onCityChange={handleCityChange}
          viewAllHref={viewAllHref}
          showCountdown={showCountdown}
          learnMoreHref={learnMoreHref}
          onPrevious={scrollPrevious}
          onNext={scrollNext}
          canScrollPrevious={canScrollPrevious}
          canScrollNext={canScrollNext}
        />

        {listingGroups.length > 0 ? (
          <div
            ref={emblaRef}
            className="overflow-hidden"
          >
            <div className="flex">
              {listingGroups.map((group, groupIndex) => (
                <div
                  key={`${selectedCity}-${groupIndex}`}
                  className="min-w-0 shrink-0 basis-full"
                >
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-3 lg:gap-5">
                    {group.map((item) => (
                      <KosCard
                        key={item.id}
                        item={item}
                        className="min-w-0"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <ListingEmptyState city={selectedCity} />
        )}

        <div className="mt-4 sm:hidden">
          <Link
            href={viewAllHref}
            className="flex h-12 w-full items-center justify-center rounded-lg border border-border bg-card px-4 text-base font-bold text-foreground outline-none transition-colors hover:border-primary hover:text-primary focus-visible:ring-4 focus-visible:ring-ring/20"
          >
            Lihat Semua
          </Link>
        </div>
      </Container>
    </section>
  );
}
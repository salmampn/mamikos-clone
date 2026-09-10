"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiClock,
} from "react-icons/fi";

import { KosCard } from "@/components/cards/KosCard";
import { PropertyCityDropdown } from "@/components/home/components/PropertyCityDropdown";
import { Container } from "@/components/shared/Container";
import { IconButton } from "@/components/shared/IconButton";
import { chunkArray } from "@/lib/array";
import type { KosItem } from "@/types/kos";
import { cn } from "@/lib/utils";

type PropertyListingSectionProps = {
  title: string;
  items: KosItem[];
  cities: readonly string[];
  defaultCity?: string;
  viewAllHref: string;
  showCountdown?: boolean;
  className?: string;
};

const GROUP_SIZE = 4;

export function PropertyListingSection({
  title,
  items,
  cities,
  defaultCity = "Semua Kota",
  viewAllHref,
  showCountdown = false,
  className,
}: PropertyListingSectionProps) {
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [selectedGroup, setSelectedGroup] = useState(0);

  const filteredItems = useMemo(() => {
    if (selectedCity === "Semua Kota") {
      return items;
    }

    return items.filter((item) => item.city === selectedCity);
  }, [items, selectedCity]);

  const listingGroups = useMemo(() => {
    return chunkArray(filteredItems, GROUP_SIZE);
  }, [filteredItems]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    duration: 22,
  });

  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedGroup(emblaApi.selectedScrollSnap());
    setCanScrollPrevious(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedGroup(0);

    window.setTimeout(() => {
      emblaApi?.reInit();
      emblaApi?.scrollTo(0, true);
    }, 0);
  };

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    updateCarouselState();

    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", updateCarouselState);

    return () => {
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", updateCarouselState);
    };
  }, [emblaApi, updateCarouselState]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
  }, [emblaApi, listingGroups.length]);

  return (
    <section
      aria-label={`${title} ${selectedCity}`}
      className={cn("bg-background py-8 sm:py-10", className)}
    >
      <Container>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            <h2 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
              {title}
            </h2>

            <PropertyCityDropdown
              value={selectedCity}
              cities={cities}
              onValueChange={handleCityChange}
            />
          </div>

          {showCountdown && (
            <CountdownBadge
              endAt={new Date("2026-09-24T23:59:59+07:00")}
            />
          )}

          <div className="flex items-center gap-3">
            <Link
              href={viewAllHref}
              className="hidden h-10 items-center rounded-md border border-border bg-card px-5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 sm:inline-flex"
            >
              Lihat semua
            </Link>

            <span
              aria-hidden="true"
              className="hidden h-7 w-px bg-border sm:block"
            />

            <IconButton
              label={`Group ${title} sebelumnya`}
              variant="outline"
              size="sm"
              onClick={scrollPrevious}
              disabled={!canScrollPrevious}
              className="size-10 border-border bg-card text-foreground shadow-card hover:border-primary hover:bg-primary-soft hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FiChevronLeft size={22} aria-hidden="true" />
            </IconButton>

            <IconButton
              label={`Group ${title} selanjutnya`}
              variant="outline"
              size="sm"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="size-10 border-border bg-card text-foreground shadow-card hover:border-primary hover:bg-primary-soft hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FiChevronRight size={22} aria-hidden="true" />
            </IconButton>
          </div>
        </div>

        {listingGroups.length > 0 ? (
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {listingGroups.map((group, groupIndex) => (
                <div
                  key={`${selectedCity}-${groupIndex}`}
                  className="min-w-0 flex-[0_0_100%]"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {group.map((item) => (
                      <KosCard key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <EmptyListingState city={selectedCity} />
        )}

        <div className="mt-5 flex items-center justify-between sm:hidden">
          <Link
            href={viewAllHref}
            className="inline-flex text-sm font-bold text-primary hover:text-primary-hover hover:underline"
          >
            Lihat semua
          </Link>

          {listingGroups.length > 1 && (
            <span className="text-xs text-muted-foreground">
              Grup {selectedGroup + 1} dari {listingGroups.length}
            </span>
          )}
        </div>
      </Container>
    </section>
  );
}

type CountdownBadgeProps = {
  endAt?: Date;
};

export function CountdownBadge({
  endAt,
}: CountdownBadgeProps) {
  const targetTime = useMemo(() => {
    if (endAt) {
      return endAt.getTime();
    }

    const defaultDeadline = new Date();

    defaultDeadline.setDate(defaultDeadline.getDate() + 14);
    defaultDeadline.setHours(23, 59, 59, 999);

    return defaultDeadline.getTime();
  }, [endAt]);

  const calculateRemainingTime = useCallback(() => {
    const difference = Math.max(0, targetTime - Date.now());

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86_400);
    const hours = Math.floor((totalSeconds % 86_400) / 3_600);
    const minutes = Math.floor((totalSeconds % 3_600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      isFinished: difference === 0,
    };
  }, [targetTime]);

  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime,
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [calculateRemainingTime]);

  const formatTime = (value: number) => {
    return String(value).padStart(2, "0");
  };

  return (
    <span
      aria-live="polite"
      className="inline-flex items-center gap-2 rounded-sm x-3 py-2 text-xs font-bold text-muted-foreground"
    >

      <span className="hidden md:inline text-sm">
        {remainingTime.isFinished
          ? "Promo telah berakhir"
          : "Akan berakhir dalam waktu:"}
      </span>

      {!remainingTime.isFinished && (
        <div className="bg-secondary p-2 text-sm">
          <span className="rounded-sm bg-card px-2 py-1 text-foreground">
            {remainingTime.days} Hari
          </span>

          <span className="hidden items-center gap-1 sm:inline-flex">
            <CountdownUnit value={formatTime(remainingTime.hours)} />
            <span>:</span>
            <CountdownUnit value={formatTime(remainingTime.minutes)} />
            <span>:</span>
            <CountdownUnit value={formatTime(remainingTime.seconds)} />
          </span>
        </div>
      )}
    </span>
  );
}

type CountdownUnitProps = {
  value: string;
};

function CountdownUnit({
  value,
}: CountdownUnitProps) {
  return (
    <span className="rounded-sm bg-card px-2 py-1 text-foreground">
      {value}
    </span>
  );
}

function EmptyListingState({
  city,
}: {
  city: string;
}) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-secondary px-6 py-12 text-center">
      <p className="text-sm font-bold text-foreground">
        Belum ada kos tersedia di {city}.
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        Coba pilih kota lain untuk melihat rekomendasi kos.
      </p>
    </div>
  );
}
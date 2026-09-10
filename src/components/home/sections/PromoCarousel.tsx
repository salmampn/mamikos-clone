"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import { PromoCard } from "@/components/cards/PromoCard";
import { Container } from "@/components/shared/Container";
import { IconButton } from "@/components/shared/IconButton";
import { promoItems } from "@/data/promos";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY = 4000;

export function PromoCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
      duration: 26,
    },
    // eslint-disable-next-line react-hooks/refs
    [autoplay.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    handleSelect();

    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi]);

  if (promoItems.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Promo pilihan"
      className="overflow-hidden bg-background py-8 sm:py-12"
    >
      <Container className="max-w-none px-0">
        <div
          ref={emblaRef}
          className="mx-auto w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8"
        >
          <div className="-ml-4 flex touch-pan-y sm:-ml-6 lg:-ml-8">
            {promoItems.map((promo) => (
              <div
                key={promo.id}
                className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_590px] sm:pl-6 lg:pl-8"
              >
                <PromoCard promo={promo} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-8 sm:mt-14">
          <IconButton
            label="Promo sebelumnya"
            variant="outline"
            size="sm"
            onClick={scrollPrevious}
            disabled={promoItems.length < 2}
            className="size-10 border-border bg-background text-foreground shadow-card hover:border-border hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FiChevronLeft
              size={23}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </IconButton>

          <Link
            href="/kos"
            className="text-sm font-bold text-foreground transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
          >
            Lihat semua promo
          </Link>

          <IconButton
            label="Promo selanjutnya"
            variant="outline"
            size="sm"
            onClick={scrollNext}
            disabled={promoItems.length < 2}
            className="size-10 border-border bg-background text-foreground shadow-card hover:border-border hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FiChevronRight
              size={23}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </IconButton>
        </div>

        <div
          aria-label={`Promo ${selectedIndex + 1} dari ${promoItems.length}`}
          className="mt-5 flex justify-center gap-1.5 sm:hidden"
        >
          {promoItems.map((promo, index) => {
            const isActive = selectedIndex === index;

            return (
              <button
                key={promo.id}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Tampilkan promo ${index + 1}: ${promo.title}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-full transition-all duration-200",
                  isActive
                    ? "h-1.5 w-5 bg-primary"
                    : "size-1.5 bg-border hover:bg-muted-foreground",
                )}
              />
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Promo aktif: {promoItems[selectedIndex]?.title}
        </p>
      </Container>
    </section>
  );
}
"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";

type UsePropertyListingCarouselProps = {
  groupCount: number;
};

export function usePropertyListingCarousel({
  groupCount,
}: UsePropertyListingCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    duration: 22,
  });

  const [selectedGroup, setSelectedGroup] = useState(0);
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

  const resetCarousel = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.reInit();
    emblaApi.scrollTo(0, true);
    setSelectedGroup(0);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateCarouselState();

    emblaApi.on("select", updateCarouselState);
    emblaApi.on("reInit", updateCarouselState);

    return () => {
      emblaApi.off("select", updateCarouselState);
      emblaApi.off("reInit", updateCarouselState);
    };
  }, [emblaApi, updateCarouselState]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    resetCarousel();
  }, [groupCount, resetCarousel]);

  return {
    emblaRef,
    selectedGroup,
    canScrollPrevious,
    canScrollNext,
    scrollPrevious,
    scrollNext,
    resetCarousel,
  };
}
import type { PromoItem } from "@/types/promo";

export const promoItems: PromoItem[] = [
  {
    id: "promo-kos-bali",
    title: "Promo booking kos di Bali",
    image: "/images/banners/promo-bali.jpg",
    href: "/cari?lokasi=Bali",
    alt: "Promo kos di Bali",
    position: "center",
  },
  {
    id: "promo-owner",
    title: "Promosikan kos Anda",
    image: "/images/banners/promo-owner.jpg",
    href: "/sewakan-kos",
    alt: "Promosikan kos Anda di Mamikos Clone",
    position: "left",
  },
  {
    id: "promo-singgahsini",
    title: "Promo Singgahsini",
    image: "/images/banners/promo-singgahsini.jpg",
    href: "/singgahsini",
    alt: "Promo Singgahsini",
    position: "right",
  },
];
export type GenderType = "Putra" | "Putri" | "Campur";

export type KosItem = {
  id: string;
  slug: string;
  name: string;
  city: string;
  district: string;
  gender: GenderType;
  rating: number;
  availableRooms: number;
  currentPrice: number;
  originalPrice?: number;
  promoText?: string;
  image: string;
  facilities: string[];
  isFeatured?: boolean;
};
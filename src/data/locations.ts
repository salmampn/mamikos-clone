import type {
  CityLocationGroup,
  LocationTab,
} from "@/types/location";

export const searchTabs: Array<{
  value: LocationTab;
  label: string;
}> = [
  {
    value: "kampus",
    label: "Kampus",
  },
  {
    value: "area",
    label: "Area",
  },
  {
    value: "stasiun",
    label: "Stasiun & Halte",
  },
];

export const popularCampuses = [
  "UGM",
  "UNPAD Jatinangor",
  "STAN Jakarta",
  "UNAIR",
  "UB",
  "UNY",
  "UI",
  "UNDIP",
  "ITB",
  "UMY",
];

export const popularAreaSearches = [
  "Tebet Jakarta Selatan",
  "Seturan Yogyakarta",
  "Dago Bandung",
  "Sukolilo Surabaya",
  "Kukusan Depok",
  "Margonda Depok",
  "Canggu Bali",
];

export const popularStations = [
  "Stasiun Tebet",
  "Stasiun Universitas Indonesia",
  "Stasiun Manggarai",
  "Halte TransJakarta Tosari",
  "Stasiun Bandung",
  "Stasiun Lempuyangan",
];

export const cityLocationGroups: CityLocationGroup[] = [
  {
    city: "Bali",
    locations: ["Denpasar", "Kuta", "Canggu", "Jimbaran"],
  },
  {
    city: "Bandung",
    locations: ["Dago", "Coblong", "Ciumbuleuit", "Buahbatu"],
  },
  {
    city: "Bogor",
    locations: ["Dramaga", "Baranangsiang", "Tanah Sareal"],
  },
  {
    city: "Depok",
    locations: ["Kukusan", "Beji", "Margonda", "Pancoran Mas"],
  },
  {
    city: "Jakarta",
    locations: ["Jakarta Selatan", "Jakarta Timur", "Jakarta Barat"],
  },
  {
    city: "Jakarta Pusat",
    locations: ["Senen", "Menteng", "Kemayoran"],
  },
  {
    city: "Jakarta Timur",
    locations: ["Rawamangun", "Jatinegara", "Cipayung"],
  },
  {
    city: "Jember",
    locations: ["Sumbersari", "Kaliwates", "Patrang"],
  },
  {
    city: "Makassar",
    locations: ["Rappocini", "Panakkukang", "Tamalanrea"],
  },
];
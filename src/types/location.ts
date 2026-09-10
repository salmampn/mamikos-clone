export type AreaItem = {
  id: string;
  name: string;
  image: string;
  href: string;
};

export type CampusItem = {
  id: string;
  name: string;
  city: string;
  logo: string;
  href: string;
};

export type LocationTab = "kampus" | "area" | "stasiun";

export type CityLocationGroup = {
  city: string;
  locations: string[];
};
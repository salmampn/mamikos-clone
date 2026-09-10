export type NavigationItem = {
  label: string;
  href: string;
};

export type CategoryNavigationItem = NavigationItem & {
  iconKey: "bed" | "sparkles" | "badge" | "building" | "house";
};
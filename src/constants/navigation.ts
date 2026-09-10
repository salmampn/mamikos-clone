import type { IconType } from "react-icons";
import { IoBedOutline } from "react-icons/io5";
import { PiBuildingApartment, PiHouseLine  } from "react-icons/pi";
import { FiCalendar, FiSmartphone, FiTag } from "react-icons/fi";

import { ROUTES } from "@/constants/routes";

export type TopbarNavigationItem = {
  label: string;
  href: string;
  icon: IconType;
};

export type CategoryNavigationItem = {
  label: string;
  href: string;
  icon?: IconType;
  image?: string;
  iconClassName: string;
};

export const topbarNavigationItems: TopbarNavigationItem[] = [
  {
    label: "Download App",
    href: ROUTES.downloadApp,
    icon: FiSmartphone,
  },
  {
    label: "Sewakan Kos",
    href: ROUTES.sewakanKos,
    icon: FiCalendar,
  },
];

export const categoryNavigationItems: CategoryNavigationItem[] = [
  {
    label: "Kos",
    href: ROUTES.kos,
    icon: IoBedOutline,
    iconClassName: "text-foreground",
  },
  {
    label: "Kos Singgahsini & Apik",
    href: ROUTES.singgahsini,
    image: "/logo/icon-singgahsini.svg",
    iconClassName: "text-[#8E42B8]",
  },
  {
    label: "Kos Andalan",
    href: ROUTES.kosAndalan,
    image: "/logo/icon-kos-andalan.svg",
    iconClassName: "text-warning",
  },
  {
    label: "Apartemen",
    href: ROUTES.apartemen,
    icon: PiBuildingApartment,
    iconClassName: "text-foreground",
  },
  {
    label: "Jual-Beli Properti",
    href: ROUTES.jualBeliProperti,
    icon: PiHouseLine,
    iconClassName: "text-foreground",
  },
];

export const desktopNavigationItems = [
  {
    label: "Pusat Bantuan",
    href: ROUTES.bantuan,
  },
  {
    label: "Syarat dan Ketentuan",
    href: ROUTES.syaratKetentuan,
  },
];

export const promotionNavigationItem = {
  label: "Promosikan Iklan Anda",
  href: ROUTES.sewakanKos,
  icon: FiTag,
};

export const mobileSecondaryNavItems = [
  {
    label: "Download Aplikasi",
    href: ROUTES.downloadApp,
  },
  {
    label: "Pusat Bantuan",
    href: ROUTES.bantuan,
  },
  {
    label: "Blog Mamikos",
    href: "https://mamikos.com/info/",
    isExternal: true,
  },
  {
    label: "Syarat dan Ketentuan",
    href: ROUTES.syaratKetentuan,
  },
  {
    label: "Kebijakan Privasi",
    href: ROUTES.kebijakanPrivasi,
  },
];
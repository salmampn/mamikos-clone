import type { IconType } from "react-icons";
import {
  FaBed,
  FaBuilding,
  FaHouse,
} from "react-icons/fa6";
import { HiMiniCheckBadge, HiSparkles } from "react-icons/hi2";
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
    icon: FaBed,
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
    icon: FaBuilding,
    iconClassName: "text-foreground",
  },
  {
    label: "Jual-Beli Properti",
    href: ROUTES.jualBeliProperti,
    icon: FaHouse,
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
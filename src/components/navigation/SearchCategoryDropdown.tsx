"use client";

import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categoryNavigationItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function SearchCategoryDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-sm px-2 py-2 text-sm font-bold text-foreground transition-colors",
          "hover:bg-muted hover:text-primary",
          "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20",
          "data-[state=open]:bg-muted data-[state=open]:text-primary",
        )}
      >
        Cari Apa?
        <FiChevronDown
          size={16}
          aria-hidden="true"
          className="transition-transform duration-normal data-[state=open]:rotate-180"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={10}
        className="w-82.5 rounded-lg border-border bg-popover p-2 shadow-floating"
      >
        {categoryNavigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 rounded-md px-4 py-3 text-sm font-bold text-popover-foreground transition-colors",
                "hover:bg-muted focus:bg-muted focus:outline-none",
              )}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.label}
                  width={22}
                  height={22}
                />
              ) : (
                <Icon
                  size={22}
                  aria-hidden="true"
                  className={cn("shrink-0", item.iconClassName)}
                />
              )}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
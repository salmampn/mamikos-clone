"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categoryNavigationItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";

type SearchCategoryDropdownProps = {
  variant?: "desktop" | "drawer";
  className?: string;
  onNavigate?: () => void;
};

export function SearchCategoryDropdown({
  variant = "desktop",
  className,
  onNavigate,
}: SearchCategoryDropdownProps) {
  if (variant === "drawer") {
    return (
      <nav
        aria-label="Kategori pencarian"
        className={cn(className)}
      >
        <ul className="divide-y divide-border">
          {categoryNavigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="flex min-h-12 items-center gap-3 py-3 text-sm font-bold text-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
                >
                  {item.image ? (
                    <span className="relative grid size-6 shrink-0 place-items-center">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="24px"
                        className="object-contain"
                      />
                    </span>
                  ) : Icon ? (
                    <Icon
                      size={20}
                      aria-hidden="true"
                      className={cn(
                        "shrink-0 text-foreground",
                        item.iconClassName,
                      )}
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="size-6 shrink-0"
                    />
                  )}

                  <span className="min-w-0 flex-1">
                    {item.label}
                  </span>

                  <FiChevronRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-muted-foreground"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          type="button"
          className={cn(
            "group inline-flex items-center gap-1 rounded-sm px-2 py-2 text-sm font-bold text-foreground outline-none transition-colors",
            "hover:bg-muted hover:text-primary",
            "focus-visible:ring-4 focus-visible:ring-ring/20",
            "data-[state=open]:bg-muted data-[state=open]:text-primary",
            className,
          )}
        >
          <span>Cari Apa?</span>

          <FiChevronDown
            size={16}
            aria-hidden="true"
            className="shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={10}
        className="w-80 rounded-lg border border-border bg-popover p-2 shadow-floating"
      >
        {categoryNavigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 rounded-md px-4 py-3 text-sm font-bold text-popover-foreground outline-none transition-colors",
                "hover:bg-muted focus-visible:bg-muted focus-visible:ring-2 focus-visible:ring-ring/20",
              )}
            >
              {item.image ? (
                <span className="relative grid size-6 shrink-0 place-items-center">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="24px"
                    className="object-contain"
                  />
                </span>
              ) : Icon ? (
                <Icon
                  size={22}
                  aria-hidden="true"
                  className={cn(
                    "shrink-0",
                    item.iconClassName,
                  )}
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="size-6 shrink-0"
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
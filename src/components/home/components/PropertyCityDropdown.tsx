"use client";

import { FiChevronDown } from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type PropertyCityDropdownProps = {
  value: string;
  cities: readonly string[];
  onValueChange: (city: string) => void;
  variant?: "inline" | "boxed";
  className?: string;
};

export function PropertyCityDropdown({
  value,
  cities,
  onValueChange,
  variant = "inline",
  className,
}: PropertyCityDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {variant === "boxed" ? (
          <button
            type="button"
            className={cn(
              "group flex h-12 w-full items-center justify-between rounded-lg border border-border bg-card px-4 text-base font-bold text-foreground outline-none transition-colors",
              "hover:border-primary focus-visible:ring-4 focus-visible:ring-ring/20",
              className,
            )}
          >
            <span>{value}</span>

            <svg
              className="size-3.5 fill-foreground text-foreground transition-transform duration-200 group-data-[popup-open]:rotate-180"
              viewBox="0 0 12 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2.5 4.5L6 8.5L9.5 4.5H2.5Z" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            className={cn(
              "group inline-flex items-center gap-1 rounded-sm text-xl font-bold leading-tight text-primary outline-none transition-colors",
              "hover:text-primary-hover focus-visible:ring-4 focus-visible:ring-ring/20 sm:text-2xl",
              className,
            )}
          >
            <span>{value}</span>

            <FiChevronDown
              size={19}
              aria-hidden="true"
              className="transition-transform duration-200 group-data-[popup-open]:rotate-180"
            />
          </button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={variant === "boxed" ? 6 : 10}
        className={cn(
          "max-h-72 overflow-y-auto rounded-md border-border bg-popover p-1 shadow-floating",
          variant === "boxed" ? "w-(--anchor-width) min-w-[200px]" : "min-w-52",
        )}
      >
        <DropdownMenuRadioGroup
          value={value}
          onValueChange={onValueChange}
        >
          {cities.map((city) => (
            <DropdownMenuRadioItem
              key={city}
              value={city}
              className="cursor-pointer rounded-sm px-3 py-2 text-sm font-bold text-popover-foreground outline-none focus:bg-muted data-[state=checked]:bg-primary-soft data-[state=checked]:text-primary"
            >
              {city}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
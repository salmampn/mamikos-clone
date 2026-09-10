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
};

export function PropertyCityDropdown({
  value,
  cities,
  onValueChange,
}: PropertyCityDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "group inline-flex items-center gap-1 rounded-sm text-xl font-bold leading-tight text-primary outline-none transition-colors",
            "hover:text-primary-hover focus-visible:ring-4 focus-visible:ring-ring/20 sm:text-2xl",
          )}
        >
          <span>{value}</span>

          <FiChevronDown
            size={19}
            aria-hidden="true"
            className="transition-transform duration-200 group-data-[popup-open]:rotate-180"
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={10}
        className="max-h-72 min-w-52 overflow-y-auto rounded-md border-border bg-popover p-1 shadow-floating"
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
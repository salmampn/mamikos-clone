"use client";

import type { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

import { cn } from "@/lib/utils";

type AboutAccordionProps = {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children?: ReactNode;
  align?: "between" | "center";
  hideContent?: boolean;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
};

export function AboutAccordion({
  id,
  title,
  isOpen,
  onToggle,
  children,
  align = "between",
  hideContent = false,
  className,
  buttonClassName,
  contentClassName,
}: AboutAccordionProps) {
  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1.5 text-left outline-none transition-colors",
          "hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20",
          align === "between"
            ? "w-full justify-between gap-4"
            : "inline-flex",
          buttonClassName,
        )}
      >
        <span>{title}</span>

        <FiChevronDown
          size={20}
          aria-hidden="true"
          className={cn(
            "shrink-0 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {!hideContent && (
        <div
          id={id}
          hidden={!isOpen}
          className={cn(
            "animate-in fade-in slide-in-from-top-1 duration-200",
            contentClassName,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}
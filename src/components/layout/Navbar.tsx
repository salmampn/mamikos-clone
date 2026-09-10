"use client";

import Link from "next/link";

import { FiSearch } from "react-icons/fi";

import { AppButton } from "@/components/shared/AppButton";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { SearchCategoryDropdown } from "@/components/navigation/SearchCategoryDropdown";
import { desktopNavigationItems } from "@/constants/navigation";

type NavbarProps = {
  onOpenLogin: () => void;
  showSearch?: boolean;
  onOpenSearch?: () => void;
};

export function Navbar({
  onOpenLogin,
  showSearch = false,
  onOpenSearch,
}: NavbarProps) {
  return (
    <div className="border-b border-border bg-background">
      <Container className="flex h-18 items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          <Logo className="h-8 text-xl" hideText={showSearch} />

          {showSearch && (
            <div
              role="button"
              tabIndex={0}
              onClick={onOpenSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenSearch?.();
                }
              }}
              className="flex h-10 w-full max-w-xs sm:max-w-sm md:max-w-md cursor-pointer items-center justify-between rounded-md border border-border bg-background px-3 py-1 shadow-xs transition-all hover:border-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 animate-in fade-in duration-200"
              aria-label="Cari kos berdasarkan nama lokasi, area, atau alamat"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <FiSearch className="h-4 w-4 shrink-0 text-foreground" />
                <span className="truncate text-xs text-muted-foreground sm:text-sm">
                  Masukan nama lokasi/area/alamat
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenSearch?.();
                }}
                className="shrink-0 rounded bg-primary px-3.5 py-1 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary-hover sm:text-sm"
              >
                Cari
              </button>
            </div>
          )}
        </div>

        <nav
          aria-label="Navigasi utama"
          className="flex items-center gap-6 shrink-0"
        >
          <SearchCategoryDropdown />
          {desktopNavigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-foreground transition-colors hover:text-primary focus-visible:rounded-sm"
            >
              {item.label}
            </Link>
          ))}

          <AppButton
            type="button"
            variant="outline"
            size="md"
            onClick={onOpenLogin}
            className="min-w-22"
          >
            Masuk
          </AppButton>
        </nav>
      </Container>
    </div>
  );
}
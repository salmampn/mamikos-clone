"use client";

import Link from "next/link";

import { AppButton } from "@/components/shared/AppButton";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { SearchCategoryDropdown } from "@/components/navigation/SearchCategoryDropdown";
import { desktopNavigationItems } from "@/constants/navigation";

type NavbarProps = {
  onOpenLogin: () => void;
};

export function Navbar({ onOpenLogin }: NavbarProps) {
  return (
    <div className="border-b border-border bg-background">
      <Container className="flex h-18  items-center justify-between gap-5">
        <div className="flex items-center gap-8">
          <Logo />
        </div>

        <nav
          aria-label="Navigasi utama"
          className="flex items-center gap-6"
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
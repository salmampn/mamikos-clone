"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import { LuTrendingUp } from "react-icons/lu";

import {
  categoryNavigationItems,
  mobileSecondaryNavItems,
  promotionNavigationItem,
} from "@/constants/navigation";
import { cn } from "@/lib/utils";

type MobileNavDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: (role?: "tenant" | "owner") => void;
};

export function MobileNavDrawer({
  isOpen,
  onClose,
  onOpenLogin,
}: MobileNavDrawerProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup menu navigasi"
        className="fixed inset-0 bg-black/50"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        className={cn(
          "fixed inset-0 z-50 flex h-dvh w-full flex-col bg-background",
          "sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:w-96 sm:max-w-md sm:shadow-2xl",
        )}
      >
        <div className="flex shrink-0 items-center justify-end px-5 pt-2">
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu"
            className="grid size-10 place-items-center rounded-md bg-secondary text-muted-foreground outline-none transition-colors hover:bg-primary-soft hover:text-primary focus-visible:ring-4 focus-visible:ring-ring/20"
          >
            <FiX
              size={22}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-8 pt-2 sm:px-8 sm:pb-6">
          <nav
            aria-label="Kategori Kos dan Properti"
            className="sm:space-y-1"
          >
            {categoryNavigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group flex min-h-12 items-center justify-between gap-4 py-3 outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt=""
                          width={30}
                          height={30}
                          className="object-contain"
                        />
                      ) : Icon ? (
                        <Icon
                          size={24}
                          aria-hidden="true"
                          className={cn(
                            "shrink-0 text-foreground",
                            item.iconClassName,
                          )}
                        />
                      ) : null}
                    </span>

                    <span className="text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
                      {item.label}
                    </span>
                  </span>

                  <FiChevronRight
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="my-2 border-t border-border" />

          <Link
            href={promotionNavigationItem.href}
            onClick={onClose}
            className="group flex min-h-12 items-center gap-3.5 py-3 outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
          >
            <span className="flex size-6 shrink-0 items-center justify-center text-foreground">
              <LuTrendingUp
                size={24}
                aria-hidden="true"
              />
            </span>

            <span className="text-base font-semibold text-foreground transition-colors group-hover:text-primary sm:text-lg">
              {promotionNavigationItem.label}
            </span>
          </Link>

          <div className="my-2 border-t border-border" />

          <nav aria-label="Informasi tambahan">
            <ul className="flex flex-col space-y-3.5 py-2">
              {mobileSecondaryNavItems.map((item) => {
                const isExternal =
                  "isExternal" in item && item.isExternal;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={
                        isExternal
                          ? "noopener noreferrer"
                          : undefined
                      }
                      onClick={onClose}
                      className="text-base font-medium text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20 sm:text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-4 border-t border-border pt-5">
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLogin("owner");
                }}
                className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-xs outline-none transition-colors hover:bg-primary-hover focus-visible:ring-4 focus-visible:ring-ring/20"
              >
                Masuk Sebagai Pemilik
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLogin("tenant");
                }}
                className="w-full rounded-md border border-primary bg-background px-4 py-2.5 text-sm font-bold text-primary outline-none transition-colors hover:bg-primary-soft focus-visible:ring-4 focus-visible:ring-ring/20"
              >
                Masuk Sebagai Pencari
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

const helpNavigationItems = [
  {
    label: "Penyewa Kos",
    role: "penyewa-kos",
  },
  {
    label: "Pemilik Kos",
    role: "pemilik-kos",
  },
  {
    label: "Info Umum",
    role: "info-umum",
  },
];

export function HelpHeader() {
  const searchParams = useSearchParams();
  const currentRole = searchParams.get("role");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link
          href="/bantuan"
          aria-label="Pusat Bantuan"
          className="inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-85"
        >
          <Image
                    src="/icon.png"
                    alt="Mamikos Logo"
                    width={100}
                    height={100}
                    className="h-8 w-auto object-contain"
                  />

          <span className="text-xl font-black tracking-[-0.04em] sm:text-2xl">
            Pusat Bantuan
          </span>
        </Link>

        <nav
          aria-label="Navigasi Pusat Bantuan"
          className="flex items-center gap-4 sm:gap-8"
        >
          {helpNavigationItems.map((item) => {
            const isActive = currentRole === item.role;

            return (
              <Link
                key={item.role}
                href={`/bantuan?role=${item.role}`}
                className={cn(
                  "whitespace-nowrap text-xs font-semibold transition-colors sm:text-sm",
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
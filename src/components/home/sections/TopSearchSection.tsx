import Image from "next/image";
import { FiSearch } from "react-icons/fi";

import { AppButton } from "@/components/shared/AppButton";
import { Container } from "@/components/shared/Container";

type TopSearchSectionProps = {
  onOpenSearch: () => void;
  onSelectCategory?: (category: "kos" | "apartemen") => void;
};

export function TopSearchSection({
  onOpenSearch,
  onSelectCategory,
}: TopSearchSectionProps) {
  return (
    <section
      aria-labelledby="top-search-heading"
      className="relative overflow-hidden bg-background"
    >
      {/* 
        ========================================
        MOBILE VIEW (Tampil di layar sm kebawah)
        ========================================
      */}
      <div className="block sm:hidden">
        {/* Sticky Search Bar Header */}
        <div className="sticky top-0 z-30 bg-background px-4 pt-4 transition-all">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex w-full items-center gap-3 rounded-lg border border-border/40 bg-card p-3 shadow-md transition-all active:scale-[0.99]"
            aria-label="Mau ngekos di mana?"
          >
            <FiSearch
              size={22}
              aria-hidden="true"
              className="shrink-0 text-muted-foreground"
            />
            <span className="text-sm font-medium text-muted-foreground">
              Mau ngekos di mana?
            </span>
          </button>
        </div>

        {/* Content Section di bawah Sticky Search Bar */}
        <div className="px-4 pt-3 pb-6">
          <div className="mb-4">
            <span className="text-xs font-semibold text-foreground/80">Hai,</span>
            <h2 id="top-search-heading" className="text-xl font-bold tracking-tight text-foreground">
              Lagi cari apa?
            </h2>
          </div>

          {/* Cards Options: Kamar Kos & Apartemen */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onSelectCategory?.("kos")}
              className="group overflow-hidden rounded-xl border border-border/50 bg-card text-left shadow-sm transition-transform active:scale-95"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <Image
                  src="/hero/bedroom.jpg"
                  alt="Kamar Kos"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-3">
                <span className="text-xs font-semibold text-foreground">
                  Kamar Kos
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => onSelectCategory?.("apartemen")}
              className="group overflow-hidden rounded-xl border border-border/50 bg-card text-left shadow-sm transition-transform active:scale-95"
            >
              <div className="relative h-28 w-full overflow-hidden">
                <Image
                  src="/hero/apartment.jpg"
                  alt="Apartemen"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-3">
                <span className="text-xs font-semibold text-foreground">
                  Apartemen
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 
        ========================================
        DESKTOP VIEW (Tampil di layar sm keatas)
        ========================================
      */}
      <Container className="relative hidden min-h-32 py-16 sm:block">
        <div className="relative z-10 max-w-2xl">
          <h1
            id="top-search-heading-desktop"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Mau cari kos?
          </h1>

          <p className="mt-2 text-base font-semibold leading-6 text-muted-foreground sm:text-lg">
            Dapatkan infonya dan langsung sewa di Mamikos.
          </p>

          <div className="mt-6 flex w-full max-w-md items-center rounded-md border border-border bg-card p-1 shadow-lg">
            <button
              type="button"
              onClick={onOpenSearch}
              className="group flex min-w-0 flex-1 items-center gap-3 rounded-sm px-3 py-2 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-4 focus-visible:ring-ring/20"
              aria-label="Buka pencarian lokasi kos"
            >
              <FiSearch
                size={20}
                aria-hidden="true"
                className="shrink-0 text-foreground"
              />

              <span className="truncate text-xs text-muted-foreground sm:text-sm">
                Masukkan nama lokasi/area/alamat
              </span>
            </button>

            <AppButton
              type="button"
              variant="default"
              size="md"
              onClick={onOpenSearch}
              className="h-10 shrink-0 rounded-sm px-5 text-sm"
            >
              Cari
            </AppButton>
          </div>
        </div>
        <HeroCityscape />
      </Container>
    </section>
  );
}

function HeroCityscape() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 -right-24 hidden h-56 w-2xl opacity-70 lg:block"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="absolute bottom-0 left-6 h-14 w-10 border border-border bg-background" />
      <div className="absolute bottom-0 left-14 h-20 w-14 border border-border bg-background" />
      <div className="absolute bottom-0 left-28 h-28 w-11 border border-border bg-background" />
      <div className="absolute bottom-0 left-40 h-20 w-16 border border-border bg-background" />
      <div className="absolute bottom-0 left-52 h-36 w-14 border border-border bg-background" />
      <div className="absolute bottom-0 left-64 h-24 w-13 border border-border bg-background" />
      <div className="absolute bottom-0 left-80 h-44 w-16 border border-border bg-background" />
      <div className="absolute bottom-0 left-96 h-32 w-12 border border-border bg-background" />
      <div className="absolute bottom-0 left-112 h-24 w-16 border border-border bg-background" />
      <div className="absolute bottom-0 left-128 h-36 w-14 border border-border bg-background" />
      <div className="absolute bottom-0 left-144 h-16 w-12 border border-border bg-background" />

      <div className="absolute left-44 top-10 h-1.5 w-10 rounded-full border border-border bg-background" />
      <div className="absolute left-72 top-6 h-1.5 w-12 rounded-full border border-border bg-background" />
      <div className="absolute left-104 top-12 h-1.5 w-11 rounded-full border border-border bg-background" />
      <div className="absolute left-128 top-4 h-1.5 w-9 rounded-full border border-border bg-background" />
    </div>
  );
}
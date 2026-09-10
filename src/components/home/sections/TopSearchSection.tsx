import { FiSearch } from "react-icons/fi";

import { AppButton } from "@/components/shared/AppButton";
import { Container } from "@/components/shared/Container";

type TopSearchSectionProps = {
  onOpenSearch: () => void;
};

export function TopSearchSection({
  onOpenSearch,
}: TopSearchSectionProps) {
  return (
    <section
      aria-labelledby="top-search-heading"
      className="relative overflow-hidden bg-background"
    >
      <Container className="relative min-h-32 py-16">
        <div className="relative z-10 hidden max-w-2xl sm:block">
          <h1
            id="top-search-heading"
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
              variant="search"
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
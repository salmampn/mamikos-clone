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
      <Container className="relative min-h-[300px] py-14 sm:min-h-[330px] sm:py-16 lg:min-h-[350px] lg:py-20">
        <div className="relative z-10 max-w-[520px]">
          <h1
            id="top-search-heading"
            className="text-3xl font-bold tracking-[-0.03em] text-foreground sm:text-4xl"
          >
            Mau cari kos?
          </h1>

          <p className="mt-2 text-lg leading-6 text-muted-foreground font-semibold">
            Dapatkan infonya dan langsung sewa di Mamikos.
          </p>

          <div className="mt-6 flex w-full max-w-[400px] items-center border rounded-md bg-card p-1.5 shadow-lg">
            <button
              type="button"
              onClick={onOpenSearch}
              className="group flex min-w-0 flex-1 items-center gap-3 rounded-sm px-3 py-2.5 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-4 focus-visible:ring-ring/20"
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
              className="h-10 shrink-0 rounded-sm px-6 text-sm"
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
      className="pointer-events-none absolute bottom-0 right-[-96px] hidden h-[230px] w-[620px] opacity-70 lg:block"
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />

      <div className="absolute bottom-0 left-6 h-[54px] w-[42px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[58px] h-[86px] w-[56px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[112px] h-[118px] w-[44px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[154px] h-[76px] w-[64px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[214px] h-[146px] w-[58px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[268px] h-[102px] w-[52px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[316px] h-[172px] w-[62px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[374px] h-[122px] w-[48px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[418px] h-[92px] w-[64px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[478px] h-[142px] w-[54px] border border-border bg-background" />
      <div className="absolute bottom-0 left-[528px] h-[70px] w-[50px] border border-border bg-background" />

      <div className="absolute left-[168px] top-[42px] h-1.5 w-10 rounded-full border border-border bg-background" />
      <div className="absolute left-[276px] top-[24px] h-1.5 w-12 rounded-full border border-border bg-background" />
      <div className="absolute left-[408px] top-[48px] h-1.5 w-11 rounded-full border border-border bg-background" />
      <div className="absolute left-[500px] top-[16px] h-1.5 w-9 rounded-full border border-border bg-background" />
    </div>
  );
}
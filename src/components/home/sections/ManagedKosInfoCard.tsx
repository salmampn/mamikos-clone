import Image from "next/image";

import { Container } from "@/components/shared/Container";

export function ManagedKosInfoCard() {
  return (
    <section
      aria-labelledby="managed-kos-heading"
      className="bg-background pb-8"
    >
      <Container>
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:gap-6 sm:px-8 sm:py-6 lg:gap-10 lg:px-10">
            <div className="min-w-0">
              <h2
                id="managed-kos-heading"
                className="text-lg font-bold leading-tight text-foreground sm:text-3xl"
              >
                Kos Dikelola Mamikos, Terjamin Nyaman
              </h2>

              <p className="mt-1 max-w-2xl text-xs leading-5 text-muted-foreground sm:text-lg sm:leading-6">
                Disurvey langsung oleh Mamikos. Lokasi terverifikasi,
                bangunan kos lolos seleksi.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-3 lg:flex-row sm:gap-4">
              <Image
                src="/logo/logo-singgahsini.svg"
                alt="Logo Singgahsini"
                width={96}
                height={32}
                className="h-auto w-18 sm:w-28 lg:w-36"
              />

              <Image
                src="/logo/logo-apik.svg"
                alt="Logo Apik"
                width={72}
                height={32}
                className="h-auto w-14 sm:w-18 lg:w-24"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
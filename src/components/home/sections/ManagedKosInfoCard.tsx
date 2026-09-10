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
          <div className="grid items-center gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:px-10">
            <div>
              <h2
                id="managed-kos-heading"
                className="text-xl font-bold leading-tight text-foreground sm:text-2xl"
              >
                Kos Dikelola Mamikos, Terjamin Nyaman
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Disurvey langsung oleh Mamikos. Lokasi terverifikasi, bangunan kos lolos seleksi.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4 text-[#8E42B8] sm:gap-6">
              <div className="flex items-center gap-2">
                <Image
                    src="/logo/logo-singgahsini.svg"
                    alt="Logo Singgahsini"
                    width={150}
                    height={50}
                />
              </div>
              <Image
                  src="/logo/logo-apik.svg"
                  alt="Logo Apik"
                  width={100}
                  height={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
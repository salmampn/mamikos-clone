import Image from "next/image";
import Link from "next/link";

import { AppButton } from "@/components/shared/AppButton";
import { Container } from "@/components/shared/Container";

export function ManagedKosInfoCard() {
  return (
    <section
      aria-labelledby="managed-kos-heading"
      className="bg-background pb-8"
    >
      <Container className="space-y-4">
        {/* Banner Pemilik Iklan */}
        <div className="flex items-center justify-between rounded-sm bg-[#1baa56] px-4 py-3 sm:px-6 sm:hidden mt-12">
          <h2 className="text-sm font-semibold text-white sm:text-base">
            Anda Pemilik Iklan?
          </h2>

          <AppButton
            asChild
            variant="outline"
            size="sm"
            className="h-8 border-white bg-transparent px-3 text-xs font-semibold text-white hover:bg-white/10 hover:text-white sm:h-9 sm:px-4 sm:text-sm"
          >
            <Link href="/sewakan-kos">Masuk di Sini</Link>
          </AppButton>
        </div>

        {/* Card Kos Dikelola Mamikos */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="flex flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:gap-6 sm:px-8 sm:py-6 md:flex-row md:text-start lg:gap-10 lg:px-10">
            <div className="min-w-0">
              <h2
                id="managed-kos-heading"
                className="text-lg font-bold leading-tight text-foreground sm:text-3xl"
              >
                Kos Dikelola Mamikos, Terjamin Nyaman
              </h2>

              <p className="mt-1 max-w-2xl text-xs leading-5 text-muted-foreground sm:text-lg sm:leading-6">
                Disurvey langsung oleh Mamikos. Lokasi terverifikasi, bangunan
                kos lolos seleksi.
              </p>
            </div>

            <div className="flex shrink-0 flex-row items-center gap-3 sm:flex-col sm:gap-4 lg:flex-row">
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
import Image from "next/image";
import Link from "next/link";

import { AppButton } from "@/components/shared/AppButton";
import { Container } from "@/components/shared/Container";

export function OwnerPromotionSection() {
  return (
    <section
      aria-labelledby="owner-promotion-heading"
      className="bg-background"
    >
      <Container>
        <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-12 h-52 w-96 rounded-full border border-primary/20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/4 h-64 w-80 rounded-full border border-primary/15"
          />

          <div className="relative grid min-h-12 grid-cols-[minmax(0,1fr)_160px] items-stretch sm:min-h-48 md:grid-cols-[minmax(0,1fr)_390px]">
            <div className="relative z-10 min-w-0 px-5 py-5 sm:px-8 sm:py-6 lg:px-10 flex flex-col justify-between">
              <div>
                <h2
                  id="owner-promotion-heading"
                  className="max-w-xl text-lg font-bold leading-tight text-foreground md:text-4xl"
                >
                  Daftarkan Kos Anda di Mamikos
                </h2>

                <p className="mt-2 hidden max-w-xl text-base leading-5 text-muted-foreground sm:block sm:text-lg">
                  Berbagai fitur dan layanan untuk meningkatkan bisnis kos Anda.
                </p>
              </div>

              <div className="mt-4">
                <AppButton
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-10 px-2 text-sm rounded-sm md:h-12"
                >
                  <Link href="/sewakan-kos">
                    Pelajari lebih lanjut
                  </Link>
                </AppButton>
              </div>
            </div>

            <div className="relative min-h-full overflow-hidden">
              <Image
                src="/hero/landing-owner-entry.png"
                alt="Pemilik kos mengelola properti bersama Mamikos Clone"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
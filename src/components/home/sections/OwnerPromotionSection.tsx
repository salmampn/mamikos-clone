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
            className="pointer-events-none absolute -left-12 bottom-[-120px] h-[220px] w-[520px] rounded-[50%] border border-primary/20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[28%] top-[-150px] h-[280px] w-[360px] rounded-[50%] border border-primary/15"
          />

          <div className="relative grid items-center lg:grid-cols-[minmax(0,1fr)_390px]">
            <div className="px-6 sm:px-8 lg:px-10">
              <h2
                id="owner-promotion-heading"
                className="max-w-xl text-2xl font-bold leading-tight text-foreground sm:text-3xl"
              >
                Daftarkan Kos Anda di Mamikos
              </h2>

              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                Berbagai fitur dan layanan untuk meningkatkan bisnis kos Anda
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <AppButton asChild variant="outline" size="md">
                  <Link href="/sewakan-kos">
                    Pelajari lebih lanjut
                  </Link>
                </AppButton>
              </div>
            </div>

            <div className="relative order-first h-45 overflow-hidden lg:order-none lg:h-full lg:min-h-62.5 ">
              <Image
                src="/hero/landing-owner-entry.png"
                alt="Pemilik kos mengelola properti bersama Mamikos Clone"
                fill
                sizes="(max-width: 1023px) 100vw, 390px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
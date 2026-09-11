import Link from "next/link";
// import { FiArrowRight } from "react-icons/fi";

import { Container } from "@/components/shared/Container";

export function SurveyCtaSection() {
  return (
    <section
      aria-labelledby="survey-cta-heading"
      className="bg-background py-6 sm:py-8"
    >
      <Container>
        <div className="relative w-fit md:w-full overflow-hidden rounded-xl border border-border bg-card px-5 py-5 shadow-lg sm:px-8 sm:py-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 sm:-bottom-10 -left-8 h-28 w-40 opacity-70 sm:left-auto sm:-right-8"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />

          <div className="relative z-10 flex max-w-2xl flex-col">
            <h2
              id="survey-cta-heading"
              className="text-lg font-bold leading-tight text-foreground md:text-4xl"
            >
              Survei Kos Idaman Kamu Sekarang!
            </h2>

            <p className="mt-2 text-xs text-muted-foreground md:text-lg">
              Untungnya ada fitur Survei Kos di Mamikos. Cari, pilih, survei,
              hingga sewa kos idaman dijamin aman dan GRATIS.
            </p>

            <Link
              href="/bantuan?role=penyewa-kos"
              className="mt-4 inline-flex w-fit items-center gap-2 text-xs sm:text-sm font-bold text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 ml-auto sm:ml-0"
            >
              Baca selengkapnya
              {/* <FiArrowRight size={16} aria-hidden="true" /> */}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
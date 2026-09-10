import Link from "next/link";
import {
  FiArrowRight,
  FiMapPin,
  FiSearch,
} from "react-icons/fi";
import { Container } from "@/components/shared/Container";


export function SurveyCtaSection({
}) {
  return (
    <section
      aria-labelledby="survey-cta-heading"
      className="bg-background py-8"
    >
      <Container>
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-lg sm:p-6 max-w-fit">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-44px] right-[-30px] h-32 w-44 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />

          <div className="relative">
            <div className="max-w-2xl">
              <div className="flex items-start gap-3">
                <div className="px-4">
                  <h2
                    id="survey-cta-heading"
                    className="text-xl font-bold leading-tight text-foreground sm:text-2xl"
                  >
                    Survei Kos Idaman Kamu Sekarang!
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Untungnya ada fitur Survei Kos di Mamikos. Cari, pilih, survei, hingga sewa kos idaman dijamin aman dan GRATIS.
                  </p>

                  <Link
                    href="/bantuan?role=penyewa-kos"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-foreground underline decoration-foreground/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
                  >
                    Baca selengkapnya
                    <FiArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
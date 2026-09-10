import { AreaCard } from "@/components/cards/AreaCard";
import { ViewAllCard } from "@/components/cards/ViewAllCard";
import { Container } from "@/components/shared/Container";
import { popularAreaCards } from "@/data/areas";

export function PopularAreasSection() {
  return (
    <section
      aria-labelledby="popular-areas-heading"
      className="bg-background py-8 sm:py-10"
    >
      <Container>
        <h2
          id="popular-areas-heading"
          className="text-xl font-bold leading-tight text-foreground sm:text-2xl"
        >
          Area Kos Terpopuler
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {popularAreaCards.map((area) => (
            <AreaCard key={area.id} area={area} />
          ))}

          <ViewAllCard href="/cari?lokasi=Semua%20Kota" />
        </div>
      </Container>
    </section>
  );
}
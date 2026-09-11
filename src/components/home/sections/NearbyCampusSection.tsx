import { CampusCard } from "@/components/home/cards/CampusCard";
import { ViewAllCard } from "@/components/home/cards/ViewAllCard";
import { Container } from "@/components/shared/Container";
import { nearbyCampusItems } from "@/data/campus";

export function NearbyCampusesSection() {
  return (
    <section
      aria-labelledby="nearby-campuses-heading"
      className="bg-background py-8 sm:py-10"
    >
      <Container>
        <h2
          id="nearby-campuses-heading"
          className="text-xl font-bold leading-tight text-foreground sm:text-2xl"
        >
          Kos Sekitar Kampus
        </h2>

        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {nearbyCampusItems.map((campus) => (
            <CampusCard
              key={campus.id}
              campus={campus}
            />
          ))}

          <ViewAllCard href="/cari?tipe=dekat-kampus" />
        </div>
      </Container>
    </section>
  );
}
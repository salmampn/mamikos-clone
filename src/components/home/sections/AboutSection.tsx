import { AboutDesktopContent } from "@/components/home/components/about/AboutDesktopContent";
import { AboutMobileContent } from "@/components/home/components/about/AboutMobileContent";

import { Container } from "@/components/shared/Container";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="border-t border-border bg-background py-6 sm:bg-secondary sm:py-8"
    >
      <Container>
        <AboutMobileContent />

        <AboutDesktopContent />
      </Container>
    </section>
  );
}
import Link from "next/link";

import { AppButton } from "@/components/shared/AppButton";
import { Container } from "@/components/shared/Container";
import { ROUTES } from "@/constants/routes";

type PagePlaceholderProps = {
  title: string;
  description: string;
};

export function PagePlaceholder({
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <main className="min-h-screen bg-background py-16">
      <Container>
        <section className="rounded-xl border border-border bg-card p-8 shadow-card sm:p-10">
          <p className="text-sm font-bold text-primary">Mamikos Clone</p>

          <h1 className="mt-2 text-3xl font-bold text-foreground">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
            {description}
          </p>

          <AppButton asChild variant="outline" className="mt-7">
            <Link href={ROUTES.home}>Kembali ke halaman utama</Link>
          </AppButton>
        </section>
      </Container>
    </main>
  );
}
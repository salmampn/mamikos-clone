"use client";

import { useState } from "react";

import { TopSearchSection } from "@/components/home/sections/TopSearchSection";
import { Header } from "@/components/layout/Header";
import { LocationSearchOverlay } from "@/components/overlays/SearchOverlay/LocationSearchOverlay";
import { LoginModal } from "@/components/overlays/LoginDialog/LoginModal";
import { PromoCarousel } from "./sections/PromoCarousel";
import { ManagedKosInfoCard } from "./sections/ManagedKosInfoCard";
import { SurveyCtaSection } from "./sections/SurveyCTASection";
import { OwnerPromotionSection } from "./sections/OwnerPromotionSection";

export function HomeClient() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Header onOpenLogin={() => setIsLoginOpen(true)} />

      <main>
        <TopSearchSection
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        <PromoCarousel />

        <OwnerPromotionSection />

        <SurveyCtaSection
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        <ManagedKosInfoCard />

        <section className="border-t border-border bg-secondary py-16">
          <div className="mx-auto max-w-[1120px] px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
            Section property listing akan ditambahkan di bawah Managed Kos card.
          </div>
        </section>
      </main>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <LocationSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
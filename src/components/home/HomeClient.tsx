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
import { propertyCities } from "@/constants/cities";
import { kosItems } from "@/data/kos";
import { PropertyListingSection } from "./sections/PropertyListingSection";

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

        <SurveyCtaSection />

        <ManagedKosInfoCard />

        <PropertyListingSection
          title="Promo Ngebut"
          items={kosItems}
          cities={propertyCities}
          defaultCity="Semua Kota"
          viewAllHref="/kos"
          showCountdown
        />

        <PropertyListingSection
          title="Rekomendasi kos di"
          items={kosItems.filter((item) => item.city === "Bekasi")}
          cities={["Bekasi", "Jakarta Selatan", "Depok"] as const}
          defaultCity="Bekasi"
          viewAllHref="/cari?lokasi=Bekasi"
        />

        <PropertyListingSection
          title="Kos yang lagi promo di"
          items={kosItems.filter((item) => Boolean(item.promoText))}
          cities={propertyCities}
          defaultCity="Semua Kota"
          viewAllHref="/kos"
        />

        <section className="border-t border-border bg-secondary py-16">
          <div className="mx-auto max-w-280 px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
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
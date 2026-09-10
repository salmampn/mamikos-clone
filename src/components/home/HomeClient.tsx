"use client";

import { useEffect, useRef, useState } from "react";

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
import { PopularAreasSection } from "./sections/PopularAreaSection";
import { NearbyCampusesSection } from "./sections/NearbyCampusSection";
import { AboutSection } from "./sections/AboutSection";

export function HomeClient() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNavSearch, setShowNavSearch] = useState(false);
  const topSearchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!topSearchRef.current) return;
      const rect = topSearchRef.current.getBoundingClientRect();
      // Total sticky header is ~112px (Topbar 40px + Navbar 72px)
      setShowNavSearch(rect.bottom <= 112);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        onOpenLogin={() => setIsLoginOpen(true)}
        showSearch={showNavSearch}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main>
        <div ref={topSearchRef}>
          <TopSearchSection
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        </div>

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

        <PopularAreasSection />

        <NearbyCampusesSection />

        <AboutSection />
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
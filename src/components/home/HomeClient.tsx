"use client";

import { useState } from "react";

import { TopSearchSection } from "@/components/home/TopSearchSection";
import { Header } from "@/components/layout/Header";
import { LocationSearchOverlay } from "@/components/overlays/SearchOverlay/LocationSearchOverlay";
import { LoginModal } from "@/components/overlays/LoginDialog/LoginModal";

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

        <section className="border-t border-border bg-secondary py-16">
          <div className="mx-auto max-w-[1120px] px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
            Section berikutnya akan ditambahkan di bawah Top Search Section.
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
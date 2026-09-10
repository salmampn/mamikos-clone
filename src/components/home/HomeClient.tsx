"use client";

import { useState } from "react";

import { TopSearchSection } from "@/components/home/TopSearchSection";
import { Header } from "@/components/layout/Header";
import { LoginModal } from "@/components/overlays/LoginModal";

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

      {isSearchOpen && (
        <div className="fixed inset-x-4 bottom-4 z-[60] rounded-lg border border-primary/20 bg-primary-soft p-4 text-sm text-brand-800 shadow-floating sm:left-auto sm:right-6 sm:w-[390px]">
          Location Search Overlay akan dibuat pada tahap berikutnya.
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="ml-3 font-bold text-primary hover:underline"
          >
            Tutup
          </button>
        </div>
      )}
    </>
  );
}
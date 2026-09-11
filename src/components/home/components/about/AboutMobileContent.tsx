"use client";

import { useState } from "react";

import { AboutAccordion } from "./AboutAccordion";
import { AboutFeatureList } from "./AboutFeatureList";
import {
  ABOUT_DESCRIPTION,
  ABOUT_TITLE,
  aboutFeatures,
} from "./about.constants";

export function AboutMobileContent() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <h2 className="text-center text-lg font-bold leading-snug text-primary">
        Mamikos - Aplikasi Anak Kos No. 1
        <br />
        di Indonesia
      </h2>

      <div className="mt-5">
        <AboutAccordion
          id="mobile-about-panel"
          title="Tentang Mamikos"
          isOpen={isAboutOpen}
          onToggle={() => setIsAboutOpen((previousValue) => !previousValue)}
          className="border-b border-border"
          buttonClassName="py-3.5 text-base font-bold text-foreground"
          contentClassName="pb-4"
        >
          <p className="text-sm leading-6 text-foreground">
            {ABOUT_DESCRIPTION}
          </p>
        </AboutAccordion>

        <AboutAccordion
          id="mobile-features-panel"
          title="Fitur yang dapat dimanfaatkan di Mamikos"
          isOpen={isFeaturesOpen}
          onToggle={() =>
            setIsFeaturesOpen((previousValue) => !previousValue)
          }
          className="border-b border-border"
          buttonClassName="py-3.5 text-base font-bold text-foreground"
          contentClassName="pb-4 pt-1"
        >
          <AboutFeatureList
            features={aboutFeatures}
            variant="mobile"
          />
        </AboutAccordion>
      </div>
    </div>
  );
}
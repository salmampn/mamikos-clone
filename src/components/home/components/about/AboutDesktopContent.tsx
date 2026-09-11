"use client";

import { useState } from "react";

import { AboutAccordion } from "./AboutAccordion";
import { AboutFeatureList } from "./AboutFeatureList";
import {
  ABOUT_DESCRIPTION,
  ABOUT_TITLE,
  aboutFeatures,
} from "./about.constants";

export function AboutDesktopContent() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const toggleFeatures = () => {
    setIsFeaturesOpen((previousValue) => !previousValue);
  };

  return (
    <div className="hidden sm:block">
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-heading"
          className="text-center text-xl font-bold text-foreground"
        >
          {ABOUT_TITLE}
        </h2>

        <p className="mt-4 text-start text-base leading-7 text-foreground">
          {ABOUT_DESCRIPTION}
        </p>
      </div>

      {/* sm hingga < md: pertahankan layout sebelumnya */}
      <div className="mx-auto mt-8 max-w-6xl md:hidden">
        <AboutAccordion
          id="about-features-panel-sm"
          title="Fitur yang dapat dimanfaatkan di Mamikos"
          isOpen={isFeaturesOpen}
          onToggle={toggleFeatures}
          align="center"
          buttonClassName="mx-auto text-xl font-semibold text-foreground"
          contentClassName="mt-6 text-start"
        >
          <AboutFeatureList
            features={aboutFeatures}
            variant="desktop"
            className="text-start"
          />
        </AboutAccordion>
      </div>

      {/* md+: trigger centered, feature content stays text-start */}
      <div className="mt-8 hidden md:block">
        <div className="flex justify-center">
          <AboutAccordion
            id="about-features-panel-md"
            title="Fitur yang dapat dimanfaatkan di Mamikos"
            isOpen={isFeaturesOpen}
            onToggle={toggleFeatures}
            align="center"
            hideContent
            buttonClassName="text-xl font-semibold text-foreground"
          />
        </div>

        {isFeaturesOpen && (
          <div
            id="about-features-panel-md"
            className="mx-auto mt-6 max-w-6xl text-start"
          >
            <AboutFeatureList
              features={aboutFeatures}
              variant="desktop"
              className="text-start"
            />
          </div>
        )}
      </div>
    </div>
  );
}
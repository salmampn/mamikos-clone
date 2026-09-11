import type { AboutFeatureItem } from "./about.types";

import { cn } from "@/lib/utils";

type AboutFeatureListProps = {
  features: AboutFeatureItem[];
  variant?: "mobile" | "desktop";
  className?: string;
};

export function AboutFeatureList({
  features,
  variant = "desktop",
  className,
}: AboutFeatureListProps) {
  const isMobile = variant === "mobile";

  return (
    <ol
      className={cn(
        "text-start",
        isMobile ? "space-y-4" : "space-y-5",
        className,
      )}
    >
      {features.map((feature) => (
        <li
          key={feature.label}
          className={cn(
            "flex",
            isMobile ? "gap-3" : "gap-4",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "w-4 shrink-0 font-semibold text-foreground",
              isMobile ? "text-sm" : "text-base",
            )}
          >
            {feature.label}.
          </span>

          <div className="text-start">
            <h3
              className={cn(
                "font-bold text-foreground",
                isMobile ? "text-sm" : "text-base",
              )}
            >
              {feature.title}
            </h3>

            <p
              className={cn(
                "mt-1 text-foreground",
                isMobile
                  ? "text-sm leading-6"
                  : "text-base leading-6",
              )}
            >
              {feature.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
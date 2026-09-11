import Link from "next/link";

import { CountdownBadge } from "./CountdownBadge";
import { ListingActions } from "./ListingActions";

import { PropertyCityDropdown } from "@/components/home/components/PropertyCityDropdown";

type PropertyListingHeaderProps = {
  title: string;
  mobileTitle?: string;
  selectedCity: string;
  cities: readonly string[];
  onCityChange: (city: string) => void;
  viewAllHref: string;
  showCountdown: boolean;
  learnMoreHref?: string;
  onPrevious: () => void;
  onNext: () => void;
  canScrollPrevious: boolean;
  canScrollNext: boolean;
};

const PROMO_END_DATE = new Date("2026-09-24T23:59:59+07:00");

export function PropertyListingHeader({
  title,
  mobileTitle,
  selectedCity,
  cities,
  onCityChange,
  viewAllHref,
  showCountdown,
  learnMoreHref,
  onPrevious,
  onNext,
  canScrollPrevious,
  canScrollNext,
}: PropertyListingHeaderProps) {
  const actions = {
    viewAllHref,
    title,
    onPrevious,
    onNext,
    canScrollPrevious,
    canScrollNext,
  };

  return (
    <>
      <MobileHeader
        title={title}
        mobileTitle={mobileTitle}
        selectedCity={selectedCity}
        cities={cities}
        onCityChange={onCityChange}
        showCountdown={showCountdown}
        learnMoreHref={learnMoreHref}
        viewAllHref={viewAllHref}
      />

      <TabletHeader
        title={title}
        selectedCity={selectedCity}
        cities={cities}
        onCityChange={onCityChange}
        showCountdown={showCountdown}
        actions={actions}
      />

      <DesktopHeader
        title={title}
        selectedCity={selectedCity}
        cities={cities}
        onCityChange={onCityChange}
        showCountdown={showCountdown}
        actions={actions}
      />
    </>
  );
}

type CommonHeaderProps = {
  title: string;
  selectedCity: string;
  cities: readonly string[];
  onCityChange: (city: string) => void;
  showCountdown: boolean;
};

type ActionsProps = {
  viewAllHref: string;
  title: string;
  onPrevious: () => void;
  onNext: () => void;
  canScrollPrevious: boolean;
  canScrollNext: boolean;
};

type MobileHeaderProps = CommonHeaderProps & {
  mobileTitle?: string;
  learnMoreHref?: string;
  viewAllHref: string;
};

function MobileHeader({
  title,
  mobileTitle,
  selectedCity,
  cities,
  onCityChange,
  showCountdown,
  learnMoreHref,
  viewAllHref,
}: MobileHeaderProps) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <h2 className="min-w-0 text-xl font-bold leading-tight text-foreground">
          {mobileTitle ?? title.replace(/\s+di$/i, "")}
        </h2>

        {(showCountdown || learnMoreHref) && (
          <Link
            href={learnMoreHref ?? viewAllHref}
            className="shrink-0 text-sm font-bold text-primary outline-none transition-colors hover:text-primary-hover hover:underline focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
          >
            Pelajari
          </Link>
        )}
      </div>

      <PropertyCityDropdown
        value={selectedCity}
        cities={cities}
        onValueChange={onCityChange}
        variant="boxed"
      />

      {showCountdown && (
        <CountdownBadge
          endAt={PROMO_END_DATE}
          variant="mobile"
        />
      )}
    </div>
  );
}

type TabletHeaderProps = CommonHeaderProps & {
  actions: ActionsProps;
};

function TabletHeader({
  title,
  selectedCity,
  cities,
  onCityChange,
  showCountdown,
  actions,
}: TabletHeaderProps) {
  return (
    <div className="mb-5 hidden flex-col gap-3 sm:flex md:mb-2 lg:hidden md:gap-4 lg:mb-6 lg:gap-5">
      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2">
        <div className="flex flex-wrap items-center gap-x-2">
          <h2 className="text-lg font-bold leading-tight text-foreground md:text-xl">
            {title}
          </h2>

          <PropertyCityDropdown
            value={selectedCity}
            cities={cities}
            onValueChange={onCityChange}
            variant="inline"
          />
        </div>

        <ListingActions {...actions} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        {showCountdown ? (
          <CountdownBadge
            endAt={PROMO_END_DATE}
            variant="desktop"
          />
        ) : (
          <span />
        )}

      </div>
    </div>
  );
}

type DesktopHeaderProps = CommonHeaderProps & {
  actions: ActionsProps;
};

function DesktopHeader({
  title,
  selectedCity,
  cities,
  onCityChange,
  showCountdown,
  actions,
}: DesktopHeaderProps) {
  return (
    <div className="mb-6 hidden items-center gap-5 lg:flex">
      <div className="flex shrink-0 items-center gap-2">
        <h2 className="whitespace-nowrap text-2xl font-bold leading-tight text-foreground">
          {title}
        </h2>

        <PropertyCityDropdown
          value={selectedCity}
          cities={cities}
          onValueChange={onCityChange}
          variant="inline"
        />
      </div>

      {showCountdown ? (
        <CountdownBadge
          endAt={PROMO_END_DATE}
          variant="desktop"
          className="min-w-0 flex-1 justify-center whitespace-nowrap"
        />
      ) : (
        <div className="flex-1" />
      )}

      <ListingActions {...actions} />
    </div>
  );
}
"use client";

import {
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import {
  FiArrowLeft,
  FiChevronDown,
  FiCrosshair,
  FiMapPin,
  FiSearch,
  FiX,
} from "react-icons/fi";

import {
  cityLocationGroups,
  popularAreaSearches,
  popularCampuses,
  popularStations,
  searchTabs,
} from "@/data/locations";
import { IconButton } from "@/components/shared/IconButton";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type LocationSearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LocationSearchOverlay({
  isOpen,
  onClose,
}: LocationSearchOverlayProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("kampus");

  useEffect(() => {
    if (!isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      setActiveTab("kampus");
      return;
    }

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 150);

    return () => {
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const navigateToSearch = (location: string) => {
    const normalizedLocation = location.trim();

    if (!normalizedLocation) {
      return;
    }

    onClose();

    router.push(
      `/cari?lokasi=${encodeURIComponent(normalizedLocation)}`,
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigateToSearch(query);
  };

  const handleClearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={handleOpenChange}
    >
      <DialogContent
        showCloseButton={false}
        className={cn(
          "fixed inset-0 z-101 h-dvh w-full max-w-none translate-x-0 translate-y-0 overflow-hidden rounded-none border-0 bg-background p-0 shadow-none",
          "box-border px-2",
          "sm:inset-0 sm:h-dvh sm:w-full sm:max-w-none sm:translate-x-0 sm:translate-y-0 sm:rounded-none sm:border-0 sm:p-0 sm:px-4",
          "md:inset-0 md:h-dvh md:w-full md:max-w-none md:translate-x-0 md:translate-y-0 md:rounded-none md:border-0 md:p-0 md:px-8",
          "lg:inset-0 lg:h-dvh lg:w-full lg:max-w-none lg:translate-x-0 lg:translate-y-0 lg:rounded-none lg:border-0 lg:p-0 lg:px-124",
        )}
      >
        <DialogTitle className="sr-only">
          Cari lokasi kos
        </DialogTitle>

        <div className="flex h-full min-h-0 w-full flex-col">
          {/* Mobile / tablet header */}
          <header className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3 sm:px-8 md:px-12">
            <IconButton
              label="Kembali ke halaman utama"
              variant="ghost"
              onClick={onClose}
              className="size-10 rounded-md"
            >
              <FiArrowLeft
                size={22}
                aria-hidden="true"
              />
            </IconButton>

            <h2 className="text-base font-bold text-foreground sm:text-lg">
              Cari lokasi
            </h2>

            <IconButton
              label="Tutup pencarian"
              variant="ghost"
              onClick={onClose}
              className="size-10 rounded-md"
            >
              <FiX
                size={22}
                aria-hidden="true"
              />
            </IconButton>
          </header>

          <div className="mx-auto flex h-full min-h-0 w-full flex-1 px-4 py-5 sm:px-8 sm:py-6 md:px-12 md:py-8">
            <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden">
              <form
                onSubmit={handleSubmit}
                className="shrink-0"
              >
                <label
                  htmlFor="location-search"
                  className="sr-only"
                >
                  Masukkan nama lokasi, area, atau alamat
                </label>

                <div className="flex h-12 items-center rounded-md border border-input bg-card transition-colors focus-within:border-primary focus-within:ring-4 focus-within:ring-ring/20">
                  <FiSearch
                    size={20}
                    aria-hidden="true"
                    className="ml-4 shrink-0 text-muted-foreground"
                  />

                  <input
                    ref={inputRef}
                    id="location-search"
                    type="search"
                    value={query}
                    onChange={(event) =>
                      setQuery(event.target.value)
                    }
                    placeholder="Coba Tebet Jakarta Selatan"
                    className="h-full min-w-0 flex-1 appearance-none bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
                  />

                  {query ? (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      aria-label="Hapus kata pencarian"
                      className="mr-2 grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-4 focus-visible:ring-ring/20"
                    >
                      <FiX
                        size={18}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="mr-1.5 shrink-0 rounded bg-primary px-3 py-2 text-xs font-bold text-primary-foreground outline-none transition-colors hover:bg-primary-hover focus-visible:ring-4 focus-visible:ring-ring/20 sm:px-4 sm:text-sm"
                    >
                      Cari
                    </button>
                  )}
                </div>
              </form>

              <button
                type="button"
                onClick={() => navigateToSearch("Lokasi Saya")}
                className="mt-5 flex w-full shrink-0 items-center gap-3 border-b border-border pb-4 text-left text-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-md focus-visible:ring-4 focus-visible:ring-ring/20 sm:mt-6 sm:gap-4 sm:pb-5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-md border border-border bg-transparent text-foreground sm:size-12">
                  <FiCrosshair
                    aria-hidden="true"
                    className="size-5 sm:size-6"
                  />
                </span>

                <span className="text-sm font-bold sm:text-base">
                  Cari di lokasi sekitar saya
                </span>
              </button>

              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="mt-1 flex min-h-0 w-full flex-1 flex-col overflow-hidden"
              >
                {/* Horizontal scrolling is limited to the tab row only */}
                <div className="shrink-0 overflow-x-auto">
                  <TabsList className="flex h-auto min-w-max justify-start gap-2 rounded-none border-b border-border bg-transparent p-0 sm:min-w-0 sm:gap-7">
                    {searchTabs.map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className={cn(
                          "relative h-auto flex-none rounded-none border-b-2 border-transparent px-3 py-3 text-sm font-bold text-muted-foreground outline-none transition-colors",
                          "hover:text-primary focus-visible:ring-4 focus-visible:ring-ring/20",
                          "data-active:border-b-primary",
                        )}
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {/* This is the only vertical scroll container */}
                <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto pr-1">
                  <TabsContent
                    value="kampus"
                    className="mt-0 w-full"
                  >
                    <LocationContent
                      title="Pencarian Populer"
                      chips={popularCampuses}
                      onSelectLocation={navigateToSearch}
                      cityGroups={cityLocationGroups}
                      cityTitle="Kampus berdasarkan kota"
                    />
                  </TabsContent>

                  <TabsContent
                    value="area"
                    className="mt-0 w-full"
                  >
                    <LocationContent
                      title="Area Populer"
                      chips={popularAreaSearches}
                      onSelectLocation={navigateToSearch}
                      cityGroups={cityLocationGroups}
                      cityTitle="Area berdasarkan kota"
                    />
                  </TabsContent>

                  <TabsContent
                    value="stasiun"
                    className="mt-0 w-full"
                  >
                    <LocationContent
                      title="Stasiun & Halte Populer"
                      chips={popularStations}
                      onSelectLocation={navigateToSearch}
                      cityGroups={cityLocationGroups}
                      cityTitle="Stasiun & halte berdasarkan kota"
                    />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

type LocationContentProps = {
  title: string;
  chips: string[];
  onSelectLocation: (location: string) => void;
  cityGroups: typeof cityLocationGroups;
  cityTitle: string;
};

function LocationContent({
  title,
  chips,
  onSelectLocation,
  cityGroups,
  cityTitle,
}: LocationContentProps) {
  const [openCity, setOpenCity] = useState<string | null>(null);

  return (
    <section className="w-full py-5">
      <h2 className="text-sm font-bold text-foreground">
        {title}
      </h2>

      <div className="mt-3 flex flex-wrap gap-2 sm:gap-3">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => onSelectLocation(chip)}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground outline-none transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary focus-visible:ring-4 focus-visible:ring-ring/20 sm:px-4 sm:py-2 sm:text-sm"
          >
            {chip}
          </button>
        ))}
      </div>

      <h2 className="mt-6 text-sm font-bold text-foreground">
        {cityTitle}
      </h2>

      <div className="mt-3 w-full">
        {cityGroups.map((group) => {
          const isOpen = openCity === group.city;

          return (
            <div
              key={group.city}
              className="border-b border-border"
            >
              <button
                type="button"
                onClick={() => {
                  setOpenCity((currentCity) =>
                    currentCity === group.city
                      ? null
                      : group.city,
                  );
                }}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-4 text-left text-base font-bold text-foreground outline-none transition-colors hover:text-primary focus-visible:ring-4 focus-visible:ring-ring/20 sm:py-5 sm:text-lg"
              >
                <span>{group.city}</span>

                <FiChevronDown
                  size={20}
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              {isOpen && (
                <div className="flex flex-col gap-1 pb-4 sm:gap-2 sm:pb-5">
                  {group.locations.map((location) => (
                    <button
                      key={location}
                      type="button"
                      onClick={() => onSelectLocation(location)}
                      className="rounded-md px-2 py-3 text-left text-sm font-bold text-foreground outline-none transition-colors hover:bg-primary-soft hover:text-primary focus-visible:ring-4 focus-visible:ring-ring/20 sm:px-3 sm:py-4 sm:text-lg"
                    >
                      <span className="flex items-center gap-3 sm:gap-5">
                        <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border bg-card sm:size-11">
                          <FiMapPin
                            aria-hidden="true"
                            className="size-5 sm:size-6"
                          />
                        </span>

                        <span className="min-w-0 text-start">
                          {location}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
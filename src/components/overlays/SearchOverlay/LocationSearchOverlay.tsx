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

    return () => window.clearTimeout(focusTimer);
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
    router.push(`/cari?lokasi=${encodeURIComponent(normalizedLocation)}`);
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
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="fixed inset-0 z-[101] flex h-dvh max-h-none w-screen max-w-none translate-x-0 translate-y-0 items-center justify-center overflow-hidden rounded-none border-0 bg-background p-4 shadow-none sm:max-w-none sm:p-6"
      >
        <div className="flex w-full max-w-[920px] min-w-0 gap-4 sm:h-[min(860px,calc(100dvh-3rem))] sm:gap-6">
          <div className="shrink-0 pt-0.5">
            <IconButton
              label="Kem
               ke halaman utama"
              variant="ghost"
              onClick={onClose}
              className="size-10 rounded-md"
            >
              <FiArrowLeft size={25} aria-hidden="true" />
            </IconButton>
          </div>

          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <DialogTitle className="sr-only">
              Cari lokasi kos
            </DialogTitle>

            <form onSubmit={handleSubmit} className="shrink-0">
              <label htmlFor="location-search" className="sr-only">
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
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Coba Tebet Jakarta Selatan"
                  className="h-full min-w-0 flex-1 appearance-none bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
                />

                {query && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    aria-label="Hapus kata pencarian"
                    className="mr-2 grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
                  >
                    <FiX size={18} aria-hidden="true" />
                  </button>
                )}
              </div>
            </form>

            <button
              type="button"
              onClick={() => navigateToSearch("Lokasi Saya")}
              className="mt-6 flex w-full shrink-0 items-center gap-4 border-b border-border pb-5 text-left text-foreground transition-colors hover:text-primary focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-md border border-border bg-secondary text-foreground">
                <FiCrosshair size={22} aria-hidden="true" />
              </span>

              <span className="text-sm font-bold">
                Cari di lokasi sekitar saya
              </span>
            </button>

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="mt-1 flex min-h-0 w-full flex-1 flex-col overflow-hidden"
            >
              <TabsList className="flex h-auto w-full justify-start gap-7 rounded-none border-b border-border bg-transparent p-0">
                {searchTabs.map((tab) => (
                    <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={cn(
                        "relative h-auto flex-none rounded-none border-b-2 px-4 py-4 text-sm font-bold ",
                        "data-active:border-b-primary",
                    )}
                    >
                    {tab.label}
                    </TabsTrigger>
                ))}
              </TabsList>

              <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto pr-1">
                <TabsContent value="kampus" className="mt-0 w-full">
                  <LocationContent
                    title="Pencarian Populer"
                    chips={popularCampuses}
                    onSelectLocation={navigateToSearch}
                    cityGroups={cityLocationGroups}
                    cityTitle="Kampus berdasarkan kota"
                  />
                </TabsContent>

                <TabsContent value="area" className="mt-0 w-full">
                  <LocationContent
                    title="Area Populer"
                    chips={popularAreaSearches}
                    onSelectLocation={navigateToSearch}
                    cityGroups={cityLocationGroups}
                    cityTitle="Area berdasarkan kota"
                  />
                </TabsContent>

                <TabsContent value="stasiun" className="mt-0 w-full">
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

      <div className="mt-3 flex flex-wrap gap-3">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => onSelectLocation(chip)}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
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
            <div key={group.city} className="border-b border-border">
              <button
                type="button"
                onClick={() =>
                  setOpenCity((currentCity) =>
                    currentCity === group.city
                      ? null
                      : group.city,
                  )
                }
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-5 text-left text-lg font-bold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
              >
                <span>{group.city}</span>

                <FiChevronDown
                  size={20}
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 transition-transform duration-normal",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              {isOpen && (
                <div className="flex flex-col gap-2 pb-5">
                  {group.locations.map((location) => (
                    <button
                      key={location}
                      type="button"
                      onClick={() =>
                        onSelectLocation(location)
                      }
                      className="rounded-sm px-3 py-4 text-lg font-bold text-foreground transition-colors hover:bg-primary-soft hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
                    >
                      <div className="flex items-center gap-8">
                        <div className="shrink-0 border p-2">
                          <FiMapPin size={24} />
                        </div>
                        <span className="">{location}</span>
                      </div>
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
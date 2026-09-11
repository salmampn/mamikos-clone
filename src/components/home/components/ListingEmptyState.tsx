type ListingEmptyStateProps = {
  city: string;
};

export function ListingEmptyState({
  city,
}: ListingEmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-secondary px-6 py-12 text-center">
      <p className="text-sm font-bold text-foreground">
        Belum ada kos tersedia di {city}.
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        Coba pilih kota lain untuk melihat rekomendasi kos.
      </p>
    </div>
  );
}
import type { ReactNode } from "react";
import { FiX } from "react-icons/fi";
import { HiOutlineHomeModern } from "react-icons/hi2";

import {
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type LoginSelectionModalProps = {
  onClose: () => void;
  onSelectTenant: () => void;
  onSelectOwner: () => void;
};

export function LoginSelectionModal({
  onClose,
  onSelectTenant,
  onSelectOwner,
}: LoginSelectionModalProps) {
  return (
    <div className="relative px-6 py-8 sm:px-10 sm:py-12">
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup modal masuk"
        className="absolute right-4 top-4 grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20 sm:right-6 sm:top-6"
      >
        <FiX size={26} aria-hidden="true" />
      </button>

      <DialogTitle className="pr-12 text-2xl font-bold leading-tight text-foreground sm:text-[26px]">
        Masuk ke Mamikos
      </DialogTitle>

      <DialogDescription className="mt-5 text-sm text-muted-foreground">
        Saya ingin masuk sebagai
      </DialogDescription>

      <div className="mt-5 space-y-4">
        <RoleSelectionCard
          title="Pencari Kos"
          description="Cari, bandingkan, dan sewa kos pilihanmu."
          onClick={onSelectTenant}
          icon={
            <span className="grid size-12 place-items-center rounded-lg bg-brand-50 text-primary">
              <HiOutlineHomeModern size={30} aria-hidden="true" />
            </span>
          }
        />

        <RoleSelectionCard
          title="Pemilik Kos"
          description="Kelola dan promosikan properti kos Anda."
          onClick={onSelectOwner}
          icon={
            <span className="grid size-12 place-items-center rounded-lg bg-primary-soft text-primary">
              <HiOutlineHomeModern size={30} aria-hidden="true" />
            </span>
          }
        />
      </div>
    </div>
  );
}

type RoleSelectionCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
};

function RoleSelectionCard({
  title,
  description,
  icon,
  onClick,
}: RoleSelectionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-5 rounded-md border border-border bg-card px-5 py-5 text-left shadow-card transition-all duration-normal ease-standard hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20"
    >
      {icon}

      <span className="min-w-0">
        <span className="block text-base font-bold text-foreground">
          {title}
        </span>

        <span className="mt-1 block text-sm leading-5 text-muted-foreground">
          {description}
        </span>
      </span>
    </button>
  );
}
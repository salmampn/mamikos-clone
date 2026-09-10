"use client";

import { useEffect, useState } from "react";

import { LoginSelectionModal } from "@/components/overlays/LoginSelectionModal";
import { OwnerLoginModal } from "@/components/overlays/OwnerLoginModal";
import { TenantLoginModal } from "@/components/overlays/TenantLoginModal";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type LoginView = "selection" | "tenant" | "owner";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LoginModal({
  isOpen,
  onClose,
}: LoginModalProps) {
  const [view, setView] = useState<LoginView>("selection");

  useEffect(() => {
    if (!isOpen) {
      setView("selection");
    }
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent
        showCloseButton={false}
        className={cn(
          "max-h-[calc(100dvh-2rem)] overflow-y-auto border-border bg-card p-0 shadow-floating",
          view === "selection"
            ? "sm:!max-w-[720px]"
            : "sm:!max-w-[390px]",
        )}
      >
        {view === "selection" && (
          <LoginSelectionModal
            onClose={onClose}
            onSelectTenant={() => setView("tenant")}
            onSelectOwner={() => setView("owner")}
          />
        )}

        {view === "tenant" && (
          <TenantLoginModal
            onBack={() => setView("selection")}
            onClose={onClose}
          />
        )}

        {view === "owner" && (
          <OwnerLoginModal
            onBack={() => setView("selection")}
            onClose={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
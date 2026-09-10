import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SocialLoginButtonProps = {
  label: string;
  icon: ReactNode;
  onClick: () => void;
  variant?: "default" | "apple";
};

export function SocialLoginButton({
  label,
  icon,
  onClick,
  variant = "default",
}: SocialLoginButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-12 w-full items-center justify-center gap-3 rounded-sm border text-base font-bold transition-colors",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/20",
        variant === "apple"
          ? "border-black bg-black text-white hover:bg-black/85"
          : "border-input bg-background text-foreground hover:bg-muted",
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
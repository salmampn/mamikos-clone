import type { ButtonHTMLAttributes, ReactNode } from "react";

import { AppButton } from "@/components/shared/AppButton";
import { cn } from "@/lib/utils";

type IconButtonVariant = "ghost" | "outline" | "primary";

type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  label: string;
  children: ReactNode;
  variant?: IconButtonVariant;
  size?: "sm" | "md" | "lg";
};

const sizeClassNames = {
  sm: "size-8 rounded-full",
  md: "size-10 rounded-full",
  lg: "size-12 rounded-full",
};

export function IconButton({
  label,
  children,
  className,
  variant = "ghost",
  size = "md",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <AppButton
      type={type}
      variant={variant}
      size="icon"
      className={cn(
        "shrink-0 p-0",
        sizeClassNames[size],
        className,
      )}
      aria-label={label}
      {...props}
    >
      {children}
    </AppButton>
  );
}
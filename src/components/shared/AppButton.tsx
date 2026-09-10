import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AppButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "danger"
  | "search";

type AppButtonSize = "sm" | "md" | "lg" | "icon";

type AppButtonProps = Omit<ButtonProps, "variant" | "size"> & {
  variant?: AppButtonVariant;
  size?: AppButtonSize;
};

const variantClassNames: Record<AppButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-none hover:bg-primary-hover hover:shadow-none",
  outline:
    "border border-primary bg-background text-primary shadow-none hover:bg-primary-soft hover:text-primary",
  ghost:
    "bg-transparent text-foreground shadow-none hover:bg-muted hover:text-foreground",
  danger:
    "bg-destructive text-destructive-foreground shadow-none hover:bg-destructive/90",
  search:
    "bg-primary text-primary-foreground shadow-none hover:bg-primary-hover",
};

const sizeClassNames: Record<AppButtonSize, string> = {
  sm: "h-8 rounded-sm px-3 text-xs",
  md: "h-10 rounded-md px-4 text-sm",
  lg: "h-12 rounded-md px-6 text-sm",
  icon: "size-10 rounded-md p-0",
};

export const AppButton = React.forwardRef<
  HTMLButtonElement,
  AppButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all duration-normal ease-standard",
          "focus-visible:ring-4 focus-visible:ring-ring/20",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClassNames[variant],
          sizeClassNames[size],
          className,
        )}
        {...props}
      />
    );
  },
);

AppButton.displayName = "AppButton";
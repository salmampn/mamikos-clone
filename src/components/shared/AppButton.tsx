import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type AppButtonVariant =
  | "default"
  | "outline"
  | "ghost"
  | "destructive";

type AppButtonSize =
  | "sm"
  | "md"
  | "lg"
  | "icon";

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: AppButtonVariant;
  size?: AppButtonSize;
};

const buttonVariants: Record<AppButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary-hover",
  outline:
    "border border-primary bg-background text-primary hover:bg-primary-soft",
  ghost:
    "bg-transparent text-foreground hover:bg-muted",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

const buttonSizes: Record<AppButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "size-10",
};

export function AppButton({
  children,
  type = "button",
  variant = "default",
  size = "md",
  className,
  disabled,
  ...props
}: AppButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-md font-bold outline-none transition-colors",
        "focus-visible:ring-4 focus-visible:ring-ring/20",
        "disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
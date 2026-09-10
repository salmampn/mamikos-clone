import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  hideText?: boolean;
  hideTextOnDesktop?: boolean;
};

export function Logo({
  className,
  hideText = false,
  hideTextOnDesktop = false,
}: LogoProps) {
  const isTextHiddenOnAll = hideText;
  const isTextHiddenOnDesktopOnly = !hideText && hideTextOnDesktop;

  return (
    <Link
      href="/"
      aria-label="Mamikos Clone, kembali ke halaman utama"
      className={cn(
        "inline-flex shrink-0 items-center text-primary transition-opacity hover:opacity-85",
        className,
      )}
    >
      <Image
        src="/icon.png"
        alt="Mamikos Logo"
        width={100}
        height={100}
        className={cn(
          "w-auto object-contain",
          !isTextHiddenOnAll && (isTextHiddenOnDesktopOnly ? "mr-2 lg:mr-0" : "mr-2"),
          className
        )}
      />

      {!isTextHiddenOnAll && (
        <span
          className={cn(
            isTextHiddenOnDesktopOnly ? "inline lg:hidden" : "inline"
          )}
        >
          <span className={cn("font-black tracking-[-0.04em]", className)}>
            mamikos
          </span>
        </span>
      )}
    </Link>
  );
}
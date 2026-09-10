import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  hideText?: boolean;
};

export function Logo({
  className,
  hideText = false,
}: LogoProps) {
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
        className={cn("w-auto object-contain", !hideText && "mr-2", className)}
      />

      {!hideText && (
        <span className="">
          <span className={cn("font-black tracking-[-0.04em]", className)}>
            mamikos
          </span>
        </span>
      )}
    </Link>
  );
}
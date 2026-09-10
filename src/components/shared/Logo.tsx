import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
};

export function Logo({
  className,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Mamikos Clone, kembali ke halaman utama"
      className={cn(
        "inline-flex items-center text-primary transition-opacity hover:opacity-85",
        className,
      )}
    >
        <Image
          src="/icon.png"
          alt="Mamikos Logo"
          width={200}
          height={200}
          className="h-14 w-auto object-contain"
        />

      <span className="">
        <span className="text-xl font-black tracking-[-0.04em]">
          mamikos
        </span>

      </span>
    </Link>
  );
}
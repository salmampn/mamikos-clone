import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

import { Container } from "@/components/shared/Container";

const mamikosLinks = [
  {
    label: "Tentang Kami",
    href: "/tentang-kami",
  },
  {
    label: "Job Mamikos",
    href: "/karier",
  },
  {
    label: "Promosikan Kost Anda",
    href: "/promosi-kost",
  },
  {
    label: "Pusat Bantuan",
    href: "/bantuan",
  },
  {
    label: "Blog Mamikos",
    href: "/blog",
  },
] as const;

const policyLinks = [
  {
    label: "Kebijakan Privasi",
    href: "/kebijakan-privasi",
  },
  {
    label: "Syarat dan Ketentuan Umum",
    href: "/syarat-ketentuan-umum",
  },
] as const;

const linkClassName =
  "text-sm text-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20";

const socialLinkClassName =
  "text-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:justify-between lg:gap-12 lg:py-14">
          <div className="shrink-0">
            <Link
              href="/"
              aria-label="Mamikos, kembali ke halaman utama"
              className="inline-block outline-none transition-opacity hover:opacity-85 focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
            >
              <Image
                src="/logo/logo-mamikos.svg"
                alt="Mamikos"
                width={136}
                height={32}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground sm:text-base">
              Dapatkan &quot;info kost murah&quot; hanya di MamiKos App.
              <br />
              Mau &quot;Sewa Kost Murah&quot;?
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <AppStoreLinks />
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:flex-1 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-8 lg:gap-12">
            <FooterMamikosNavigation />

            <FooterPolicyNavigation />

            <FooterContactNavigation />
          </div>
        </div>

        <div className="border-t border-border py-6 lg:flex md:items-center md:justify-between md:py-8">
          <Image
            src="/logo/iso-certificate-v2.svg"
            alt="ISO Certificate"
            width={80}
            height={80}
            className="h-12 w-auto"
          />

          <p className="mt-4 text-sm text-foreground lg:mt-0">
            © {currentYear} Mamikos.com. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}

function AppStoreLinks() {
  return (
    <>
      <a
        href="https://play.google.com/store/apps/details?id=com.git.mami.kos&utm_campaign=DAppAndroFooter&utm_source=DownloadAppFooter&utm_medium=DownloadAppFooter&utm_term=DownloadAppFooter"
        target="_blank"
        rel="noreferrer"
        aria-label="Dapatkan aplikasi Mamikos di Google Play"
        className="outline-none transition-opacity hover:opacity-90 focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
      >
        <Image
          src="/logo/get-it-on-playstore.svg"
          alt="Dapatkan di Google Play"
          width={135}
          height={40}
          className="h-10 w-auto"
        />
      </a>

      <a
        href="https://apps.apple.com/id/app/mamikos-cari-sewa-kos-mudah/id1055272843"
        target="_blank"
        rel="noreferrer"
        aria-label="Download aplikasi Mamikos di App Store"
        className="outline-none transition-opacity hover:opacity-90 focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
      >
        <Image
          src="/logo/get-it-on-appstore.svg"
          alt="Download di App Store"
          width={124}
          height={40}
          className="h-10 w-auto"
        />
      </a>
    </>
  );
}

function FooterMamikosNavigation() {
  return (
    <nav aria-label="Mamikos">
      <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
        MAMIKOS
      </h2>

      <ul className="mt-4 space-y-4">
        {mamikosLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={linkClassName}
            >
              {item.label}
            </Link>
          </li>
        ))}

        <li>
          <a
            href="https://www.singgahsini.com"
            target="_blank"
            rel="noreferrer"
            className={linkClassName}
          >
            Singgahsini
          </a>
        </li>
      </ul>
    </nav>
  );
}

function FooterPolicyNavigation() {
  return (
    <nav aria-label="Kebijakan">
      <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
        KEBIJAKAN
      </h2>

      <ul className="mt-4 space-y-4">
        {policyLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={linkClassName}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterContactNavigation() {
  return (
    <nav aria-label="Hubungi Kami">
      <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
        HUBUNGI KAMI
      </h2>

      <ul className="mt-4 space-y-4">
        <li>
          <a
            href="https://mamikos.com/tentang-kami?opencomplaintform=1"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
          >
            <MdOutlineMail
              aria-hidden="true"
              className="size-4 shrink-0"
            />

            <span>cs@mamikos.com</span>
          </a>
        </li>

        <li>
          <a
            href="https://wa.me/6281325111171"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
          >
            <FaWhatsapp
              aria-hidden="true"
              className="size-4 shrink-0"
            />

            <span>+6281325111171</span>
          </a>
        </li>

        <li className="pt-1">
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/mamikosapp"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Mamikos"
              className={socialLinkClassName}
            >
              <FaSquareFacebook
                aria-hidden="true"
                className="size-5"
              />
            </a>

            <a
              href="https://x.com/mamikosapp"
              target="_blank"
              rel="noreferrer"
              aria-label="X Mamikos"
              className={socialLinkClassName}
            >
              <FaXTwitter
                aria-hidden="true"
                className="size-5"
              />
            </a>

            <a
              href="https://instagram.com/mamikosapp"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Mamikos"
              className={socialLinkClassName}
            >
              <FaInstagram
                aria-hidden="true"
                className="size-5"
              />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
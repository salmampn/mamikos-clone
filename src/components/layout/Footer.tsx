import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

import { Container } from "@/components/shared/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:justify-between lg:gap-12 lg:py-14">
          {/* Left: Brand info & App Download */}
          <div className="w-full shrink-0 sm:max-w-xs">
            <Link
              href="/"
              aria-label="Mamikos, kembali ke halaman utama"
              className="inline-block transition-opacity hover:opacity-85"
            >
              <Image
                src="/logo/logo-mamikos.svg"
                alt="Mamikos"
                width={136}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-foreground">
              Dapatkan &quot;info kost murah&quot; hanya di MamiKos App.
              <br />
              Mau &quot;Sewa Kost Murah&quot;?
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <Link
                href="https://play.google.com/store/apps/details?id=com.git.mami.kos&utm_campaign=DAppAndroFooter&utm_source=DownloadAppFooter&utm_medium=DownloadAppFooter&utm_term=DownloadAppFooter"
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-90"
              >
                <Image
                  src="/logo/get-it-on-playstore.svg"
                  alt="Dapatkan di Google Play"
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link
                href="https://apps.apple.com/id/app/mamikos-cari-sewa-kos-mudah/id1055272843"
                target="_blank"
                rel="noreferrer"
                className="transition-opacity hover:opacity-90"
              >
                <Image
                  src="/logo/get-it-on-appstore.svg"
                  alt="Download di App Store"
                  width={124}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Right: Navigation columns */}
          <div className="flex flex-1 flex-wrap justify-between gap-8 sm:gap-10 lg:gap-12">
            {/* MAMIKOS */}
            <nav aria-label="Mamikos">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                MAMIKOS
              </h2>
              <div className="mt-5 flex gap-8 sm:gap-12">
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/tentang-kami"
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/karier"
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      Job Mamikos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/promosi-kost"
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      Promosikan Kost Anda
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bantuan"
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      Pusat Bantuan
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/blog"
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      Blog Mamikos
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.singgahsini.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-foreground transition-colors hover:text-primary"
                    >
                      Singgahsini
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* KEBIJAKAN */}
            <nav aria-label="Kebijakan">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                KEBIJAKAN
              </h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link
                    href="/kebijakan-privasi"
                    className="text-sm text-foreground transition-colors hover:text-primary"
                  >
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/syarat-ketentuan-umum"
                    className="inline-block text-sm leading-snug text-foreground transition-colors hover:text-primary"
                  >
                    Syarat dan Ketentuan
                    <br />
                    Umum
                  </Link>
                </li>
              </ul>
            </nav>

            {/* HUBUNGI KAMI */}
            <nav aria-label="Hubungi Kami">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                HUBUNGI KAMI
              </h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href="https://mamikos.com/tentang-kami?opencomplaintform=1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-sm text-foreground transition-colors hover:text-primary"
                  >
                    <MdOutlineMail className="h-4 w-4 shrink-0 text-foreground" />
                    <span>cs@mamikos.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/6281325111171"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 text-sm text-foreground transition-colors hover:text-primary"
                  >
                    <FaWhatsapp className="h-4 w-4 shrink-0 text-foreground" />
                    <span>+6281325111171</span>
                  </a>
                </li>
                <li className="pt-0.5">
                  <div className="flex items-center gap-3.5">
                    <a
                      href="https://facebook.com/mamikosapp"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook Mamikos"
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      <FaSquareFacebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://x.com/mamikosapp"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="X Mamikos"
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      <FaXTwitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/mamikosapp"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram Mamikos"
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      <FaInstagram className="h-5 w-5" />
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col gap-5 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/logo/iso-certificate-v2.svg"
            alt="ISO Certificate"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
          <p className="text-sm text-foreground">
            © {currentYear} Mamikos. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
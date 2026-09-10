"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

type FeatureItem = {
  label: string;
  title: string;
  description: React.ReactNode;
};

const features: FeatureItem[] = [
  {
    label: "a",
    title: "Fitur Pencarian",
    description: (
      <>
        Di kolom pencarian, kamu bisa cari kos di sekitarmu atau kos di seluruh daerah di Indonesia dengan memasukkan keyword, seperti kos dekat
        Kampus/Universitas di masing-masing kota, cari kos di Jogja, Depok, Jakarta, Surabaya, Bandung, dan kota besar lainnya atau cari kos di sekitar lokasi saya saat ini.
      </>
    ),
  },
  {
    label: "b",
    title: "Filter Pencarian",
    description: (
      <>
        Cari kos berdasarkan fasilitas kos yang kamu mau, lebih mudah dengan filter berdasarkan Kos AC, Kos Kamar mandi dalam, Kos Wifi. Bisa juga pilih kos dengan tipe kos, mulai dari Kos Harian, Kos Bulanan hingga Kos Tahunan. Mau cari Kos Bebas, Kos Pasutri, Kos Putra, Kos Putri, Kos Campur juga bisa.
      </>
    ),
  },
  {
    label: "c",
    title: "Chat dengan Penyewa",
    description: (
      <>
        Terhubung langsung dengan pemilik kos dan bisa bertanya lebih lanjut mengenai info kos melalui fitur chat di Mamikos.
      </>
    ),
  },
  {
    label: "d",
    title: "Sewa Langsung via Mamikos",
    description: (
      <>
        Bisa langsung mengajukan sewa kos di aplikasi atau website Mamikos. Bahkan, kamu bisa mulai sewa kos dari 3 bulan sebelum masuk kosan. Transaksi lebih aman, tanpa takut kamarnya penuh keduluan orang lain.
      </>
    ),
  },
  {
    label: "e",
    title: "Virtual Tour",
    description: (
      <>
        Virtual Tour Mamikos adalah media foto lingkungan kos dalam 360° yang diperuntukkan untuk kamu, para pencari kos, agar dapat mengetahui kondisi lingkungan kos secara detail tanpa harus survei langsung. Fitur ini cocok jadi andalanmu yang butuh kosan tapi tidak punya waktu untuk survei langsung, karena fitur ini menampilkan keadaan kos secara lengkap dari berbagai sudut.
      </>
    ),
  },
  {
    label: "f",
    title: "Pembayaran via Mamikos",
    description: (
      <>
        Bayar kosan anti ribet, cashless, dan jaminan aman, dengan beragam pilihan metode pembayaran. Nikmati promo-promo menarik yang diselenggarakan secara berkala untuk membantu kamu ngekos lebih hemat.
      </>
    ),
  },
  {
    label: "g",
    title: "MamiPoin",
    description: (
      <>
        Sebagai wujud terima kasih, Mamikos menghadirkan program loyalti melalui MamiPoin. Anak kos bisa mendapatkan poin sebagai cashback setiap melakukan pembayaran kos dan dapat dikumpulkan untuk digunakan sebagai tambahan diskon di pembayaran kos selanjutnya. Pemilik kos juga akan mendapatkan MamiPoin setiap melakukan aktivitas di Mamikos dan dapat dikumpulkan untuk ditukar menjadi beragam hadiah menarik atau tambahan diskon di pembayaran paket Mamikos GoldPlus.
      </>
    ),
  },
  {
    label: "h",
    title: "Kos Review",
    description: (
      <>
        Lihat review dari para penghuni kos agar kamu semakin yakin untuk sewa
        kos. Kamu juga bisa tulis pentalaman kamu selama ngekos untuk menambah
        info kos.
      </>
    ),
  },
  {
    label: "i",
    title: "Favorit",
    description: (
      <>
        Ketemu dengan kos idaman, bisa disimpan dulu melalui fitur favorit kos. Kos yang sudah kamu simpan, dapat kamu sewa di kemudian hari.
      </>
    ),
  },
];

export function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      aria-labelledby="about-heading"
      className="border-t border-border bg-secondary py-8"
    >
      <Container>
        {/* Centered intro block */}
        <div className="mx-auto max-w-6xl text-center">
          <h2
            id="about-heading"
            className="text-xl font-bold text-foreground"
          >
            Mamikos - Aplikasi Anak Kos No. 1 di Indonesia
          </h2>

          <p className="mt-4 text-base leading-6 text-foreground sm:leading-7 text-left">
            Mamikos memanfaatkan teknologi untuk berkembang dari aplikasi cari
            kos menjadi aplikasi yang memudahkan calon anak kos untuk booking
            properti kos dan juga melakukan pembayaran kos. Saat ini kami
            memiliki lebih dari 2 juta kamar kos yang tersebar di lebih dari 140
            kota di seluruh Indonesia. Mamikos juga menyediakan layanan
            manajemen properti, bernama Singgahsini dan Apik, untuk menjawab
            kebutuhan calon penghuni yang menginginkan kos eksklusif atau kos
            murah. Mamikos berusaha untuk bisa terus menyajikan daftar rumah kos
            dengan data ketersediaan kamar yang akurat, fasilitas kos terpercinci,
            dilengkapi dengan foto serta detail harga kos, dan kemudahan survei via
            fitur virtual tour agar calon penghuni mendapatkan kenyamanan dalam
            proses pencarian dan booking kos.
          </p>
        </div>

        {/* Collapsible feature list */}
        <div className="mx-auto mt-8 max-w-6xl">
          <div className="flex justify-center">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="about-features-panel"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xl font-semibold text-foreground outline-none transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:ring-4 focus-visible:ring-ring/20"
            >
              Fitur yang dapat dimanfaatkan di Mamikos

              <FiChevronDown
                size={18}
                aria-hidden="true"
                className={cn(
                  "shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
          </div>

          <div
            id="about-features-panel"
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              isOpen ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="mt-6 space-y-5">
              {features.map((feature) => (
                <div key={feature.label} className="flex gap-4">
                  <span className="w-4 shrink-0 text-sm font-semibold text-foreground">
                    {feature.label}.
                  </span>

                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-base leading-6 text-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
import type { AboutFeatureItem } from "./about.types";

export const ABOUT_TITLE =
  "Mamikos - Aplikasi Anak Kos No. 1 di Indonesia";

export const ABOUT_DESCRIPTION = `
Mamikos memanfaatkan teknologi untuk berkembang dari aplikasi cari kos
menjadi aplikasi yang memudahkan calon anak kos untuk booking properti
kos dan juga melakukan pembayaran kos. Saat ini kami memiliki lebih dari
2 juta kamar kos yang tersebar di lebih dari 140 kota di seluruh Indonesia.
Mamikos juga menyediakan layanan manajemen properti, bernama Singgahsini
dan Apik, untuk menjawab kebutuhan calon penghuni yang menginginkan kos
eksklusif atau kos murah. Mamikos berusaha untuk bisa terus menyajikan
daftar rumah kos dengan data ketersediaan kamar yang akurat, fasilitas kos
terperinci, dilengkapi dengan foto serta detail harga kos, dan kemudahan
survei via fitur virtual tour agar calon penghuni mendapatkan kenyamanan
dalam proses pencarian dan booking kos.
`.replace(/\s+/g, " ").trim();

export const aboutFeatures: AboutFeatureItem[] = [
  {
    label: "a",
    title: "Fitur Pencarian",
    description: (
      <>
        Di kolom pencarian, kamu bisa cari kos di sekitarmu atau kos di
        seluruh daerah di Indonesia dengan memasukkan keyword, seperti kos
        dekat Kampus/Universitas di masing-masing kota, cari kos di Jogja,
        Depok, Jakarta, Surabaya, Bandung, dan kota besar lainnya atau cari
        kos di sekitar lokasi saya saat ini.
      </>
    ),
  },
  {
    label: "b",
    title: "Filter Pencarian",
    description: (
      <>
        Cari kos berdasarkan fasilitas kos yang kamu mau, lebih mudah dengan
        filter berdasarkan Kos AC, Kos Kamar mandi dalam, dan Kos Wifi. Bisa
        juga pilih kos dengan tipe kos, mulai dari Kos Harian, Kos Bulanan
        hingga Kos Tahunan. Mau cari Kos Bebas, Kos Pasutri, Kos Putra, Kos
        Putri, atau Kos Campur juga bisa.
      </>
    ),
  },
  {
    label: "c",
    title: "Chat dengan Penyewa",
    description: (
      <>
        Terhubung langsung dengan pemilik kos dan bisa bertanya lebih lanjut
        mengenai info kos melalui fitur chat di Mamikos.
      </>
    ),
  },
  {
    label: "d",
    title: "Sewa Langsung via Mamikos",
    description: (
      <>
        Bisa langsung mengajukan sewa kos di aplikasi atau website Mamikos.
        Bahkan, kamu bisa mulai sewa kos dari 3 bulan sebelum masuk kosan.
        Transaksi lebih aman, tanpa takut kamarnya penuh keduluan orang lain.
      </>
    ),
  },
  {
    label: "e",
    title: "Virtual Tour",
    description: (
      <>
        Virtual Tour Mamikos adalah media foto lingkungan kos dalam 360° yang
        diperuntukkan untuk kamu, para pencari kos, agar dapat mengetahui
        kondisi lingkungan kos secara detail tanpa harus survei langsung.
        Fitur ini cocok jadi andalanmu yang butuh kosan tapi tidak punya waktu
        untuk survei langsung, karena fitur ini menampilkan keadaan kos secara
        lengkap dari berbagai sudut.
      </>
    ),
  },
  {
    label: "f",
    title: "Pembayaran via Mamikos",
    description: (
      <>
        Bayar kosan anti ribet, cashless, dan jaminan aman, dengan beragam
        pilihan metode pembayaran. Nikmati promo-promo menarik yang
        diselenggarakan secara berkala untuk membantu kamu ngekos lebih hemat.
      </>
    ),
  },
  {
    label: "g",
    title: "MamiPoin",
    description: (
      <>
        Sebagai wujud terima kasih, Mamikos menghadirkan program loyalti
        melalui MamiPoin. Anak kos bisa mendapatkan poin sebagai cashback
        setiap melakukan pembayaran kos dan dapat dikumpulkan untuk digunakan
        sebagai tambahan diskon di pembayaran kos selanjutnya. Pemilik kos juga
        akan mendapatkan MamiPoin setiap melakukan aktivitas di Mamikos dan
        dapat dikumpulkan untuk ditukar menjadi beragam hadiah menarik atau
        tambahan diskon di pembayaran paket Mamikos GoldPlus.
      </>
    ),
  },
  {
    label: "h",
    title: "Kos Review",
    description: (
      <>
        Lihat review dari para penghuni kos agar kamu semakin yakin untuk sewa
        kos. Kamu juga bisa tulis pengalaman kamu selama ngekos untuk menambah
        informasi kos.
      </>
    ),
  },
  {
    label: "i",
    title: "Favorit",
    description: (
      <>
        Ketemu dengan kos idaman, bisa disimpan dulu melalui fitur favorit kos.
        Kos yang sudah kamu simpan dapat kamu sewa di kemudian hari.
      </>
    ),
  },
];
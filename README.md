# Fernando Namora Portfolio

Website portfolio pribadi Fernando Namora, seorang Data Analyst dengan fokus pada machine learning, data pipeline, business analytics, dan dashboarding. Proyek ini dibangun untuk menampilkan profil profesional, pengalaman, pendidikan, sertifikasi, serta kumpulan proyek data end-to-end dalam bentuk website yang rapi, responsif, dan mudah dikembangkan.

## Ringkasan

Website ini berisi:

- Halaman utama portfolio dengan bagian About, Projects, Experience, Education, Certifications, Skills, dan Contact.
- Carousel proyek untuk menampilkan proyek unggulan dan proyek tambahan.
- Halaman detail proyek dinamis berdasarkan slug.
- Asset visual proyek, CV, foto profil, logo, dan sertifikat yang diletakkan di folder `public/assets`.
- Styling global custom menggunakan CSS tanpa UI framework eksternal.
- Metadata dasar untuk halaman utama dan halaman detail proyek.

## Tech Stack

- **Next.js 16** - React framework dengan App Router.
- **React 19** - Library UI utama.
- **ESLint 9** - Linting dan pengecekan kualitas kode.
- **CSS Modules-style global CSS** - Styling ditulis di `app/globals.css`.
- **Next Image** - Optimasi dan rendering gambar melalui `next/image`.

## Struktur Proyek

```text
.
├── app/
│   ├── components/          # Komponen UI reusable
│   ├── data/                # Data portfolio dan detail proyek
│   ├── projects/[slug]/     # Halaman detail proyek dinamis
│   ├── globals.css          # Styling global website
│   ├── layout.js            # Root layout dan metadata global
│   └── page.js              # Halaman utama portfolio
├── public/
│   └── assets/              # Gambar proyek, CV, sertifikat, dan media publik
├── eslint.config.mjs        # Konfigurasi ESLint
├── jsconfig.json            # Alias import dan konfigurasi JavaScript
├── next.config.mjs          # Konfigurasi Next.js
├── package.json             # Script dan dependency proyek
└── package-lock.json        # Lockfile dependency npm
```

## Fitur Utama

- **Responsive portfolio layout**  
  Tampilan dirancang agar tetap nyaman dibaca di desktop maupun layar kecil.

- **Project showcase**  
  Proyek ditampilkan melalui carousel dan kartu proyek, lengkap dengan deskripsi, impact, stack, gambar, dan link eksternal.

- **Dynamic project pages**  
  Setiap proyek memiliki halaman detail melalui route `/projects/[slug]`, dengan konten yang diambil dari `app/data/projects.js`.

- **Certification showcase**  
  Sertifikat PDF dan kredensial HackerRank ditampilkan sebagai bagian dari profil profesional.

- **Theme toggle pada halaman proyek**  
  Halaman detail proyek menyediakan kontrol tema melalui komponen `ThemeToggle`.

- **Asset management sederhana**  
  Semua file publik disimpan di `public/assets`, sehingga dapat diakses langsung melalui path `/assets/...`.

## Daftar Proyek yang Ditampilkan

Website ini menampilkan beberapa proyek utama:

- Order Guardian - E-commerce cancellation prediction system.
- E-Commerce Monitoring Pipeline - Data engineering pipeline untuk sales dan retention monitoring.
- Term Deposit Subscription Model - Model prediksi subscription untuk optimasi marketing.
- Credit Card Customer Analysis - Analisis perilaku active vs churned customer.
- IMDb Sentiment Analysis - NLP sentiment classification menggunakan Bidirectional LSTM dan Word2Vec.
- Global Inflation Risk Analysis - Analytics workflow dan dashboard Power BI untuk risiko inflasi.
- Bank Loan Portfolio Analysis - Analisis credit risk dan borrower segmentation.
- Justy Business Analytics - Pipeline scraping dan dashboard sales performance.

## Prasyarat

Pastikan environment lokal sudah memiliki:

- Node.js versi `18.18.0` atau lebih baru.
- npm versi modern yang kompatibel dengan `package-lock.json`.

Rekomendasi praktis: gunakan Node.js LTS terbaru agar kompatibel dengan Next.js 16.

## Instalasi

Clone repository, lalu install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Setelah server berjalan, buka:

```text
http://localhost:3000
```

## Script yang Tersedia

```bash
npm run dev
```

Menjalankan aplikasi dalam mode development.

```bash
npm run build
```

Membuat production build untuk memastikan aplikasi siap dideploy.

```bash
npm run start
```

Menjalankan hasil production build secara lokal.

```bash
npm run lint
```

Menjalankan ESLint untuk mengecek kualitas kode.

## Mengubah Konten Website

Sebagian besar konten portfolio dikelola melalui file data JavaScript agar mudah diperbarui tanpa mengubah struktur komponen.

### Mengubah proyek di halaman utama

Edit file:

```text
app/data/home.js
```

Gunakan `featuredProjects` untuk proyek unggulan dan `additionalProjects` untuk proyek tambahan.

### Mengubah halaman detail proyek

Edit file:

```text
app/data/projects.js
```

Setiap key pada object `projects` menjadi slug URL. Contoh:

```text
order-guardian -> /projects/order-guardian
```

Pastikan slug yang digunakan di `app/data/home.js` memiliki pasangan konten detail di `app/data/projects.js`.

### Menambah asset gambar atau dokumen

Simpan file baru di:

```text
public/assets/
```

Lalu referensikan dengan path publik:

```text
/assets/nama-file.png
```

Untuk sertifikat, gunakan folder:

```text
public/assets/certificates/
```

## Deployment

Konfigurasi saat ini adalah aplikasi Next.js standar. Target deployment yang paling langsung:

- **Vercel** - Rekomendasi utama untuk Next.js.
- **Netlify** - Bisa digunakan dengan konfigurasi Next.js yang sesuai.

Jika ingin deploy sebagai static site ke GitHub Pages, proyek perlu dikonfigurasi untuk static export terlebih dahulu, misalnya dengan menyesuaikan `next.config.mjs` dan memastikan seluruh route dapat diekspor secara statis.

## Quality Check Sebelum Commit

Sebelum commit, jalankan:

```bash
npm run lint
npm run build
```

Checklist singkat:

- Tidak ada error lint.
- Production build berhasil.
- Link CV dan sertifikat dapat dibuka.
- Gambar proyek tampil dengan benar.
- Slug proyek di halaman utama cocok dengan detail proyek.
- Link eksternal GitHub, dashboard, dan demo masih aktif.

## Catatan Pengembangan

- Jangan menyimpan file rahasia atau kredensial di repository.
- File publik seperti CV, sertifikat, dan gambar harus berada di `public/assets`.
- Hindari mengubah struktur slug tanpa memperbarui link terkait.
- Gunakan nama file asset yang deskriptif dan konsisten.
- Jalankan build lokal setelah perubahan besar pada data proyek atau struktur halaman.

## Lisensi

Repository ini berisi website portfolio pribadi. Konten personal, CV, sertifikat, gambar profil, dan materi portfolio adalah milik Fernando Namora. Penggunaan ulang konten personal memerlukan izin dari pemilik repository.

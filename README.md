# GridPrimer — Website Vercel

GridPrimer adalah website berbahasa Inggris tentang penggunaan spreadsheet sehari-hari, dengan 25 panduan dan 3 alat interaktif. Paket ini berisi **source code** untuk GitHub dan Vercel, bukan website yang sudah di-host.

## Isi paket

- 25 artikel pendek dengan contoh dan tautan ke dokumentasi resmi Microsoft atau Google.
- Tiga tools: percentage change, column letter converter, dan number summary. Data tools diproses di browser tanpa upload file.
- Halaman About, Contact, Privacy, dan Terms; kontak: chinachen05@gmail.com.
- Kode AdSense `ca-pub-2936167858814999` dan `ads.txt` disiapkan.
- Sitemap, robots.txt, metadata, dan canonical untuk domain default `https://gridprimer.vercel.app`.

## Cara upload ke GitHub dan deploy di Vercel

1. Ekstrak ZIP. Buat repository GitHub baru. Upload **isi ZIP** ke bagian paling atas (root) repository, sehingga `package.json`, `build.mjs`, dan `vercel.json` langsung terlihat di root. Jangan upload file ZIP sebagai satu-satunya isi repository.
2. Di Vercel, pilih **Add New → Project**, hubungkan repository GitHub tersebut, lalu import. Nama proyek yang diinginkan adalah `gridprimer`. Build command adalah `npm run build` dan output directory adalah `dist`; keduanya juga sudah diatur di `vercel.json`. Node.js 20 atau lebih baru diperlukan. Tidak ada dependensi npm tambahan.
3. Setelah deployment, buka pengaturan **Domains** proyek dan pastikan domain publik yang benar-benar aktif adalah `gridprimer.vercel.app`. Alamat ini belum dipesan dan ketersediaannya tidak dapat dijamin; Vercel memberikan domain `.vercel.app` berdasarkan ketersediaan. Jika alamat tersebut tersedia dan digunakan, tidak perlu mengatur variabel lingkungan `SITE_URL`.
4. Jika domain aktif berbeda, buka pengaturan Environment Variables di Vercel dan buat `SITE_URL` dengan URL asli tanpa garis miring di akhir, misalnya `https://nama-yang-tersedia.vercel.app`. Terapkan ke environment Production, kemudian **redeploy**. Ini memperbarui canonical, sitemap, dan robots.txt agar sesuai dengan domain yang sebenarnya. Jangan mengisi URL dengan path atau tanda slash di akhir.
5. Periksa halaman utama, beberapa artikel, dan tools pada URL publik. Periksa pula `/ads.txt`, `/robots.txt`, dan `/sitemap.xml` pada domain yang aktif. Pastikan situs dapat diakses publik, tidak memerlukan login, dan tidak dilindungi deployment protection saat diajukan untuk review.
6. Di akun AdSense, tambahkan URL situs yang benar melalui **Sites**, selesaikan verifikasi yang diminta Google, dan pilih **Request review**. Pastikan ID publisher yang digunakan adalah milik akun yang sama dan sesuai dengan yang ditampilkan di akun AdSense Anda.
7. Jika menayangkan iklan yang memerlukan pengelolaan persetujuan untuk pengunjung EEA, Inggris, atau Swiss, konfigurasikan CMP yang disertifikasi Google dan terintegrasi dengan TCF. Pengaturan pesan Eropa Google tersedia melalui **Privacy & messaging** di AdSense. Paket ini belum mengaktifkan CMP untuk akun Anda. Tinjau juga halaman Privacy agar sesuai dengan praktik aktual situs dan layanan yang Anda aktifkan.

## Menjalankan dan memeriksa secara lokal

```bash
npm run build
npm test
python3 tests/site_audit.py
```

Hasil build berada di `dist/`. Untuk memakai URL lain saat build dan audit:

```bash
SITE_URL=https://nama-yang-tersedia.vercel.app npm run build
SITE_URL=https://nama-yang-tersedia.vercel.app python3 tests/site_audit.py
```

Artikel berada di `src/articles.mjs`; logika tools ada di `assets/calculations.js`. Setelah perubahan, jalankan kembali build dan pengujian sebelum deploy.

## Pemeriksaan dan batasan

Paket telah diperiksa secara lokal untuk jumlah artikel, tautan internal, metadata, sitemap, robots.txt, ads.txt, dan konfigurasi kode AdSense. Contoh hitung pada tools telah diuji dengan kasus normal serta input tidak valid. Navigasi, pencarian, dan tools juga dicoba di browser; tampilan diperiksa pada desktop dan lebar setara ponsel. Contoh artikel dibandingkan dengan dokumentasi resmi, tetapi belum diuji pada setiap versi Microsoft Excel dan Google Sheets.

Peninjauan ini **bukan persetujuan AdSense**. Google tetap memeriksa situs yang sudah online, kepemilikan situs, kualitas konten, pengalaman pengguna, dan kepatuhan kebijakannya. Paket ini belum di-deploy dan kami tidak dapat memverifikasi akun AdSense, domain yang dialokasikan, crawl Google, atau hasil review sebelum situs benar-benar dipasang.

Dokumentasi:

- https://support.google.com/adsense/answer/7299563
- https://support.google.com/adsense/answer/12169212
- https://support.google.com/adsense/answer/13554116
- https://vercel.com/docs/domains/working-with-domains

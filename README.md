# AbdUmar Simulasi

Laboratorium Maya Informatika — GitHub Pages Ready.

## Fitur Tahap 1
- Desain 3D colorful: navy, biru, putih, neon.
- Tipografi besar dan nyaman dibaca.
- 50 katalog simulasi Informatika lintas 5 bidang.
- Search + filter kategori.
- Demo interaktif tanpa backend.
- Responsive desktop/tablet/mobile.
- Tidak membutuhkan build tool, Node.js, atau database.

## Struktur
```text
AbdUmar_Simulasi/
├── index.html
├── README.md
├── 404.html
├── .nojekyll
├── CNAME.example
└── assets/
    ├── css/style.css
    └── js/app.js
```

## Upload ke GitHub Pages
1. Buat repository baru, misalnya `abdumar-simulasi`.
2. Upload seluruh isi folder ini ke repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Save.
7. Tunggu GitHub Pages selesai deploy.
8. Untuk custom domain, isi domain Anda di **Settings → Pages → Custom domain**.
9. Jika memakai file CNAME, rename `CNAME.example` menjadi `CNAME` lalu isi domain Anda.

## Custom Domain
GitHub Pages membutuhkan DNS:
- Apex domain: gunakan A record sesuai IP GitHub Pages yang ditampilkan GitHub.
- Subdomain: gunakan CNAME ke `<username>.github.io`.
- Setelah DNS aktif, aktifkan **Enforce HTTPS**.

## Pengembangan Berikutnya
Firebase dapat ditambahkan pada tahap berikutnya untuk login guru/siswa, penyimpanan hasil eksperimen, dashboard, bank soal, dan sinkronisasi data. Tahap ini sengaja tanpa backend.

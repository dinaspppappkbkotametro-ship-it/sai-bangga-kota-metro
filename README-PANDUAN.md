# Website SAI BANGGA — GitHub Pages

Paket website statis awal untuk SAI BANGGA — Sekolah Keluarga Kota Metro.

## Isi paket
- `index.html` — struktur dan isi halaman
- `style.css` — desain responsif desktop dan ponsel
- `script.js` — menu ponsel sederhana
- `assets/logo-sai-bangga.jpg` — logo yang diberikan pengguna

## Cara publikasi gratis dengan GitHub Pages
1. Buka https://github.com/ dan buat akun atau masuk.
2. Klik tombol `+` lalu pilih `New repository`.
3. Isi nama repository, misalnya `sai-bangga-kota-metro`.
4. Pilih `Public`, lalu buat repository.
5. Di repository, pilih `Add file` → `Upload files`.
6. Ekstrak ZIP ini di komputer terlebih dahulu. Unggah semua isi folder website (pastikan `index.html` berada di tingkat paling atas, bukan di dalam folder tambahan).
7. Klik `Commit changes`.
8. Buka `Settings` → `Pages`.
9. Pada bagian `Build and deployment`, pilih `Deploy from a branch`.
10. Pilih branch `main` dan folder `/(root)`, lalu klik `Save`.
11. Tunggu proses publikasi selesai. Alamat website biasanya berbentuk:
    `https://NAMA-PENGGUNA.github.io/sai-bangga-kota-metro/`

Ganti `NAMA-PENGGUNA` dengan username GitHub Anda. Alamat baru dapat memerlukan beberapa menit untuk aktif.

## Sebelum diumumkan
- Periksa seluruh teks dan logo.
- Ganti konten contoh dengan materi resmi yang sudah disetujui.
- Tambahkan tautan kontak/layanan hanya setelah diverifikasi.
- Angka dashboard masih berupa tanda “—”; jangan diganti dengan angka tanpa sumber data yang sah.
- Website ini belum memiliki login, basis data, formulir yang tersimpan, atau integrasi otomatis dengan New SIGA.
- Jangan menampilkan data pribadi keluarga, anak, korban, atau rincian kasus pada halaman publik.
- Jika dibutuhkan dashboard internal, siapkan sistem backend, autentikasi, pengaturan hak akses, dan tata kelola data tersendiri.

## Mengedit konten
Buka `index.html` menggunakan editor teks (misalnya Visual Studio Code atau Notepad) lalu ubah teks yang diperlukan. Untuk warna, edit variabel di bagian awal `style.css`.

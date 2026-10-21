const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

/* =========================================
   ARTIKEL EDUKASI 60 SUBTEMA SAI BANGGA
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const kartuTema = document.querySelectorAll(
    "#belajar .learning-card"
  );

  const kotakArtikel = document.getElementById(
    "artikel-subtema"
  );

  const judulArtikel = document.getElementById(
    "artikel-judul"
  );

  const kategoriArtikel = document.getElementById(
    "artikel-kategori"
  );

  const isiArtikel = document.getElementById(
    "artikel-isi"
  );

  const tombolTutup = document.getElementById(
    "tutup-artikel"
  );

  if (!kotakArtikel || !judulArtikel || !isiArtikel) {
    return;
  }

  /* DATABASE ARTIKEL
     Tambahkan isi artikel lengkap di sini.
     Kunci artikel mengikuti nomor tema dan subtema.
  */

  const databaseArtikel = {

    "1-1": {
      pengantar:
        "Komunikasi hangat antara orang tua dan anak adalah " +
        "cara berinteraksi yang dilandasi kasih sayang, " +
        "saling menghargai, dan keterbukaan.",

      tujuan:
        "Membangun hubungan yang dekat, meningkatkan " +
        "kepercayaan diri anak, serta menciptakan " +
        "lingkungan keluarga yang aman dan nyaman.",

      tips: [
        "Luangkan waktu berbicara dengan anak setiap hari.",
        "Dengarkan cerita anak tanpa menyela.",
        "Gunakan kata-kata yang lembut dan positif.",
        "Hargai perasaan serta pendapat anak.",
        "Hindari membentak, menghina, dan membandingkan anak.",
        "Berikan pujian atas usaha dan perilaku baik anak."
      ],

      pesan:
        "Anak yang didengarkan akan lebih mudah belajar " +
        "mendengarkan dan menghargai orang lain."
    },

    "1-3": {
      pengantar:
        "Disiplin positif adalah pendekatan pengasuhan " +
        "yang membantu anak memahami aturan dan tanggung " +
        "jawab tanpa menggunakan kekerasan.",

      tujuan:
        "Membentuk perilaku bertanggung jawab melalui " +
        "bimbingan, keteladanan, dan komunikasi yang baik.",

      tips: [
        "Buat aturan keluarga yang jelas dan sesuai usia.",
        "Jelaskan alasan di balik setiap aturan.",
        "Terapkan konsekuensi yang aman dan masuk akal.",
        "Berikan contoh perilaku yang baik.",
        "Hindari hukuman fisik dan penghinaan.",
        "Apresiasi usaha anak memperbaiki perilakunya."
      ],

      pesan:
        "Mendidik anak tidak harus dengan kekerasan. " +
        "Ketegasan dapat berjalan bersama kasih sayang."
    },

    "2-1": {
      pengantar:
        "Stunting merupakan gangguan pertumbuhan dan " +
        "perkembangan anak akibat kekurangan gizi kronis, " +
        "infeksi berulang, dan faktor lainnya.",

      tujuan:
        "Meningkatkan pengetahuan keluarga mengenai " +
        "pencegahan stunting sejak sebelum kehamilan " +
        "hingga masa pertumbuhan anak.",

      tips: [
        "Penuhi kebutuhan gizi sebelum dan selama kehamilan.",
        "Lakukan pemeriksaan kehamilan secara rutin.",
        "Berikan ASI eksklusif selama enam bulan.",
        "Berikan MPASI bergizi mulai usia enam bulan.",
        "Pantau pertumbuhan anak secara rutin di Posyandu.",
        "Jaga kebersihan lingkungan dan akses air bersih."
      ],

      pesan:
        "Pencegahan stunting membutuhkan keterlibatan " +
        "seluruh anggota keluarga."
    }

  };

  /* Membuat artikel dari data */

  function buatArtikel(data, judul) {

    if (!data) {
      return `
        <p>
          Materi edukasi mengenai
          <strong>${escapeHTML(judul)}</strong>
          sedang disiapkan untuk publikasi.
        </p>
        <p>
          Silakan kembali mengunjungi Ruang Belajar
          SAI BANGGA untuk mendapatkan artikel lengkap.
        </p>
      `;
    }

    const daftarTips = (data.tips || [])
      .map(tip => `<li>${escapeHTML(tip)}</li>`)
      .join("");

    return `
      <h3>Pengertian</h3>
      <p>${escapeHTML(data.pengantar)}</p>

      <h3>Tujuan Edukasi</h3>
      <p>${escapeHTML(data.tujuan)}</p>

      <h3>Langkah yang Dapat Dilakukan Keluarga</h3>
      <ol>${daftarTips}</ol>

      <h3>Pesan untuk Keluarga</h3>
      <p><strong>${escapeHTML(data.pesan)}</strong></p>
    `;
  }

  /* Mengamankan teks yang ditampilkan */

  function escapeHTML(teks) {
    return String(teks || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* Mengaktifkan 60 subtema */

  kartuTema.forEach(function (kartu, indeksTema) {

    const namaTema = kartu.querySelector("h3");

    const daftarSubtema = kartu.querySelectorAll(
      ".subtema-content ol li"
    );

    daftarSubtema.forEach(function (subtema, indeksSubtema) {

      subtema.setAttribute("tabindex", "0");
      subtema.setAttribute("role", "button");

      const kode =
        (indeksTema + 1) + "-" + (indeksSubtema + 1);

      function tampilkanArtikel() {

        const judul = subtema.textContent.trim();

        kategoriArtikel.textContent =
          namaTema ? namaTema.textContent.trim() : "";

        judulArtikel.textContent = judul;

        isiArtikel.innerHTML = buatArtikel(
          databaseArtikel[kode],
          judul
        );

        kotakArtikel.hidden = false;

        kotakArtikel.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      subtema.addEventListener(
        "click",
        tampilkanArtikel
      );

      subtema.addEventListener(
        "keydown",
        function (event) {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            tampilkanArtikel();
          }
        }
      );

    });

  });

  /* Tombol tutup artikel */

  if (tombolTutup) {
    tombolTutup.addEventListener("click", function () {
      kotakArtikel.hidden = true;
    });
  }

});

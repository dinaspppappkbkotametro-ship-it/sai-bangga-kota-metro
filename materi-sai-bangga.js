/* SAI BANGGA - 60 artikel edukasi. Simpan sebagai materi-sai-bangga.js di root repo. */
(function () {
"use strict";
const artikel = {
  "1-1": {
    "judul": "Komunikasi hangat antara orang tua dan anak",
    "pengertian": "Komunikasi hangat adalah percakapan dua arah yang membuat anak merasa aman, didengar, dan dihargai.",
    "tujuan": "Membangun kelekatan, keterbukaan, dan kepercayaan antara orang tua dan anak.",
    "materi": "Mendengar aktif; bahasa positif; validasi perasaan; percakapan sesuai usia.",
    "contoh": "Sisihkan 10–15 menit untuk mendengar cerita anak tanpa gawai; ulangi inti ceritanya sebelum menanggapi.",
    "pesan": "Dengarkan dahulu, bimbing kemudian.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "1-2": {
    "judul": "Memahami tumbuh kembang dan kebutuhan anak sesuai usia",
    "pengertian": "Tumbuh kembang meliputi perubahan fisik, kemampuan berpikir, bahasa, sosial, dan emosi yang berbeda menurut usia.",
    "tujuan": "Membantu pengasuh memberi stimulasi dan dukungan sesuai kebutuhan anak.",
    "materi": "Tahapan perkembangan; bermain dan stimulasi; pemantauan kesehatan; variasi perkembangan individu.",
    "contoh": "Amati kemampuan baru anak, ajak bermain sesuai usianya, dan konsultasikan kekhawatiran kepada tenaga kesehatan.",
    "pesan": "Setiap anak berkembang dengan iramanya; dukungan tepat lebih penting daripada perbandingan.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "1-3": {
    "judul": "Disiplin positif dan pengasuhan tanpa kekerasan",
    "pengertian": "Disiplin positif mengajarkan tanggung jawab melalui aturan yang jelas, teladan, dan konsekuensi yang aman tanpa kekerasan.",
    "tujuan": "Membantu anak mengembangkan pengendalian diri dan rasa tanggung jawab.",
    "materi": "Aturan bersama; penjelasan sebab-akibat; penguatan perilaku baik; larangan hukuman fisik dan penghinaan.",
    "contoh": "Buat tiga aturan sederhana di rumah dan diskusikan konsekuensi yang masuk akal saat aturan dilanggar.",
    "pesan": "Tegas pada aturan, tetap menghormati martabat anak.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "1-4": {
    "judul": "Mengenali emosi dan menghadapi tantrum anak",
    "pengertian": "Tantrum adalah luapan emosi ketika anak belum mampu mengatur rasa kecewa, lelah, atau frustrasi.",
    "tujuan": "Membantu orang tua merespons emosi anak secara tenang dan aman.",
    "materi": "Pemicu tantrum; regulasi emosi; keselamatan; batasan yang konsisten.",
    "contoh": "Saat anak marah, pastikan aman, bicara pelan, beri waktu tenang, lalu bantu menamai perasaannya.",
    "pesan": "Anak belajar menenangkan diri melalui pendampingan yang tenang.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "1-5": {
    "judul": "Peran ayah dan ibu dalam pengasuhan",
    "pengertian": "Pengasuhan adalah tanggung jawab bersama orang tua atau pengasuh untuk memenuhi kebutuhan dan hak anak.",
    "tujuan": "Mendorong keterlibatan pengasuh yang adil, aktif, dan penuh perhatian.",
    "materi": "Pembagian tugas; kehadiran emosional; komunikasi antarpengasuh; keteladanan.",
    "contoh": "Susun jadwal bergantian mendampingi belajar, menyiapkan makan, dan berbincang dengan anak.",
    "pesan": "Kehadiran dan kerja sama pengasuh memperkuat keluarga.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "1-6": {
    "judul": "Membangun kemandirian dan kepercayaan diri anak",
    "pengertian": "Kemandirian adalah kemampuan anak mencoba dan menyelesaikan tugas sesuai usia; kepercayaan diri tumbuh dari pengalaman didukung.",
    "tujuan": "Membantu anak berani mencoba, mengambil keputusan sederhana, dan bertanggung jawab.",
    "materi": "Tugas sesuai usia; pilihan terbatas; apresiasi proses; kesempatan belajar dari kesalahan.",
    "contoh": "Biarkan anak menyiapkan perlengkapan sekolah sendiri dengan pendampingan seperlunya.",
    "pesan": "Berikan kesempatan mencoba, bukan tuntutan harus sempurna.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "1-7": {
    "judul": "Menanamkan karakter, nilai agama, dan sopan santun",
    "pengertian": "Pendidikan karakter membiasakan nilai kejujuran, hormat, tanggung jawab, dan kepedulian melalui teladan sehari-hari.",
    "tujuan": "Membantu anak membangun kebiasaan baik dan menghargai keberagaman.",
    "materi": "Keteladanan; pembiasaan; dialog nilai; penghormatan terhadap orang lain.",
    "contoh": "Biasakan mengucapkan terima kasih, meminta maaf, menepati janji, dan beribadah sesuai keyakinan keluarga.",
    "pesan": "Nilai baik paling mudah dipelajari dari contoh nyata.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "1-8": {
    "judul": "Pendampingan belajar dan pengembangan minat anak",
    "pengertian": "Pendampingan belajar adalah dukungan keluarga agar anak nyaman belajar dan menemukan kemampuan serta minatnya.",
    "tujuan": "Meningkatkan motivasi belajar tanpa tekanan berlebihan.",
    "materi": "Rutinitas belajar; lingkungan kondusif; komunikasi dengan guru; eksplorasi minat.",
    "contoh": "Sediakan waktu belajar singkat yang konsisten dan tanyakan hal menarik yang dipelajari anak.",
    "pesan": "Hargai proses belajar dan keunikan minat anak.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "1-9": {
    "judul": "Penggunaan gawai dan internet sesuai usia",
    "pengertian": "Literasi digital keluarga membantu anak menggunakan perangkat dan internet secara aman, seimbang, serta sesuai tahap perkembangan.",
    "tujuan": "Mengurangi risiko paparan konten berbahaya dan menjaga keseimbangan aktivitas anak.",
    "materi": "Pendampingan digital; privasi; keamanan; durasi penggunaan; aktivitas tanpa layar.",
    "contoh": "Buat kesepakatan waktu layar, aktifkan pengaturan keamanan, dan dampingi anak saat mengakses konten.",
    "pesan": "Gawai adalah alat belajar, bukan pengganti hubungan keluarga.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "1-10": {
    "judul": "Pengasuhan inklusif bagi anak penyandang disabilitas",
    "pengertian": "Pengasuhan inklusif menghormati hak, kemampuan, dan kebutuhan dukungan setiap anak, termasuk anak penyandang disabilitas.",
    "tujuan": "Menciptakan keluarga yang menerima dan memberi kesempatan setara.",
    "materi": "Aksesibilitas; komunikasi yang sesuai; stimulasi individual; layanan pendukung.",
    "contoh": "Tanyakan kebutuhan anak, sesuaikan cara berkomunikasi, dan libatkan anak dalam kegiatan keluarga.",
    "pesan": "Setiap anak berhak dihargai dan didukung untuk berkembang.",
    "referensi": "Kementerian PPPA; UNICEF Indonesia"
  },
  "2-1": {
    "judul": "Mengenal stunting dan upaya pencegahannya",
    "pengertian": "Stunting adalah kondisi panjang atau tinggi badan anak menurut usia berada di bawah standar pertumbuhan akibat berbagai faktor, termasuk kekurangan gizi kronis dan infeksi.",
    "tujuan": "Mendorong pencegahan sejak sebelum kehamilan dan pemantauan tumbuh kembang.",
    "materi": "Gizi ibu dan anak; pencegahan infeksi; sanitasi; layanan kesehatan; pemantauan pertumbuhan.",
    "contoh": "Datang ke Posyandu, ikuti anjuran tenaga kesehatan, dan sediakan makanan beragam bergizi.",
    "pesan": "Pencegahan stunting adalah upaya bersama seluruh keluarga.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "2-2": {
    "judul": "Pentingnya 1.000 Hari Pertama Kehidupan",
    "pengertian": "Seribu Hari Pertama Kehidupan berlangsung sejak awal kehamilan sampai anak berusia dua tahun dan merupakan periode penting pertumbuhan.",
    "tujuan": "Meningkatkan perhatian keluarga terhadap kesehatan ibu dan bayi.",
    "materi": "Pemeriksaan kehamilan; gizi ibu; ASI; MPASI; imunisasi dan pemantauan.",
    "contoh": "Dampingi ibu melakukan pemeriksaan rutin dan catat jadwal Posyandu anak.",
    "pesan": "Investasi kesehatan sejak kehamilan berdampak jangka panjang.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "2-3": {
    "judul": "Gizi seimbang bagi seluruh anggota keluarga",
    "pengertian": "Gizi seimbang adalah pola makan beragam dengan jumlah yang sesuai kebutuhan tubuh, disertai aktivitas fisik dan kebersihan.",
    "tujuan": "Membantu keluarga membentuk kebiasaan makan sehat.",
    "materi": "Keanekaragaman pangan; sayur dan buah; protein; air minum; pembatasan gula, garam, lemak.",
    "contoh": "Susun menu harian berisi sumber karbohidrat, lauk berprotein, sayur, dan buah sesuai kemampuan.",
    "pesan": "Makan sehat tidak harus mahal; utamakan variasi dan kecukupan.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "2-4": {
    "judul": "Pemenuhan gizi ibu hamil dan ibu menyusui",
    "pengertian": "Kebutuhan gizi meningkat selama kehamilan dan menyusui untuk mendukung kesehatan ibu serta pertumbuhan bayi.",
    "tujuan": "Mendorong asupan bergizi dan pemeriksaan kesehatan yang teratur.",
    "materi": "Protein; zat besi; asam folat; cairan; pemeriksaan antenatal; suplemen sesuai petugas kesehatan.",
    "contoh": "Siapkan lauk berprotein setiap hari dan ikuti pemberian tablet tambah darah sesuai arahan tenaga kesehatan.",
    "pesan": "Kesehatan ibu adalah fondasi kesehatan anak.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "2-5": {
    "judul": "ASI eksklusif dan pemberian MPASI",
    "pengertian": "ASI eksklusif berarti bayi hanya mendapat ASI selama enam bulan pertama, kecuali obat atau suplemen sesuai indikasi medis; MPASI dimulai sekitar usia enam bulan.",
    "tujuan": "Mendukung pemberian makan bayi yang aman dan sesuai usia.",
    "materi": "Inisiasi menyusu; dukungan menyusui; tekstur dan frekuensi MPASI; kebersihan pangan.",
    "contoh": "Dampingi ibu menyusui dan siapkan MPASI beragam dengan protein hewani sesuai kemampuan keluarga.",
    "pesan": "Pemberian makan responsif membantu anak tumbuh sehat.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "2-6": {
    "judul": "Pemantauan pertumbuhan anak melalui Posyandu",
    "pengertian": "Pemantauan pertumbuhan adalah pengukuran berkala berat dan panjang atau tinggi badan untuk melihat pola pertumbuhan anak.",
    "tujuan": "Mendorong deteksi dini masalah pertumbuhan.",
    "materi": "Penimbangan; pengukuran; pencatatan Buku KIA; konseling; tindak lanjut rujukan.",
    "contoh": "Bawa anak ke Posyandu sesuai jadwal dan diskusikan hasil grafik pertumbuhan dengan petugas.",
    "pesan": "Pantau tren pertumbuhan, bukan hanya satu angka.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "2-7": {
    "judul": "Kebersihan diri, sanitasi, dan air bersih",
    "pengertian": "Kebersihan dan sanitasi mencegah paparan kuman penyebab penyakit yang mengganggu kesehatan keluarga.",
    "tujuan": "Mengurangi risiko diare dan infeksi melalui kebiasaan sehat.",
    "materi": "Cuci tangan pakai sabun; jamban sehat; air aman; pengelolaan limbah.",
    "contoh": "Biasakan cuci tangan sebelum makan dan setelah dari toilet; simpan air minum secara higienis.",
    "pesan": "Lingkungan bersih mendukung tumbuh kembang sehat.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "2-8": {
    "judul": "Kebiasaan hidup aktif dan istirahat cukup",
    "pengertian": "Aktivitas fisik dan tidur yang memadai membantu menjaga kesehatan fisik, emosi, dan kebugaran keluarga.",
    "tujuan": "Mendorong rutinitas sehat sesuai usia dan kemampuan.",
    "materi": "Gerak harian; permainan aktif; waktu tidur; pengurangan duduk terlalu lama.",
    "contoh": "Ajak keluarga berjalan kaki atau bermain aktif bersama dan tetapkan jadwal tidur teratur.",
    "pesan": "Bergerak dan beristirahat adalah bagian dari hidup sehat.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "2-9": {
    "judul": "Rumah sehat dan bebas asap rokok",
    "pengertian": "Rumah sehat memiliki ventilasi, kebersihan, dan lingkungan yang mengurangi paparan bahaya, termasuk asap rokok.",
    "tujuan": "Melindungi anak dan anggota keluarga dari risiko lingkungan rumah.",
    "materi": "Ventilasi; kebersihan; pencegahan asap rokok; pengelolaan sampah; keamanan rumah.",
    "contoh": "Tetapkan rumah dan kendaraan bebas rokok serta bersihkan area bermain anak secara rutin.",
    "pesan": "Udara bersih adalah hak seluruh anggota keluarga.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "2-10": {
    "judul": "Pengolahan makanan bergizi dengan bahan pangan lokal",
    "pengertian": "Pangan lokal dapat diolah menjadi menu beragam dan bergizi dengan teknik memasak yang aman.",
    "tujuan": "Membantu keluarga memenuhi gizi dengan bahan yang mudah dijangkau.",
    "materi": "Pangan musiman; protein lokal; kebersihan pengolahan; variasi menu; penyimpanan.",
    "contoh": "Buat menu dari telur, ikan, tempe, sayur, dan buah lokal dengan cara masak yang higienis.",
    "pesan": "Manfaatkan potensi pangan sekitar untuk keluarga sehat.",
    "referensi": "Kementerian Kesehatan RI; WHO; UNICEF Indonesia; BKKBN"
  },
  "3-1": {
    "judul": "Mengenal tubuh dan menjaga kebersihan organ reproduksi",
    "pengertian": "Kesehatan reproduksi mencakup pemahaman tubuh, kebersihan, dan kemampuan menjaga kesehatan serta keselamatan diri.",
    "tujuan": "Meningkatkan pengetahuan dan kebiasaan perawatan diri yang benar.",
    "materi": "Anatomi dasar; kebersihan; pakaian bersih; tanda keluhan yang perlu diperiksa.",
    "contoh": "Bersihkan area genital bagian luar dengan benar dan konsultasikan bila muncul nyeri, luka, atau keluhan menetap.",
    "pesan": "Kenali tubuh dan cari informasi kesehatan dari sumber tepercaya.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "3-2": {
    "judul": "Pubertas dan perubahan fisik serta emosi remaja",
    "pengertian": "Pubertas adalah fase perkembangan yang membawa perubahan tubuh, hormon, perasaan, dan hubungan sosial.",
    "tujuan": "Membantu remaja memahami perubahan sebagai proses yang wajar.",
    "materi": "Perubahan fisik; menstruasi dan mimpi basah; suasana hati; citra tubuh; dukungan orang dewasa.",
    "contoh": "Ajak remaja berbicara terbuka tentang perubahan tubuh tanpa mempermalukan atau mengejek.",
    "pesan": "Setiap remaja mengalami pubertas dengan waktu yang berbeda.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "3-3": {
    "judul": "Kesehatan menstruasi",
    "pengertian": "Kesehatan menstruasi mencakup pemahaman siklus haid, kebersihan, kenyamanan, dan pengenalan gejala yang perlu ditangani.",
    "tujuan": "Mendorong pengelolaan menstruasi secara sehat dan bermartabat.",
    "materi": "Siklus menstruasi; pembalut bersih; cuci tangan; nyeri haid; tanda bahaya.",
    "contoh": "Ganti pembalut secara teratur sesuai kebutuhan dan konsultasikan perdarahan sangat banyak atau nyeri berat.",
    "pesan": "Menstruasi adalah proses biologis yang tidak perlu ditabukan.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "3-4": {
    "judul": "Kesehatan dan kesiapan calon pengantin",
    "pengertian": "Kesiapan menikah meliputi kesehatan fisik, mental, hubungan, pengetahuan reproduksi, dan perencanaan keluarga.",
    "tujuan": "Membantu calon pengantin mengambil keputusan yang matang.",
    "materi": "Pemeriksaan kesehatan; komunikasi pasangan; gizi; perencanaan kehamilan; kesiapan ekonomi.",
    "contoh": "Ikuti konseling pranikah dan pemeriksaan kesehatan sesuai layanan yang tersedia.",
    "pesan": "Pernikahan sehat membutuhkan kesiapan dan kesepakatan kedua pihak.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "3-5": {
    "judul": "Perencanaan kehamilan dan jarak kelahiran",
    "pengertian": "Perencanaan kehamilan membantu pasangan mempersiapkan kesehatan dan menentukan waktu kehamilan secara sadar.",
    "tujuan": "Mengurangi risiko kesehatan serta mendukung kesejahteraan keluarga.",
    "materi": "Kesehatan prakonsepsi; jarak kehamilan; gizi; konsultasi medis; dukungan pasangan.",
    "contoh": "Diskusikan rencana kehamilan dan metode penjarangan kelahiran bersama tenaga kesehatan.",
    "pesan": "Kehamilan yang direncanakan memberi ruang persiapan lebih baik.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "3-6": {
    "judul": "Keluarga berencana dan pengenalan pilihan kontrasepsi",
    "pengertian": "Keluarga berencana membantu individu atau pasangan merencanakan jumlah dan jarak kelahiran dengan pilihan metode yang sesuai.",
    "tujuan": "Meningkatkan pemahaman tentang pilihan kontrasepsi dan konsultasi yang aman.",
    "materi": "Metode jangka pendek dan panjang; efektivitas; efek samping; persetujuan sukarela; konsultasi.",
    "contoh": "Kunjungi fasilitas kesehatan untuk membandingkan pilihan kontrasepsi sesuai kondisi kesehatan.",
    "pesan": "Pilihan kontrasepsi harus berdasarkan informasi yang benar dan keputusan sukarela.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "3-7": {
    "judul": "Pencegahan perkawinan anak dan kesiapan berkeluarga",
    "pengertian": "Perkawinan anak dapat menghambat pendidikan, kesehatan, dan kesiapan sosial-ekonomi anak.",
    "tujuan": "Mendorong perlindungan anak serta kelanjutan pendidikan.",
    "materi": "Hak anak; risiko perkawinan dini; dukungan sekolah; komunikasi keluarga; aturan usia perkawinan.",
    "contoh": "Bicarakan cita-cita anak dan cari dukungan sekolah atau layanan perlindungan bila ada tekanan menikah dini.",
    "pesan": "Anak berhak tumbuh, belajar, dan merencanakan masa depannya.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "3-8": {
    "judul": "Pergaulan sehat, persetujuan, dan batasan pribadi",
    "pengertian": "Pergaulan sehat didasarkan pada saling menghormati, persetujuan yang bebas, dan penghargaan atas batas pribadi.",
    "tujuan": "Membantu remaja mengenali hubungan aman dan melindungi diri.",
    "materi": "Batas tubuh; persetujuan; tekanan teman sebaya; komunikasi asertif; bantuan tepercaya.",
    "contoh": "Latih remaja mengatakan tidak terhadap situasi yang membuat tidak nyaman dan mencari orang dewasa tepercaya.",
    "pesan": "Setiap orang berhak atas rasa aman dan penghormatan batas pribadi.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "3-9": {
    "judul": "Pengenalan infeksi menular seksual dan HIV",
    "pengertian": "Infeksi menular seksual adalah infeksi yang dapat ditularkan melalui kontak seksual tertentu; HIV menyerang sistem kekebalan tubuh.",
    "tujuan": "Meningkatkan literasi pencegahan, pemeriksaan, dan pengurangan stigma.",
    "materi": "Cara penularan; pencegahan; tes; pengobatan; kerahasiaan dan anti-stigma.",
    "contoh": "Cari informasi dari fasilitas kesehatan dan lakukan konsultasi atau tes bila ada risiko paparan.",
    "pesan": "Pemeriksaan dini dan layanan kesehatan lebih bermanfaat daripada stigma.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "3-10": {
    "judul": "Mengenali keluhan reproduksi dan mengakses layanan kesehatan",
    "pengertian": "Keluhan reproduksi dapat berupa nyeri, perdarahan tidak biasa, keputihan dengan gejala tertentu, atau masalah lain yang perlu dinilai tenaga kesehatan.",
    "tujuan": "Mendorong pertolongan yang tepat dan tidak menunda pemeriksaan.",
    "materi": "Tanda keluhan; pencatatan gejala; konsultasi; privasi pasien; rujukan.",
    "contoh": "Catat kapan keluhan muncul dan kunjungi Puskesmas atau dokter bila keluhan berat atau menetap.",
    "pesan": "Jangan malu meminta bantuan profesional untuk kesehatan reproduksi.",
    "referensi": "Kementerian Kesehatan RI; BKKBN; WHO; UNFPA"
  },
  "4-1": {
    "judul": "Hak perempuan dan kesetaraan kesempatan",
    "pengertian": "Hak perempuan mencakup kesempatan yang setara dalam pendidikan, pekerjaan, partisipasi, dan perlindungan dari diskriminasi.",
    "tujuan": "Meningkatkan penghormatan terhadap hak dan kesempatan perempuan.",
    "materi": "Kesetaraan kesempatan; akses layanan; pembagian peran; anti-diskriminasi.",
    "contoh": "Libatkan perempuan dalam keputusan keluarga dan dukung akses belajar serta bekerja sesuai pilihannya.",
    "pesan": "Kesempatan yang adil memperkuat keluarga dan masyarakat.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "4-2": {
    "judul": "Hak anak dan partisipasi anak dalam keluarga",
    "pengertian": "Anak memiliki hak untuk hidup, tumbuh, terlindungi, dan menyampaikan pendapat sesuai usia serta kematangannya.",
    "tujuan": "Mendorong keluarga menghormati hak dan suara anak.",
    "materi": "Hak dasar anak; perlindungan; partisipasi; kepentingan terbaik anak.",
    "contoh": "Libatkan anak memilih kegiatan keluarga yang sesuai usia dan dengarkan alasannya.",
    "pesan": "Suara anak penting dalam keputusan yang menyangkut kehidupannya.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "4-3": {
    "judul": "Mengenali bentuk kekerasan terhadap perempuan dan anak",
    "pengertian": "Kekerasan dapat berbentuk fisik, psikis, seksual, penelantaran, dan bentuk lain yang merugikan korban.",
    "tujuan": "Meningkatkan kemampuan mengenali tanda kekerasan dan mencari bantuan.",
    "materi": "Jenis kekerasan; tanda risiko; keselamatan korban; pelaporan dan dukungan.",
    "contoh": "Jika melihat tanda kekerasan, dengarkan tanpa menyalahkan dan hubungi layanan perlindungan setempat.",
    "pesan": "Korban berhak dipercaya, dilindungi, dan mendapatkan bantuan.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "4-4": {
    "judul": "Pencegahan kekerasan dalam rumah tangga",
    "pengertian": "KDRT merupakan tindakan kekerasan dalam lingkup rumah tangga yang mengancam keselamatan dan martabat anggota keluarga.",
    "tujuan": "Mendorong hubungan aman serta akses perlindungan.",
    "materi": "Bentuk KDRT; tanda hubungan tidak aman; keselamatan; bantuan hukum dan psikososial.",
    "contoh": "Kenali perilaku mengontrol atau mengancam dan simpan kontak layanan darurat serta UPTD PPA.",
    "pesan": "Kekerasan bukan cara menyelesaikan masalah keluarga.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "4-5": {
    "judul": "Pencegahan perundungan di sekolah dan lingkungan",
    "pengertian": "Perundungan adalah perilaku agresif berulang dengan ketimpangan kekuatan yang menyakiti korban.",
    "tujuan": "Menciptakan lingkungan belajar dan pergaulan yang aman.",
    "materi": "Jenis perundungan; peran saksi; pelaporan; dukungan korban; pemulihan.",
    "contoh": "Ajarkan anak melapor kepada guru atau orang dewasa tepercaya dan tidak ikut menyebarkan ejekan.",
    "pesan": "Hentikan perundungan sejak dini dan dukung korban.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "4-6": {
    "judul": "Perlindungan dari kekerasan seksual",
    "pengertian": "Kekerasan seksual melanggar hak atas tubuh, keselamatan, dan martabat seseorang.",
    "tujuan": "Meningkatkan pemahaman pencegahan dan respons aman yang berpihak pada korban.",
    "materi": "Batas tubuh; persetujuan; relasi kuasa; kerahasiaan; rujukan layanan.",
    "contoh": "Ajarkan nama bagian tubuh yang benar dan bahwa anak boleh menolak sentuhan yang membuat tidak aman.",
    "pesan": "Keselamatan korban dan penanganan yang tidak menyalahkan korban adalah prioritas.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "4-7": {
    "judul": "Perlindungan perempuan dan anak di ruang digital",
    "pengertian": "Ruang digital memiliki risiko pelecehan, penipuan, penyebaran data pribadi, dan eksploitasi.",
    "tujuan": "Meningkatkan keamanan dan literasi digital keluarga.",
    "materi": "Privasi; keamanan akun; pelaporan konten; bukti digital; pendampingan anak.",
    "contoh": "Aktifkan verifikasi dua langkah dan ajarkan anak tidak membagikan informasi pribadi.",
    "pesan": "Keamanan digital adalah bagian dari perlindungan keluarga.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "4-8": {
    "judul": "Pencegahan eksploitasi dan perdagangan orang",
    "pengertian": "Eksploitasi dan perdagangan orang dapat melibatkan penipuan, ancaman, atau penyalahgunaan kerentanan untuk mengambil keuntungan dari korban.",
    "tujuan": "Membantu keluarga mengenali tawaran berisiko dan mencari pertolongan.",
    "materi": "Modus perekrutan; dokumen; keamanan migrasi; tanda eksploitasi; pelaporan.",
    "contoh": "Periksa legalitas tawaran kerja dan hindari menyerahkan dokumen identitas kepada pihak tidak tepercaya.",
    "pesan": "Waspadai tawaran yang terlalu bagus dan membatasi kebebasan.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "4-9": {
    "judul": "Kepemimpinan dan keterlibatan perempuan dalam masyarakat",
    "pengertian": "Partisipasi perempuan berarti keterlibatan bermakna dalam keputusan dan kegiatan sosial, ekonomi, dan pemerintahan.",
    "tujuan": "Memperluas ruang kontribusi dan kepemimpinan perempuan.",
    "materi": "Kepercayaan diri; keterampilan organisasi; musyawarah; akses kesempatan.",
    "contoh": "Dorong perempuan menjadi pengurus kegiatan warga atau menyampaikan usulan dalam musyawarah.",
    "pesan": "Kepemimpinan tumbuh ketika setiap suara mendapat kesempatan.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "4-10": {
    "judul": "Cara mencari bantuan, melapor, dan mengakses layanan perlindungan",
    "pengertian": "Layanan perlindungan menyediakan pendampingan dan rujukan bagi perempuan serta anak yang mengalami kekerasan.",
    "tujuan": "Membantu masyarakat mengetahui langkah aman saat membutuhkan pertolongan.",
    "materi": "Keamanan segera; dokumentasi aman; UPTD PPA; Puskesmas; kepolisian; SAPA 129.",
    "contoh": "Dalam bahaya segera cari tempat aman; hubungi layanan darurat atau UPTD PPA dan simpan bukti bila aman dilakukan.",
    "pesan": "Mencari bantuan adalah langkah perlindungan, bukan aib.",
    "referensi": "Kementerian PPPA; Komnas Perempuan; UNICEF Indonesia; UU Perlindungan Anak"
  },
  "5-1": {
    "judul": "Komunikasi pasangan dan keharmonisan keluarga",
    "pengertian": "Komunikasi pasangan adalah pertukaran pikiran dan perasaan secara terbuka, saling menghormati, dan tidak mengancam.",
    "tujuan": "Memperkuat hubungan dan kerja sama dalam keluarga.",
    "materi": "Mendengar aktif; empati; penyampaian kebutuhan; kesepakatan bersama.",
    "contoh": "Jadwalkan waktu berbicara tentang kebutuhan rumah tangga tanpa saling menyalahkan.",
    "pesan": "Hubungan harmonis dibangun melalui komunikasi yang konsisten.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "5-2": {
    "judul": "Pembagian peran dan tanggung jawab rumah tangga",
    "pengertian": "Pembagian peran adalah kesepakatan adil mengenai pekerjaan rumah, pengasuhan, dan tanggung jawab ekonomi sesuai kondisi keluarga.",
    "tujuan": "Mengurangi beban tidak seimbang dan meningkatkan kerja sama.",
    "materi": "Pemetaan tugas; kesetaraan; fleksibilitas; evaluasi bersama.",
    "contoh": "Buat daftar pekerjaan rumah lalu bagi sesuai waktu dan kemampuan setiap anggota keluarga.",
    "pesan": "Rumah tangga berjalan lebih baik ketika tanggung jawab dibagi.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "5-3": {
    "judul": "Penyelesaian konflik melalui musyawarah",
    "pengertian": "Musyawarah keluarga adalah cara membahas perbedaan pendapat dengan tenang untuk mencapai keputusan bersama.",
    "tujuan": "Membantu keluarga menyelesaikan masalah tanpa kekerasan.",
    "materi": "Aturan berdialog; mendengar; fokus masalah; solusi dan tindak lanjut.",
    "contoh": "Saat emosi tinggi, jeda percakapan lalu kembali membahas satu masalah dengan pilihan solusi.",
    "pesan": "Perbedaan pendapat dapat diselesaikan dengan saling menghormati.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "5-4": {
    "judul": "Kesehatan mental dan pengelolaan stres keluarga",
    "pengertian": "Kesehatan mental mencakup kemampuan mengelola emosi, menghadapi tekanan, dan menjaga hubungan yang mendukung.",
    "tujuan": "Mendorong pengenalan stres dan pencarian bantuan bila diperlukan.",
    "materi": "Tanda stres; dukungan sosial; istirahat; relaksasi; layanan profesional.",
    "contoh": "Luangkan waktu istirahat dan ajak anggota keluarga membicarakan beban tanpa menghakimi.",
    "pesan": "Meminta bantuan ketika kewalahan adalah bentuk kepedulian.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "5-5": {
    "judul": "Waktu berkualitas dan kebiasaan baik bersama keluarga",
    "pengertian": "Waktu berkualitas adalah interaksi bermakna yang mempererat hubungan keluarga tanpa harus memerlukan biaya besar.",
    "tujuan": "Meningkatkan kelekatan dan kebiasaan positif keluarga.",
    "materi": "Makan bersama; bermain; kegiatan rutin; perhatian penuh.",
    "contoh": "Tetapkan satu waktu bebas gawai untuk makan atau berbincang bersama setiap hari.",
    "pesan": "Kebersamaan sederhana yang rutin sangat berarti.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "5-6": {
    "judul": "Pendampingan remaja dalam menghadapi masalah",
    "pengertian": "Pendampingan remaja membantu mereka memahami tantangan pertemanan, pendidikan, identitas, dan emosi dengan dukungan orang dewasa.",
    "tujuan": "Membangun kepercayaan dan kemampuan remaja mencari solusi aman.",
    "materi": "Mendengar tanpa menghakimi; privasi; dukungan sekolah; rujukan saat perlu.",
    "contoh": "Tanyakan apa yang dibutuhkan remaja sebelum menawarkan nasihat atau solusi.",
    "pesan": "Remaja memerlukan ruang didengar dan didampingi.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "5-7": {
    "judul": "Dukungan bagi keluarga orang tua tunggal",
    "pengertian": "Keluarga orang tua tunggal menjalankan pengasuhan dengan kebutuhan dukungan praktis, emosional, dan sosial yang beragam.",
    "tujuan": "Mendorong jejaring dukungan tanpa stigma.",
    "materi": "Pengaturan waktu; dukungan keluarga besar; akses layanan; kesejahteraan pengasuh.",
    "contoh": "Buat jaringan bantuan tepercaya untuk pengasuhan dan berbagi tugas ketika diperlukan.",
    "pesan": "Setiap bentuk keluarga berhak mendapatkan dukungan dan penghormatan.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "5-8": {
    "judul": "Keluarga ramah lansia dan penyandang disabilitas",
    "pengertian": "Keluarga ramah adalah keluarga yang menyediakan lingkungan aman, aksesibel, dan menghargai pilihan lansia serta penyandang disabilitas.",
    "tujuan": "Meningkatkan inklusi dan kemandirian anggota keluarga.",
    "materi": "Aksesibilitas rumah; komunikasi; pencegahan jatuh; partisipasi; dukungan kesehatan.",
    "contoh": "Rapikan jalur berjalan, sediakan penerangan cukup, dan tanyakan bantuan yang benar-benar dibutuhkan.",
    "pesan": "Hormati kemampuan, pilihan, dan martabat setiap anggota keluarga.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "5-9": {
    "judul": "Dukungan keluarga saat sakit, kehilangan, atau menghadapi krisis",
    "pengertian": "Krisis keluarga dapat terjadi karena sakit, kehilangan, bencana, atau tekanan ekonomi dan membutuhkan dukungan bersama.",
    "tujuan": "Memperkuat kemampuan keluarga menghadapi masa sulit.",
    "materi": "Dukungan emosional; kebutuhan dasar; pembagian tugas; bantuan sosial dan profesional.",
    "contoh": "Susun daftar kontak penting dan tawarkan bantuan konkret seperti mengantar berobat atau menyiapkan makanan.",
    "pesan": "Tidak perlu menghadapi masa sulit sendirian.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "5-10": {
    "judul": "Keluarga peduli lingkungan dan siaga bencana",
    "pengertian": "Keluarga peduli lingkungan mengurangi dampak aktivitas rumah tangga dan menyiapkan langkah keselamatan saat bencana.",
    "tujuan": "Membangun kebiasaan ramah lingkungan dan kesiapsiagaan.",
    "materi": "Pilah sampah; hemat air dan energi; rencana evakuasi; tas siaga; informasi resmi.",
    "contoh": "Latih jalur keluar rumah dan siapkan dokumen penting serta kebutuhan dasar dalam tas siaga.",
    "pesan": "Kebiasaan kecil dan kesiapan bersama melindungi keluarga.",
    "referensi": "BKKBN; Kementerian PPPA; Kementerian Kesehatan RI; BNPB"
  },
  "6-1": {
    "judul": "Menyusun anggaran rumah tangga",
    "pengertian": "Anggaran rumah tangga adalah rencana pemasukan dan pengeluaran untuk memenuhi kebutuhan serta tujuan keluarga.",
    "tujuan": "Membantu keluarga mengelola uang secara terarah.",
    "materi": "Pencatatan pemasukan; kebutuhan pokok; tabungan; evaluasi pengeluaran.",
    "contoh": "Catat semua pengeluaran selama sebulan lalu susun batas belanja berdasarkan kemampuan.",
    "pesan": "Rencana sederhana membantu uang digunakan lebih bijak.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  },
  "6-2": {
    "judul": "Membedakan kebutuhan dan keinginan",
    "pengertian": "Kebutuhan adalah hal penting untuk hidup dan kesejahteraan, sedangkan keinginan dapat ditunda sesuai prioritas.",
    "tujuan": "Mendorong keputusan belanja yang lebih sadar.",
    "materi": "Skala prioritas; belanja terencana; pengaruh promosi; tujuan keuangan.",
    "contoh": "Sebelum membeli, tanyakan apakah barang diperlukan sekarang atau dapat ditunda.",
    "pesan": "Utamakan kebutuhan sebelum memenuhi keinginan.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  },
  "6-3": {
    "judul": "Menabung dan menyiapkan dana darurat",
    "pengertian": "Tabungan adalah dana yang disisihkan untuk tujuan tertentu; dana darurat dipakai menghadapi kebutuhan tak terduga.",
    "tujuan": "Membangun ketahanan finansial keluarga.",
    "materi": "Tujuan tabungan; konsistensi; dana mudah diakses; penyimpanan aman.",
    "contoh": "Sisihkan nominal kecil setiap menerima penghasilan dan pisahkan dari uang belanja.",
    "pesan": "Menabung secara rutin lebih penting daripada menunggu uang berlebih.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  },
  "6-4": {
    "judul": "Perencanaan biaya pendidikan dan masa depan keluarga",
    "pengertian": "Perencanaan jangka panjang membantu keluarga memperkirakan kebutuhan biaya pendidikan dan tujuan masa depan.",
    "tujuan": "Mengurangi risiko kekurangan dana saat kebutuhan penting muncul.",
    "materi": "Estimasi biaya; target waktu; prioritas; evaluasi berkala.",
    "contoh": "Hitung kebutuhan sekolah tahunan dan sisihkan dana bulanan sesuai kemampuan.",
    "pesan": "Tujuan besar dimulai dari rencana dan langkah kecil.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  },
  "6-5": {
    "judul": "Pengelolaan utang dan kebiasaan belanja bijak",
    "pengertian": "Pengelolaan utang berarti memahami kewajiban pembayaran, biaya, dan kemampuan membayar sebelum meminjam.",
    "tujuan": "Mengurangi risiko utang berlebihan.",
    "materi": "Cicilan; bunga dan biaya; prioritas pelunasan; belanja impulsif.",
    "contoh": "Catat semua cicilan dan periksa total biaya pinjaman sebelum menyetujui perjanjian.",
    "pesan": "Jangan meminjam melebihi kemampuan membayar.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  },
  "6-6": {
    "judul": "Mengenali penipuan keuangan, pinjaman ilegal, dan judi daring",
    "pengertian": "Penipuan keuangan memanfaatkan janji keuntungan, tekanan, atau manipulasi; pinjaman ilegal dan judi daring dapat merugikan keluarga.",
    "tujuan": "Meningkatkan kewaspadaan terhadap risiko keuangan digital.",
    "materi": "Cek legalitas; perlindungan data; tanda penipuan; risiko judi; pelaporan.",
    "contoh": "Jangan bagikan OTP atau PIN; periksa izin layanan keuangan melalui kanal resmi OJK.",
    "pesan": "Waspadai janji untung cepat dan permintaan data rahasia.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  },
  "6-7": {
    "judul": "Mengembangkan keterampilan dan potensi ekonomi keluarga",
    "pengertian": "Potensi ekonomi keluarga dapat ditingkatkan melalui keterampilan, pengelolaan sumber daya, dan peluang usaha yang sesuai kemampuan.",
    "tujuan": "Mendorong sumber penghasilan yang berkelanjutan.",
    "materi": "Pemetaan keterampilan; pelatihan; kebutuhan pasar; perencanaan sederhana.",
    "contoh": "Daftar keterampilan anggota keluarga lalu pilih satu yang bisa diuji menjadi layanan atau produk.",
    "pesan": "Mulai dari kemampuan dan kebutuhan pasar yang nyata.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  },
  "6-8": {
    "judul": "Merintis usaha rumahan dan mengenal UPPKA",
    "pengertian": "Usaha rumahan adalah kegiatan ekonomi dari rumah; UPPKA merupakan kelompok kegiatan pemberdayaan ekonomi keluarga dalam program Bangga Kencana.",
    "tujuan": "Mengenalkan langkah awal usaha dan dukungan kelompok.",
    "materi": "Ide usaha; biaya awal; mutu produk; pemasaran; jejaring UPPKA.",
    "contoh": "Uji penjualan produk skala kecil dan cari informasi kelompok UPPKA melalui penyuluh KB setempat.",
    "pesan": "Usaha bertumbuh melalui pencatatan, kualitas, dan kerja sama.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  },
  "6-9": {
    "judul": "Pemasaran digital dan pencatatan keuangan usaha",
    "pengertian": "Pemasaran digital membantu mengenalkan produk secara daring; pencatatan usaha memisahkan arus uang bisnis dari uang pribadi.",
    "tujuan": "Meningkatkan pengelolaan usaha keluarga.",
    "materi": "Foto produk; deskripsi; layanan pelanggan; pemasukan-pengeluaran; laba.",
    "contoh": "Unggah foto produk yang jelas dan catat setiap penjualan serta biaya bahan setiap hari.",
    "pesan": "Promosi yang baik perlu disertai pencatatan yang rapi.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  },
  "6-10": {
    "judul": "Pemanfaatan pekarangan dan pengelolaan sampah bernilai ekonomi",
    "pengertian": "Pekarangan dan sampah terpilah dapat dimanfaatkan untuk pangan rumah tangga dan kegiatan ekonomi yang aman.",
    "tujuan": "Mendorong ketahanan pangan kecil dan pengurangan sampah.",
    "materi": "Tanaman pangan; kompos; pemilahan; bank sampah; kebersihan kerja.",
    "contoh": "Tanam sayuran dalam pot dan pisahkan sampah anorganik bersih untuk disetor ke bank sampah.",
    "pesan": "Lingkungan yang dikelola baik dapat memberi manfaat ekonomi.",
    "referensi": "Otoritas Jasa Keuangan; Bank Indonesia; BKKBN; Kementerian UMKM; Kementerian Lingkungan Hidup"
  }
};

function aman(teks) {
  return String(teks || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}
function siap() {
  const bagian = document.getElementById("belajar");
  const panel = document.getElementById("artikel-subtema");
  const judul = document.getElementById("artikel-judul");
  const kategori = document.getElementById("artikel-kategori");
  const isi = document.getElementById("artikel-isi");
  const tutup = document.getElementById("tutup-artikel");
  if (!bagian || !panel || !judul || !kategori || !isi) return;
  const kartu = bagian.querySelectorAll(".learning-card");
  kartu.forEach((k, i) => {
    const namaTema = k.querySelector("h3")?.textContent.trim() || "Materi Edukasi";
    k.querySelectorAll(".subtema-content ol li").forEach((li,j) => {
      const kode = `${i+1}-${j+1}`;
      li.tabIndex = 0;
      li.setAttribute("role", "button");
      li.setAttribute("aria-label", "Baca artikel: " + li.textContent.trim());
      function buka() {
        const a = artikel[kode];
        kategori.textContent = namaTema;
        judul.textContent = a ? a.judul : li.textContent.trim();
        if (a) {
          const pokok = a.materi.split(";").map(x=>x.trim()).filter(Boolean);
          isi.innerHTML = `<h3>1. Pengertian</h3><p>${aman(a.pengertian)}</p>` +
            `<h3>2. Tujuan Edukasi</h3><p>${aman(a.tujuan)}</p>` +
            `<h3>3. Materi Utama</h3><ul>${pokok.map(x=>`<li>${aman(x)}</li>`).join("")}</ul>` +
            `<h3>4. Contoh Penerapan Sehari-hari</h3><p>${aman(a.contoh)}</p>` +
            `<h3>5. Pesan Kunci</h3><p><strong>${aman(a.pesan)}</strong></p>` +
            `<h3>6. Sumber Referensi</h3><p>${aman(a.referensi)}.</p>` +
            `<p><small>Materi edukasi umum. Referensi di atas merupakan rujukan institusi untuk verifikasi dan pendalaman, bukan kutipan dokumen spesifik. Untuk masalah medis, hukum, atau perlindungan, konsultasikan kepada layanan berwenang.</small></p>`;
        } else {
          isi.textContent = "Materi belum tersedia. Periksa urutan kartu dan subtema.";
        }
        panel.hidden = false;
        panel.scrollIntoView({behavior:"smooth",block:"start"});
      }
      li.addEventListener("click", buka);
      li.addEventListener("keydown", e=>{if(e.key === "Enter" || e.key === " "){e.preventDefault();buka();}});
    });
  });
  if (tutup) tutup.addEventListener("click", ()=>{panel.hidden=true;});
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",siap); else siap();
})();

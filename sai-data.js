window.SAI_DATA = {
  metadata: {
    title: "SAI DATA – Satu Data Keluarga Kota Metro",
    source_periods: ["Tahun 2025", "Februari 2026"],
    notes: [
      "Angka dipertahankan sesuai infografik sumber.",
      "iBangga: angka grafik berbeda dengan tabel untuk 2021–2024.",
      "KRS: rincian kecamatan berjumlah 24.220, ringkasan 24.222.",
      "Stunting 2,96% dari EPBGM Februari 2026; 14,8% dari SSGI 2024.",
      "mCPR: capaian 84,7% pada kotak dan 84,8% pada tabel."
    ]
  },

  sdm_eksternal_2025: {
    year: 2025,
    categories: [
      {
        name: "Penyuluh Keluarga Berencana (PKB)",
        total: 10,
        by_district: [
          {district:"Metro Utara",value:2},
          {district:"Metro Pusat",value:2},
          {district:"Metro Timur",value:2},
          {district:"Metro Barat",value:2},
          {district:"Metro Selatan",value:2}
        ]
      },
      {
        name: "Kader IMP / Kader KB dan Sub IMP",
        total: 336,
        by_district: [
          {district:"Metro Utara",value:83},
          {district:"Metro Pusat",value:94},
          {district:"Metro Timur",value:71},
          {district:"Metro Barat",value:48},
          {district:"Metro Selatan",value:40}
        ]
      },
      {
        name: "Tim Pendamping Keluarga (TPK)",
        total: 390,
        by_district: [
          {district:"Metro Utara",value:72},
          {district:"Metro Pusat",value:90},
          {district:"Metro Timur",value:87},
          {district:"Metro Barat",value:72},
          {district:"Metro Selatan",value:69}
        ]
      },
      {
        name: "Kader PATBM",
        total: 49,
        by_district: [
          {district:"Metro Utara",value:8},
          {district:"Metro Pusat",value:8},
          {district:"Metro Timur",value:11},
          {district:"Metro Barat",value:12},
          {district:"Metro Selatan",value:10}
        ]
      }
    ]
  },

  unmet_need: {
    year: 2025,
    target_2025: 11.9,
    realization_2025: 14.2,
    trend: [
      {year:2020,value:12.12},
      {year:2021,value:17.92},
      {year:2022,value:22.98},
      {year:2023,value:4.10},
      {year:2024,value:5.7},
      {year:2025,value:14.2}
    ]
  },

  mcpr: {
    year: 2025,
    target: 72.9,
    realization: 61.8,
    achievement_percent_box: 84.7,
    achievement_percent_table: 84.8,
    gap_percentage_points: -11.1,
    pus_total: 23942,
    pus_modern_method: 14806,
    trend: [
      {year:2020,value:72.96},
      {year:2021,value:57.58},
      {year:2022,value:65.00},
      {year:2023,value:73.40},
      {year:2024,value:71.90},
      {year:2025,value:61.80}
    ]
  },

  ibangga: {
    year: 2025,
    target_2025: 56.15,
    realization_2025: 80.6,
    achievement_percent: 143.5,
    surplus_points: 24.45,
    chart_trend: [
      {year:2020,value:51.11},
      {year:2021,value:52.47},
      {year:2022,value:54.89},
      {year:2023,value:56.82},
      {year:2024,value:56.19},
      {year:2025,value:80.6}
    ],
    table_realization_trend: [
      {year:2020,value:51.11},
      {year:2021,value:53.53},
      {year:2022,value:57.32},
      {year:2023,value:65.34},
      {year:2024,value:65.78},
      {year:2025,value:80.6}
    ]
  },

  bangga_kencana_indicators_2025: {
    source: "Pemutakhiran Keluarga 2025 (PK 2025)",
    indicators: [
      {no:1,indicator:"Indeks Pembangunan Keluarga (iBangga)",unit:"Skala 0-100",target:56.15,realization:80.6,achievement_percent:143.5,status:"Tercapai"},
      {no:2,indicator:"Angka Prevalensi Kontrasepsi Modern (mCPR)",unit:"Persen",target:72.9,realization:61.8,achievement_percent:84.8,status:"Belum tercapai"},
      {no:3,indicator:"Angka Kelahiran Total (TFR)",unit:"Rata-rata anak per wanita",target:2.31,realization:2.04,achievement_percent:88.3,status:"Tercapai sesuai penandaan sumber"},
      {no:4,indicator:"ASFR 15-19 tahun",unit:"Kelahiran per 1000 WUS",target:16,realization:14.7,achievement_percent:91.9,status:"Tercapai sesuai penandaan sumber"},
      {no:5,indicator:"Unmet Need",unit:"Persen",target:11.9,realization:14.2,achievement_percent:119.3,status:"Belum tercapai"},
      {no:6,indicator:"Median Usia Kawin Pertama Perempuan (MUKP)",unit:"Tahun",target:22.9,realization:21.4,achievement_percent:93.4,status:"Belum tercapai"},
      {no:7,indicator:"PUS",unit:"Pasangan",target:19550,realization:23942,achievement_percent:122.5,status:"Tercapai"},
      {no:8,indicator:"MKJP",unit:"Persen",target:31,realization:34,achievement_percent:109.7,status:"Tercapai"},
      {no:9,indicator:"Indeks Kepedulian terhadap Isu Kependudukan",unit:"Skala 0-100",target:null,realization:56.3,achievement_percent:null,status:"Informasi"},
      {no:10,indicator:"Indeks Pembangunan Berwawasan Kependudukan",unit:"Skala 0-100",target:null,realization:76.6,achievement_percent:null,status:"Informasi"}
    ],
    summary: {achieved:5,not_achieved:3,information:2}
  },

  stunting_epbgm_feb_2026: {
    period: "Februari 2026",
    source: "EPBGM",
    target_children: 8286,
    stunted_total: 245,
    prevalence_percent: 2.96,
    categories: [
      {category:"Sangat pendek",count:63,percent:0.76},
      {category:"Pendek",count:182,percent:2.20},
      {category:"Normal",count:8030,percent:96.91},
      {category:"Tinggi",count:8,percent:0.10},
      {category:"Outlier",count:3,percent:0.04}
    ],
    district_highest: [
      {district:"Hadimulyo Barat",prevalence_percent:6.54},
      {district:"Rejomulyo",prevalence_percent:6.14},
      {district:"Sumbersari",prevalence_percent:5.05}
    ],
    district_lowest: [
      {district:"Yosodadi",prevalence_percent:0.56},
      {district:"Yosorejo",prevalence_percent:0.78}
    ],
    stunting_by_district: [
      {district:"Hadimulyo Barat",very_short:10,short:21,stunted_total:31,target:474,prevalence_percent:6.54},
      {district:"Rejomulyo",very_short:3,short:14,stunted_total:17,target:277,prevalence_percent:6.14},
      {district:"Sumbersari",very_short:4,short:6,stunted_total:10,target:198,prevalence_percent:5.05},
      {district:"Tejosari",very_short:1,short:8,stunted_total:9,target:201,prevalence_percent:4.48},
      {district:"Margorejo",very_short:6,short:5,stunted_total:11,target:245,prevalence_percent:4.49}
    ],
    ssgi_2024_prevalence_percent: 14.8
  },

  krs_pk_2025: {
    year: 2025,
    source: "Hasil Pendataan Keluarga (PK) Tahun 2025",
    total_families: 45082,
    target_families_summary: 24222,
    krs_families: 3436,
    non_risk_families: 20784,
    krs_percent: 14.19,
    by_district: [
      {district:"Metro Pusat",target_families:7119,krs_families:1140,krs_percent:16.02},
      {district:"Metro Utara",target_families:5247,krs_families:777,krs_percent:14.81},
      {district:"Metro Barat",target_families:4356,krs_families:628,krs_percent:14.42},
      {district:"Metro Timur",target_families:4825,krs_families:607,krs_percent:12.59},
      {district:"Metro Selatan",target_families:2673,krs_families:284,krs_percent:10.62}
    ],
    risk_factor_screening: [
      {factor:"Fasilitas lingkungan tidak sehat",count:650},
      {factor:"Tidak memiliki sumber air minum utama yang layak",count:772},
      {factor:"Tidak memiliki jamban yang layak",count:33},
      {factor:"Terlalu muda saat menikah (<20 tahun)",count:6138},
      {factor:"Terlalu tua saat menikah (>35-40 tahun)",count:156},
      {factor:"Terlalu dekat jarak kelahiran (<2 tahun)",count:4736},
      {factor:"Terlalu banyak anak (>3 anak)",count:9543},
      {factor:"Bukan peserta KB modern",count:6696}
    ],
    target_population: [
      {group:"Baduta (0-23 bulan)",count:2061},
      {group:"Balita (24-59 bulan)",count:5344},
      {group:"Ibu hamil",count:661},
      {group:"PUS",count:24091}
    ],
    target_population_total_persons: 32157
  }
};

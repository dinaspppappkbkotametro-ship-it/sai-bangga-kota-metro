(function () {
  "use strict";

  const data = window.SAI_DATA;
  const root = document.getElementById("sai-data-tambahan");

  if (!root || !data) {
    console.error("SAI DATA: elemen atau file data belum ditemukan.");
    return;
  }

  const esc = (v) => String(v ?? "-").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[c]);

  const num = (v) => Number(v || 0).toLocaleString("id-ID");
  const pct = (v) => `${Number(v || 0).toLocaleString("id-ID", {
    maximumFractionDigits: 2
  })}%`;

  const card = (label, value, note = "") => `
    <div class="sd-card">
      <span>${esc(label)}</span>
      <strong>${esc(value)}</strong>
      ${note ? `<small>${esc(note)}</small>` : ""}
    </div>`;

  const table = (headers, rows) => `
    <div class="sd-table-wrap">
      <table class="sd-table">
        <thead><tr>${headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${rows.map(row => `<tr>${row.map(v => `<td>${esc(v)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>`;

  const bars = (items, labelKey, valueKey, suffix = "") => {
    if (!items?.length) return "<p>Data belum tersedia.</p>";
    const max = Math.max(...items.map(x => Number(x[valueKey]) || 0), 1);
    return `<div class="sd-bars">${items.map(item => {
      const value = Number(item[valueKey]) || 0;
      return `
        <div class="sd-bar-row">
          <div class="sd-bar-label">${esc(item[labelKey])}</div>
          <div class="sd-bar-track">
            <div class="sd-bar-fill" style="width:${Math.max(0, value / max * 100)}%"></div>
          </div>
          <strong>${esc(value.toLocaleString("id-ID"))}${esc(suffix)}</strong>
        </div>`;
    }).join("")}</div>`;
  };

  const section = (eyebrow, title, content, note = "") => `
    <section class="sd-panel">
      <div class="sd-panel-heading">
        <span>${esc(eyebrow)}</span>
        <h3>${esc(title)}</h3>
      </div>
      ${content}
      ${note ? `<p class="sd-note">${esc(note)}</p>` : ""}
    </section>`;

  const trendTable = (items) =>
    table(["Tahun", "Realisasi"], (items || []).map(x => [
      x.year, x.value
    ]));

  // 1. SDM EKSTERNAL
  const sdm = data.sdm_eksternal_2025;
  const sdmContent = (sdm?.categories || []).map(category => `
    <div class="sd-subpanel">
      <h4>${esc(category.name)} <span>${num(category.total)} orang</span></h4>
      ${bars(category.by_district, "district", "value")}
    </div>`).join("");

  // 2. UNMET NEED
  const unmet = data.unmet_need;
  const unmetContent = `
    <div class="sd-kpis">
      ${card("Target 2025", pct(unmet?.target_2025))}
      ${card("Realisasi 2025", pct(unmet?.realization_2025))}
    </div>
    <h4>Tren Unmet Need</h4>
    ${bars(unmet?.trend, "year", "value", "%")}
    ${trendTable(unmet?.trend)}`;

  // 3. mCPR
  const mcpr = data.mcpr;
  const mcprContent = `
    <div class="sd-kpis">
      ${card("Target", pct(mcpr?.target))}
      ${card("Realisasi", pct(mcpr?.realization))}
      ${card("Capaian", pct(mcpr?.achievement_percent_table), "Angka pada tabel perbandingan")}
      ${card("PUS", num(mcpr?.pus_total))}
      ${card("Peserta metode modern", num(mcpr?.pus_modern_method))}
      ${card("Selisih dari target", `${num(mcpr?.gap_percentage_points)} poin`)}
    </div>
    <h4>Tren mCPR</h4>
    ${bars(mcpr?.trend, "year", "value", "%")}
    ${trendTable(mcpr?.trend)}
    <p class="sd-note">Catatan sumber: infografik menampilkan capaian 84,7% pada kotak capaian dan 84,8% pada tabel perbandingan. Keduanya ditampilkan sesuai sumber.</p>`;

  // 4. iBANGGA
  const ib = data.ibangga;
  const ibanggaContent = `
    <div class="sd-kpis">
      ${card("Target 2025", num(ib?.target_2025))}
      ${card("Realisasi 2025", num(ib?.realization_2025))}
      ${card("Capaian", pct(ib?.achievement_percent))}
      ${card("Di atas target", `${num(ib?.surplus_points)} poin`)}
    </div>
    <h4>Tren pada grafik sumber</h4>
    ${bars(ib?.chart_trend, "year", "value")}
    ${trendTable(ib?.chart_trend)}
    <h4>Realisasi pada tabel sumber</h4>
    ${trendTable(ib?.table_realization_trend)}
    <p class="sd-note">Catatan: tren pada grafik dan tabel sumber memiliki angka berbeda untuk beberapa tahun. Data ditampilkan terpisah sesuai sumber.</p>`;

  // 5. INDIKATOR BANGGA KENCANA
  const bk = data.bangga_kencana_indicators_2025;
  const bkContent = `
    <div class="sd-kpis">
      ${card("Indikator tercapai", num(bk?.summary?.achieved))}
      ${card("Indikator belum tercapai", num(bk?.summary?.not_achieved))}
    </div>
    ${table(
      ["No.", "Indikator", "Satuan", "Target", "Realisasi", "Capaian", "Status"],
      (bk?.indicators || []).map(x => [
        x.no, x.indicator, x.unit, x.target, x.realization,
        pct(x.achievement_percent), x.status
      ])
    )}`;

  // 6. STUNTING EPBGM
  const st = data.stunting_epbgm_feb_2026;
  const stuntingContent = `
    <div class="sd-kpis">
      ${card("Balita yang diukur", num(st?.target_children))}
      ${card("Balita stunting", num(st?.stunted_total))}
      ${card("Prevalensi EPBGM", pct(st?.prevalence_percent), st?.period)}
      ${card("SSGI 2024", pct(st?.ssgi_2024_prevalence_percent), "Sumber dan periode berbeda")}
    </div>
    <h4>Status gizi berdasarkan kategori</h4>
    ${table(["Kategori", "Jumlah", "Persentase"], (st?.categories || []).map(x => [
      x.category, num(x.count), pct(x.percent)
    ]))}
    <h4>Wilayah dengan prevalensi tertinggi</h4>
    ${table(["Kecamatan/kelurahan", "Prevalensi"], (st?.district_highest || []).map(x => [
      x.district, pct(x.prevalence_percent)
    ]))}
    <h4>Wilayah dengan prevalensi terendah</h4>
    ${table(["Kecamatan/kelurahan", "Prevalensi"], (st?.district_lowest || []).map(x => [
      x.district, pct(x.prevalence_percent)
    ]))}
    <h4>Rincian wilayah</h4>
    ${table(["Wilayah", "Sangat pendek", "Pendek", "Stunting", "Sasaran", "Prevalensi"], (st?.stunting_by_district || []).map(x => [
      x.district, num(x.very_short), num(x.short), num(x.stunted_total),
      num(x.target), pct(x.prevalence_percent)
    ]))}
    <p class="sd-note">Prevalensi 2,96% bersumber dari EPBGM Februari 2026. Angka SSGI 2024 sebesar 14,8% merupakan data dari sumber dan periode yang berbeda, sehingga tidak dapat dibandingkan langsung tanpa memperhatikan metodologinya.</p>`;

  // 7. KRS PK
  const krs = data.krs_pk_2025;
  const krsContent = `
    <div class="sd-kpis">
      ${card("Total keluarga", num(krs?.total_families))}
      ${card("Keluarga sasaran", num(krs?.target_families_summary))}
      ${card("Keluarga berisiko stunting", num(krs?.krs_families))}
      ${card("Keluarga tidak berisiko", num(krs?.non_risk_families))}
      ${card("Persentase KRS", pct(krs?.krs_percent))}
    </div>
    <h4>Keluarga berisiko stunting per kecamatan</h4>
    ${table(["Kecamatan", "Keluarga sasaran", "KRS", "Persentase KRS"], (krs?.by_district || []).map(x => [
      x.district, num(x.target_families), num(x.krs_families), pct(x.krs_percent)
    ]))}
    <h4>Faktor risiko keluarga</h4>
    ${bars(krs?.risk_factor_screening, "factor", "count")}
    ${table(["Faktor risiko", "Jumlah"], (krs?.risk_factor_screening || []).map(x => [
      x.factor, num(x.count)
    ]))}
    <h4>Kelompok sasaran</h4>
    ${table(["Kelompok", "Jumlah"], (krs?.target_population || []).map(x => [
      x.group, num(x.count)
    ]))}
    <p class="sd-note">Catatan sumber: jumlah sasaran pada rincian kecamatan berjumlah 24.220 keluarga, sedangkan ringkasan sumber mencantumkan 24.222 keluarga. Angka dipertahankan sesuai masing-masing sajian sumber.</p>`;

  // TAMPILKAN DASHBOARD
  root.innerHTML = `
    <style>
      #sai-data-tambahan {
        max-width: 1180px;
        margin: 34px auto 10px;
        padding: 0 14px;
        color: #17324d;
      }
      #sai-data-tambahan * { box-sizing: border-box; }
      #sai-data-tambahan .sd-intro {
        margin-bottom: 22px;
        padding: 24px;
        border-radius: 18px;
        background: linear-gradient(135deg, #e7f5ff, #f4faff);
        border: 1px solid #c9e6fa;
      }
      #sai-data-tambahan .sd-intro span,
      #sai-data-tambahan .sd-panel-heading span {
        color: #0878bd;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      #sai-data-tambahan h2 {
        margin: 7px 0;
        color: #124d78;
        font-size: 26px;
      }
      #sai-data-tambahan .sd-intro p { margin: 6px 0 0; line-height: 1.6; }
      #sai-data-tambahan .sd-panel {
        margin: 18px 0;
        padding: 22px;
        background: #fff;
        border: 1px solid #dce8f1;
        border-radius: 16px;
        box-shadow: 0 5px 18px rgba(24, 70, 105, .06);
      }
      #sai-data-tambahan .sd-panel-heading {
        margin-bottom: 18px;
        padding-bottom: 12px;
        border-bottom: 1px solid #e5eef5;
      }
      #sai-data-tambahan h3 {
        margin: 5px 0 0;
        color: #164f79;
        font-size: 21px;
      }
      #sai-data-tambahan h4 {
        margin: 20px 0 12px;
        color: #245b80;
        font-size: 15px;
      }
      #sai-data-tambahan h4 span {
        color: #0878bd;
        font-size: 13px;
        margin-left: 6px;
      }
      #sai-data-tambahan .sd-kpis {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
        gap: 12px;
        margin: 14px 0 20px;
      }
      #sai-data-tambahan .sd-card {
        min-width: 0;
        padding: 15px;
        border-radius: 12px;
        background: #f0f8fe;
        border: 1px solid #d8ebf8;
      }
      #sai-data-tambahan .sd-card span {
        display: block;
        color: #4b6579;
        font-size: 12px;
      }
      #sai-data-tambahan .sd-card strong {
        display: block;
        margin: 7px 0 3px;
        color: #075b94;
        font-size: 23px;
        overflow-wrap: anywhere;
      }
      #sai-data-tambahan .sd-card small {
        color: #60788b;
        font-size: 11px;
      }
      #sai-data-tambahan .sd-subpanel {
        margin: 12px 0;
        padding: 15px;
        background: #f8fbfe;
        border-radius: 12px;
      }
      #sai-data-tambahan .sd-bars {
        display: grid;
        gap: 10px;
        margin: 12px 0 20px;
      }
      #sai-data-tambahan .sd-bar-row {
        display: grid;
        grid-template-columns: minmax(110px, 1fr) minmax(90px, 2fr) 65px;
        gap: 10px;
        align-items: center;
        font-size: 12px;
      }
      #sai-data-tambahan .sd-bar-label { overflow-wrap: anywhere; }
      #sai-data-tambahan .sd-bar-track {
        height: 12px;
        overflow: hidden;
        background: #e8f0f6;
        border-radius: 20px;
      }
      #sai-data-tambahan .sd-bar-fill {
        height: 100%;
        min-width: 2px;
        background: linear-gradient(90deg, #38a6e8, #0878bd);
        border-radius: 20px;
      }
      #sai-data-tambahan .sd-bar-row strong {
        color: #164f79;
        text-align: right;
      }
      #sai-data-tambahan .sd-table-wrap {
        width: 100%;
        overflow-x: auto;
        margin: 12px 0 20px;
      }
      #sai-data-tambahan .sd-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 12px;
        min-width: 520px;
      }
      #sai-data-tambahan .sd-table th {
        padding: 11px 10px;
        color: #fff;
        background: #176b9e;
        text-align: left;
      }
      #sai-data-tambahan .sd-table td {
        padding: 10px;
        border-bottom: 1px solid #e4edf4;
        color: #29475d;
        vertical-align: top;
      }
      #sai-data-tambahan .sd-table tr:nth-child(even) td { background: #f5faff; }
      #sai-data-tambahan .sd-note {
        margin: 14px 0 0;
        padding: 11px 13px;
        color: #526a7d;
        background: #f3f7fa;
        border-left: 3px solid #58a9d8;
        border-radius: 5px;
        font-size: 12px;
        line-height: 1.6;
      }
      @media(max-width:600px) {
        #sai-data-tambahan { padding: 0 9px; }
        #sai-data-tambahan .sd-panel { padding: 15px; }
        #sai-data-tambahan h2 { font-size: 22px; }
        #sai-data-tambahan h3 { font-size: 18px; }
        #sai-data-tambahan .sd-bar-row {
          grid-template-columns: 100px minmax(55px, 1fr) 48px;
          gap: 6px;
          font-size: 11px;
        }
      }
    </style>

    <div class="sd-intro">
      <span>SAI DATA • Dashboard Pemantauan</span>
      <h2>Data Program Pembangunan Keluarga</h2>
      <p>Informasi SDM pendukung, capaian program Bangga Kencana, stunting, dan keluarga berisiko stunting di Kota Metro.</p>
    </div>

    ${section("SDM Pendukung", "Sumber Daya Manusia Eksternal Tahun 2025", sdmContent)}
    ${section("Indikator Program", "Unmet Need", unmetContent)}
    ${section("Indikator Program", "Modern Contraceptive Prevalence Rate (mCPR)", mcprContent)}
    ${section("Indikator Program", "Indeks Pembangunan Keluarga (iBangga)", ibanggaContent)}
    ${section("Capaian Program", "10 Indikator Bangga Kencana Tahun 2025", bkContent)}
    ${section("Data Gizi Anak", "Pemantauan Stunting EPBGM Februari 2026", stuntingContent)}
    ${section("Data Keluarga", "Keluarga Risiko Stunting (KRS) PK Tahun 2025", krsContent)}

    <p class="sd-note">Sumber data mengikuti infografik dan dokumen yang menjadi dasar penyusunan dashboard. Perhatikan periode, definisi indikator, dan catatan perbedaan angka pada masing-masing sajian.</p>
  `;
})();

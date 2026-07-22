/* ================================================================
   ✏️  CONFIG.JS — FILE KONFIGURASI PORTOFOLIO
   ================================================================
   Halo! File ini adalah SATU-SATUNYA file yang perlu kamu ubah.
   Ikuti petunjuk di setiap bagian, lalu simpan dan refresh browser.
   Jangan ubah file lain kecuali kamu sudah paham JavaScript.
   ================================================================ */


/* ----------------------------------------------------------------
   👤 PROFIL UTAMA
   Ubah nama, tagline, deskripsi, dan info pribadimu di sini.
   ---------------------------------------------------------------- */
const CONFIG_PROFILE = {
  name:       "Fadhil Akbar H.",   // Nama lengkap kamu
  initials:   "Dhiz",                  // 2 huruf inisial (untuk logo & avatar)
  tagline:    "Pelajar Rekayasa Perangkat Lunak", // Kalimat singkat di bawah nama
  greeting:   "Halo, saya",          // Kata sapaan sebelum nama besar
  bio: [
    // Paragraf pertama tentang kamu (boleh diedit bebas)
    `Saya adalah seorang pelajar <strong>Developer</strong> yang passionate dalam menciptakan
     pengalaman digital yang luar biasa. Dengan keahlian di bidang web development dan UI/UX design,
     saya percaya bahwa teknologi yang baik harus terasa alami dan menyenangkan untuk digunakan.`,
    // Paragraf kedua (teknologi yang kamu pakai)
    `Saat ini saya fokus mengembangkan aplikasi web modern menggunakan <strong>React, Laravel, dan Node.js</strong>.
     Saya juga aktif berkontribusi pada proyek open source dan selalu belajar teknologi perjomokan terbaru.`,
  ],

  // Info detail di kartu about
  location:   "Blitar, Jawa Timur",
  education:  "SMK Brantas Karangkates — RPL",
  focus:      "Web App & Mobile Development",
  languages:  "Indonesia, English",

  // Status badge di hero & about (ganti teks sesuai kondisimu)
  status:     "Available for work — 2026",   // contoh: "Sedang Sekolah" / "Open to Projects"
  statusOpen: true,    // true = titik hijau (aktif), false = titik merah

  // Link tombol "Unduh CV" — ganti dengan path file CV kamu
  cvLink:     "files/CV_Fadhil-Akbar_H(.pdf",     // contoh: "file/cv-rizky.pdf"
};


/* ----------------------------------------------------------------
   📊 STATISTIK HERO
   Angka yang muncul di bagian bawah hero dengan animasi counter.
   ---------------------------------------------------------------- */
const CONFIG_STATS = [
  { number: 0,   label: "Proyek"    },
  { number: 0,    label: "Tahun pengalaman" },
  { number: 0,   label: "Klien"     },
];


/* ----------------------------------------------------------------
   🔗 SOSIAL MEDIA & KONTAK
   Ganti nilai "url" dengan link profilmu. Kosongkan ("") untuk sembunyi.
   ---------------------------------------------------------------- */
const CONFIG_SOCIAL = {
  email:     "fadhil.xpplg2@gmail.com",
  instagram: "https://www.instagram.com/dhil_lagi_gabut_/",   // kosongkan "" untuk sembunyikan
  github:    "https://github.com/Dhiz-Ae",
  linkedin:  "https://www.linkedin.com/in/fadhil-akbar-hermansyah-016b08383/",
  twitter:   "",   // kosongkan "" untuk sembunyikan
};


/* ----------------------------------------------------------------
   🛠️  KEAHLIAN (SKILLS)
   Tambah / hapus skill sesuai kemampuanmu.
   Skill bar: nilai 0–100 (persentase kemampuan).
   ---------------------------------------------------------------- */
const CONFIG_SKILLS = {
  categories: [
    {
      icon:   "fa-solid fa-desktop",
      title:  "Frontend",
      tags:   ["HTML5", "CSS3", "JavaScript"],
    },
    {
      icon:   "fa-solid fa-server",
      title:  "Backend",
      tags:   ["PHP", "Laravel", "Node.js", "Express", "MySQL", "MongoDB"],
    },
    {
      icon:   "fa-solid fa-wrench",
      title:  "Tools & Others",
      tags:   ["Git", "GitHub", "Figma", "Docker", "VS Code", "Linux"],
    },
  ],

  bars: [
    { name: "Frontend Development", pct: 75 },
    { name: "Backend Development",  pct: 25 },
    { name: "UI / UX Design",       pct: 75 },
    { name: "Mobile Development",   pct: 65 },
  ],
};


/* ----------------------------------------------------------------
   💼 PROYEK
   Tambah proyek baru dengan menambah blok { ... } di bawah.
   category harus salah satu dari: "Web App" / "Mobile" / "Game" / "Web"
   ---------------------------------------------------------------- */
const CONFIG_PROJECTS = [
  {
    title:    "Sistem Penjualan Buku",
    desc:     "Program yang mengatur penjualan buku.",
    tags:     ["Python","Terminal"],
    image:    "img/Program-penjualan-buku.png",
    category: "Code Program",
    link:     "https://drive.google.com/drive/folders/1yivPeT9yKfolGy4YZio3jNRfRpAz_n3D?usp=drive_link",   // ganti dengan URL proyekmu
  },
  {
    title:    "Pembuatan Website mirip Website resmi Adidas",
    desc:     "Website mirip Web resmi Adidas.",
    tags:     ["JavaScript", "CSS", "HTML"],
    image:    "img/Website-adidas.png",
    category: "Web App",
    link:     "https://drive.google.com/drive/folders/1Knlmv-6fMG8hSpj461iHFlNzTx91kmAd?usp=drive_link",
  },
  {
    title:    "Website Profil UNAIR (re-create)",
    desc:     "Profil UNAIR.",
    tags:     ["JavaScript","CSS","HTML"],
    image:    "img/Web-UNAIR.png",
    category: "Web App",
    link:     "https://drive.google.com/drive/folders/1vZW4QfJ25bgAWjGgDhKNJsW_MQu248VW?usp=drive_link",
  },
  {
    title:    "Tinkercad",
    desc:     "Projek membuat rangkaian lampu dengan potentio",
    tags:     ["Tinkercad"],
    image:    "img/Projek-tinkercad.png",
    category: "Tinker",
    link:     "https://www.tinkercad.com/things/dgBcZHJECS9-smashing-rottis-crift/editel?returnTo=https%3A%2F%2Fwww.tinkercad.com%2Fdashboard%2Fdesigns%2Fcircuits",
  },
  {
    title:    "Projek Python",
    desc:     "Toko online sederhana dengan fitur keranjang belanja, autentikasi, dan dashboard admin lengkap.",
    tags:     ["Laravel", "Tailwind", "MySQL"],
    category: "Web App",
    link:     "https://drive.google.com/drive/folders/1yivPeT9yKfolGy4YZio3jNRfRpAz_n3D?usp=drive_link",
  },

];


/* ----------------------------------------------------------------
   🎨 WARNA TEMA  (opsional — skip jika tidak mau ubah)
   Ganti kode warna hex sesuai selera.
   ---------------------------------------------------------------- */
const CONFIG_THEME = {
  accent:  "#4B5694",   // warna utama (ungu)
  accent2: "#EAE0CF"
  ,   // warna kedua (pink)
};

const express = require('express');
const router = express.Router();

const profiles = [
  { nim: "F1D022137", nama: "MUH. RESSA ARSY MA'RIF", jurusan: "Teknik Informatika" },
  { nim: "F1D022138", nama: "JOKO WIDODO", jurusan: "Teknologi Kayu" },
  { nim: "F1D022139", nama: "ANIES BASWEDAN", jurusan: "Ilmu Politik" },
  { nim: "F1D022140", nama: "GANJAR PRANOWO", jurusan: "Hukum" },
  { nim: "F1D022141", nama: "PRABOWO SUBIANTO", jurusan: "Militer" },
  { nim: "F1D022142", nama: "AHMAD SAHRONI", jurusan: "Ekonomi dan Bisnis" },
  { nim: "F1D022143", nama: "MA'RUF AMIN", jurusan: "Studi Islam" },
  { nim: "F1D022144", nama: "MEGAWATI SOEKARNOPUTRI", jurusan: "Ilmu Pemerintahan" },
  { nim: "F1D022145", nama: "SUSI PUDJIASTUTI", jurusan: "Kelautan dan Perikanan" },
  { nim: "F1D022146", nama: "NAJWA SHIHAB", jurusan: "Ilmu Komunikasi" },
  { nim: "F1D022147", nama: "RADITYA DIKA", jurusan: "Sastra Inggris" },
  { nim: "F1D022148", nama: "AGNES MONICA", jurusan: "Seni Musik" },
  { nim: "F1D022149", nama: "RAISA ANDRIANA", jurusan: "Seni Vokal" },
  { nim: "F1D022150", nama: "CINTA LAURA", jurusan: "Psikologi" },
  { nim: "F1D022151", nama: "REZA RAHADIAN", jurusan: "Seni Teater" }
];


router.get('/', (req, res) => {
  res.json(profiles);
});

router.get('/:nim', (req, res) => {
  const nim = req.params.nim;
  const profile = profiles.find(p => p.nim === nim);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).json({ message: "Profile tidak ditemukan" });
  }
});

module.exports = router;

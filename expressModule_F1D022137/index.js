const express = require('express');
const app = express();
const port = 3000;

const { tambah, kali } = require('./utils/math');

const profileRouter = require('./routes/profile');

app.get('/', (req, res) => {
  res.send("Nama: MUH. RESSA ARSY MA'RIF<br>NIM: F1D022137");
});

app.get('/hitung', (req, res) => {
  const a = Number(req.query.a) || 5;
  const b = Number(req.query.b) || 7;

  const hasilTambah = tambah(a, b);
  const hasilKali = kali(a, b);

  res.send(`
    <h3>Perhitungan</h3>
    <p>${a} + ${b} = <strong>${hasilTambah}</strong></p>
    <p>${a} × ${b} = <strong>${hasilKali}</strong></p>
    <small>Gunakan query string, contoh: /hitung?a=4&b=6</small>
  `);
});

app.use('/profile', profileRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

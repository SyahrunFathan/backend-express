# backend-express

## Instalasi Library

1. Jalankan Perintah Berikut Untuk Menginstal Dependensi:

```bash
npm install
```
2. Buat file .env untuk mengkonfigurasi token yang berisi:

```
ACCESS_TOKEN=f7ZJusqwe4YiSH3zS8wuvFkixSwRdpvSAmhZDRu7kSeg4BqSO1MTLdLFhilqbZcq
DATABASE="db_test"
DB_USER="root"
DB_PASSWORD=""
```
3. Jika Cara di atas gagal pergi ke folder src/configs/Database.js
Codingan :
```javascript
// Cara 1
const db = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
  host: "localhost",
});

// Cara 2
// const db = new Sequelize("db_test", "root", "", {
//   dialect: "mysql",
//   host: "localhost",
// });

module.exports = db;



# backend-express

## Teknologi yang Digunakan
- **Node.js**
- **Express**
- **MySQL**

## Instalasi Library

1. Clone proyek:
```bash
git clone https://github.com/SyahrunFathan/backend-express.git
```
 
2. Jalankan Perintah Berikut Untuk Menginstal Dependensi:

```bash
npm install
```

3. Buat file .env isi konfigurasi berikut:

```
ACCESS_TOKEN=f7ZJusqwe4YiSH3zS8wuvFkixSwRdpvSAmhZDRu7kSeg4BqSO1MTLdLFhilqbZcq
DATABASE="db_test"
DB_USER="root"
DB_PASSWORD=""
```
4. Jika Cara di atas gagal pergi ke folder src/configs/Database.js, aktikan cara ke dua dan matikan cara pertama
Codingan :
```javascript
// Cara 1
// const db = new Sequelize({
//   database: process.env.DATABASE,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   dialect: "mysql",
//   host: "localhost",
// });

// Cara 2
const db = new Sequelize("db_test", "root", "", {
  dialect: "mysql",
  host: "localhost",
});
```

5. Install nodemon secara global:

```bash
npm install -g nodemon
```

6. Jalankan project:
```bash
npm start
```

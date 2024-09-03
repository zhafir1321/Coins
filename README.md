[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15715775&assignment_repo_type=AssignmentRepo)
# FSJSP2S6-LC02 - Hacktiv Crypto

## Ringkasan

Kali ini, Kalian sedang menjadi seorang frontend dan ditugaskan untuk membuat aplikasi client-side bernama `Hacktiv Crypto`, sebuah aplikasi untuk membantu menampilkan daftar coin yang kalian miliki. Feature utama dari aplikasi ini adalah:

1. User dapat melakukan register
1. User dapat melakukan login
1. User yang telah login dapat `melihat seluruh data coin`
1. User yang telah login dapat `melihat daftar coin yang dimiliki (MyCoin)`
1. User dapat melakukan `add` atau menambahkan coin ke daftar coin yang dimiliki.
1. User dapat melakukan `delete` coin dari daftar coin yang dimiliki.
1. User dapat melakukan `update` quantity coin yang dimiliki

Dalam tugas ini, Tim Backend kalian sudah menyediakan deployed API Server yang dapat kalian consume, dokumentasi server dapat dilihat pada file [`api_doc.md`](./api_doc.md). Silahkan kalian buat semua feature sesuai release yang ada pada `README.md` ini!

Semoga sukses!

## Aturan & Kebijakan

- Waktu Pengerjaan: **180 min**
- Student diharapkan menjunjung tinggi INTEGRITAS. Segala bentuk ketidakjujuran meliputi peniruan, plagiarisme, pemalsuan pengerjaan akan mendapatkan tindakan tegas dari akademik
- Error minimal ditampilkan menggunakan `console.log` di client
- (-10) jika `node_modules` tidak diignore
- (-5) jika `package.json` tidak ada, tidak valid atau tidak dipush
- (-5) jika tidak menyertakan example value `.env` bagi yang menggunakan dotenv
- (-5) jika `.env` tidak di ignore bagi yang menggunakan dotenv
- (-2) jika menggunakan `alert` bawaan browser
- (-5) jika tidak menerapkan konsep SPA
- (-5) Error tidak ditampilkan pada client

## Bobot penilaian

- Protecting App
- Basic Web Development & Layouting
- UI Library

## Deployed server

- url : <https://api.p2.lc2s6.foxhub.space/>
- Silahkan lakukan register user pada client dengan email yg belum terdaftar (boleh menggunakan postman terlebih dahulu)

## Components

Buatlah client side kalian yang terdiri dari beberapa component-component berikut:

- Register Page
- Login Page
- Home Page
  - Coin Card
- MyCoins Page
  - MyCoin Card (optional)
- MyCoinUpdate Page

## Github Live Code Workflow

Dalam pengerjaan live code, kalian diminta untuk melakukan commit sebagai checkpoin pengerjaan. Jika pengerjaan release sudah selesai, segera lakukan `add-commit` dengan message relase yang jelas.

- Contoh 1: git commit -m "Release 0 Done"
- Contoh 2: git commit -m "Release 3 - Fetch Heroes: Done"

## Release 0 - Setup Project

Lakukan setup project dengan menginstall package yang sudah diajarkan sebelumnya yaitu vite, react.js dan react-router. Pada project ini terdapat `api_docs.md` dan assets sebagai referensi tampilan web yang diharapkan. Kalian boleh menggunakan framework CSS favorite kalian pada project ini

Catatan:
Tampilan Client Side pada assets hanya sebagai referensi atau contoh tampilan, kalian boleh menyesuaikan tampilan ASALKAN layout atau tata letak komponen sama dengan assets yang sudah diberikan. Kalian boleh fokus untuk menyelesaikan feature dahulu lalu akhiri dengan tampilan yang rapi dan menarik.

## Release 1 - Authentication: Register

- Buatlah route `/register` untuk menampilkan form register user seperti pada gambar berikut
- Jika proses register berhasil maka akan pindah ke halaman login
- tampilkan pesan error dari server jika terjadi kegagalan dalam melakukan register
- gunakanlah endpoint [register](./api_doc.md#1-post-register) yang tersedia pada server

![release-1](./assets/register.png)

## Release 2 - Authentication: Login

- Buatlah route `/login` untuk menampilkan form login user seperti pada gambar berikut
- Jika proses login berhasil maka akan menampilkan semua coin yang ada dari server
- Pastikan ketika user sudah berhasil login, ketika direfresh maka user tidak harus login lagi
- gunakanlah endpoint [login](./api_doc.md#2-post-login) yang tersedia pada server

![release-2](./assets/login.png)


## Release 3 - Home Page (Fetch Coins)

- Buatlah route `/` untuk menampilkan list coin di client dari data `api_doc.md` yang disediakan
- Buatlah Card untuk menampilkan detail dari Coin dan tambahkan tombol `Add` pada setiap Card coin yang ada
- Terapkan konsep component untuk setiap bagian yang bersifat `reuseable`
- gunakanlah endpoint [get coins](./api_doc.md#3-get-coins) yang tersedia pada server

![release-3](./assets/home.png)

## Release 4 - Fetch My Coins

- Buatlah route `/my-coins` untuk menampilkan list coin yang sudah dimiliki oleh user yang sedang login di client dari data `api_doc.md` yang disediakan
- Buatlah Card untuk menampilkan list dari MyCoins dan tambahkan tombol `Update` & `Delete` pada setiap Card coin yang ada
- Terapkan konsep component untuk setiap bagian yang bersifat `reuseable`
- gunakanlah endpoint [get usercoins](./api_doc.md#5-get-usercoins) yang tersedia pada server

![release-4](./assets/my-coins.png)

## Release 5 - Add Coin

- Pada halaman Home, integrasikan tombol `Add` di card coin sehingga dapat menambahkan coin ke daftar coin user yang sedang login
- Jika berhasil maka user akan diarahkan ke halaman MyCoins
- Jika berhasil menambahkan coin maka list MyCoins akan bertambah otomatis di client (Pastikan website kalian reaktif)
- Lakukan validasi untuk coin yang duplikat di client (tidak bisa menambahkan coin yg sama ke daftar coin user)
- gunakanlah endpoint [post usercoins](./api_doc.md#4-post-usercoinscoinid) yang tersedia pada server


## Release 6 - Delete Coin

- Pada halaman MyCoins, integrasikan tombol `Delete` pada card MyCoin
- Jika berhasil delete coin maka list MyCoins user akan berkurang tanpa harus di refresh (Pastikan website kalian reaktif)
- gunakanlah endpoint [delete usercoins](./api_doc.md#8-delete-usercoinsid) yang tersedia pada server

## Release 7 - Update MyCoin

- Buatlah route `/update-my-coin/:id` untuk menampilkan halaman UpdateMyCoin di client
- Untuk mendapatkan data detail MyCoin yang ingin diedit, gunakan endpoint **GET /usercoins/:id** yang ada pada `api_doc.md`
- Pada halaman MyCoins, integrasikan tombol `Update` pada card MyCoin untuk berpindah ke halaman UpdateMyCoin
- Jika Berhasil melakukan Update MyCoin user akan diredirect ke halaman Home `/my-coins`
- Jika berhasil update my coins maka quantity pada list MyCoins akan berubah sesuai dengan data yang diupdate tanpa harus di refresh (Pastikan website kalian reaktif)
- gunakanlah endpoint [get usercoins by id](./api_doc.md#6-get-usercoinsid) untuk melakukan populate data coin
- dan gunakanlah enpoint [update usercoins](./api_doc.md#4-put-usercoinsid) yang tersedia pada server

![release-7](./assets/update.png)

## Release 8 - Authentication: Logout

- Buatlah tombol logout dan ketika proses logout berhasil maka akan kembali ke tampilan login
- Pastikan ketika user sudah berhasil logout, ketika direfresh maka user akan ke tampilan login

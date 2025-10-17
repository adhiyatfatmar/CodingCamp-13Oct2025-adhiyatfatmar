# To-Do List Web Application

### Proyek Mini - CodingCamp-13oct2025-adhiyatfatmar

Proyek ini adalah implementasi aplikasi web To-Do List sederhana, dibuat sebagai bagian dari tugas akhir dari revoU Mini Course. Aplikasi ini memungkinkan pengguna untuk mengelola daftar tugas harian mereka dengan fitur dasar (CRUD: Create, Read, Update/Status, Delete).

---

## 🚀 Fitur Utama

Aplikasi ini dibangun menggunakan HTML, CSS, dan JavaScript, serta memiliki fitur-fitur berikut:

1.  *Form Input Tugas:* Memungkinkan penambahan kegiatan (teks) dan batas waktu (tanggal).
2.  *Validasi Input:* Mencegah penambahan tugas jika kolom kegiatan atau tanggal kosong.
3.  *Display To-Do List:* Menampilkan daftar tugas yang sudah ditambahkan.
4.  *Menandai Selesai (Complete):* Mengubah status tugas menjadi selesai (completed) dan memberikan feedback visual (coretan).
5.  *Hapus Tugas (Delete):* Menghapus tugas dari daftar secara permanen.
6.  *Filter Tugas:* Menyaring daftar tugas berdasarkan status: Semua, Selesai, dan Belum Selesai.
7.  *Penyimpanan Lokal:* Data tugas disimpan di **localStorage** browser, sehingga tidak hilang saat halaman di-refresh.

---

## 🛠 Teknologi yang Digunakan

* *HTML5:* Struktur dasar halaman.
* *CSS3:* Styling kustom (custom style) untuk desain yang bersih.
    * *(File: css/style.css)*
* *Vanilla JavaScript:* Logika utama aplikasi (Add, Delete, Filter, dan Local Storage Management).
    * *(File: js/script.js)*

---

## 📂 Struktur File Proyek

CodingCamp-13Oct2025-adhiyatfatmar/
├── css/
│   └── style.css           # Desain dan tata letak aplikasi
├── js/
│   └── script.js           # Logika dan fungsi JavaScript
├── index.html              # Halaman utama aplikasi (UI)
└── README.md               # Dokumentasi proyek (file ini)

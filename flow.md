# Spesifikasi API To-Do List

Ini adalah spesifikasi API sederhana untuk mengelola daftar tugas (To-Do List) menggunakan HTTP methods.

## Daftar Endpoint

 1. Menampilkan Semua Tugas
- **URL**: `/tasks`
- **Method**: GET
- **Deskripsi**: Mengambil daftar semua tugas yang ada.

 2. Menampilkan Detail Tugas
- **URL**: `/tasks/{id}`
- **Method**: GET
- **Deskripsi**: Mengambil detail tugas berdasarkan ID.

 3. Menambahkan Tugas Baru
- **URL**: `/tasks`
- **Method**: POST
- **Deskripsi**: Menambahkan tugas baru ke dalam daftar.

 4. Memperbarui Tugas
- **URL**: `/tasks/{id}`
- **Method**: PUT
- **Deskripsi**: Memperbarui tugas berdasarkan ID.

 5. Menghapus Tugas
- **URL**: `/tasks/{id}`
- **Method**: DELETE
- **Deskripsi**: Menghapus tugas berdasarkan ID.

 Format Data

- Data yang dikirim dan diterima adalah dalam format JSON.
- Contoh tugas:
  ```json
  {
    "id": 1,
    "title": "Membuat Spesifikasi API",
    "description": "Menulis spesifikasi API dalam format Markdown.",
    "completed": false
  }

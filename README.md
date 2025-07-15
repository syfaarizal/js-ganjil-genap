# 🔢 JavaScript Challenge — Day 6: Ganjil, Genap, atau Spesial?

Bagian dari tantangan pribadi **Code Sprint 30 – 30 Hari JavaScript Konsisten**.  
Di hari ke-6 ini, saya membangun program logika sederhana namun interaktif yang menguji angka yang dimasukkan user: apakah **ganjil**, **genap**, **kelipatan 10**, atau bahkan **negatif**.

---

## 🎯 Tujuan Challenge

- Memperkuat pemahaman kondisi bersarang (`if`, `else if`, `else`)
- Menggunakan operator modulus (`%`) untuk mengecek sifat angka
- Membuat sistem input berulang dengan `loop`
- Validasi input dan komunikasi output yang lebih manusiawi (UX CLI)
- Latihan logika pengurutan kondisi untuk hasil paling relevan

---

## 💻 Deskripsi Program

Program ini berjalan dalam mode interaktif:

1. User diminta memasukkan **angka**
2. Program akan memberikan respons:
   - 🔸 **Genap**
   - 🔹 **Ganjil**
   - 🎉 **Kelipatan 10**
   - 📉 **Bilangan negatif**
3. Jika user mengetik `"exit"` → program keluar
4. Jika input bukan angka → tampilkan pesan error

---

## 🧠 Fitur yang Diterapkan

- `prompt()` untuk input berulang
- `parseFloat()` untuk konversi input
- Validasi `isNaN()` + respon kocak 😅
- Cek logika **negatif dulu**, baru lanjut kategori lainnya
- Struktur kontrol `while (true)` + `break` untuk keluar
- Penataan kondisi urut sesuai prioritas makna
- Emoji berbeda sesuai kategori → UX++

---

## 🧪 Contoh Output

<pre><code>
Masukin angka cuy! (ketik 'exit' buat keluar)
➡️ 27 ➤ Nah, ini angka ganjil cuy! 🔹
➡️ 20 ➤ Nah, ini angka genap dan kelipatan 10 cuy! 🎉
➡️ -8 ➤ 📉 Ini angka negatif ya...
➡️ haha ➤ Yeu kocak, ini bukan angka 😅
➡️ exit ➤ Oke cuy, keluar dari program. Bye 👋
</code></pre>

---

## 🔧 Bonus Challenge yang Diimplementasikan

| Fitur Tambahan                   | Status |
|----------------------------------|--------|
| Input berulang hingga "exit"     | ✅     |
| Cek bilangan negatif             | ✅     |
| Kelipatan 10 + Genap dengan emoji khusus | ✅ |
| Validasi input angka (NaN)       | ✅     |
| Output dengan emoji & gaya santai| ✅     |

---

## 🔍 Insight Pribadi

Challenge ini terlihat sederhana tapi mengajarkan banyak hal:  
- Pentingnya urutan `if-else` supaya logika gak tabrakan  
- Cara bikin program lebih fleksibel dengan **loop dan kontrol keluar**  
- Kenapa UX penting bahkan di CLI  
- Cara menyampaikan informasi teknis dengan cara yang ramah dan bermakna

Saya juga menyadari bahwa bahkan kondisi yang saling tumpang tindih (contoh: angka bisa genap, kelipatan 10, dan negatif) perlu ditangani **secara berlapis**, dan tidak semua kondisi bisa di-handle dengan satu baris `if`.

---

## 📌 Author

Made with logika, looping, dan sedikit vibes ngelawak oleh  
**Syifa Fauziyah Arizal**  
[GitHub](https://github.com/syfaarizal) • [Portfolio](https://syfaarizal.github.io/sicoder-main-portfolio/)

---

> “Logic might be binary, but the way we treat users shouldn't be.”  
> Let’s go to [Day 7 → To-Do CLI or Array Games](#) 📝
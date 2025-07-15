let input;

while (true) {
    input = prompt("Masukin angka cuy! (ketik 'exit' buat keluar)");

    if (input === "exit") {
        console.log("Oke cuy, keluar dari program. Bye 👋");
        break;
    }

    const angka = parseFloat(input);

    if (isNaN(angka)) {
        console.log("Yeu kocak, ini bukan angka 😅"); 
    } else if (angka < 0) {
        console.log("📉 Ini angka negatif ya...");
    } else if (angka % 10 === 0 && angka % 2 === 0) {
        console.log("Nah, ini angka genap dan kelipatan 10 cuy! 🎉");
    } else if (angka % 2 === 0) {
        console.log("Nah, ini angka genap cuy! 🔸");
    } else {
        console.log("Nah, ini angka ganjil cuy! 🔹");
    }
}


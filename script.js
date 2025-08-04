let input;

while (true) {
    input = prompt("Enter a number (type 'exit' to quit)");

    if (input === "exit") {
        console.log("Goodbye! 👋");
        break;
    }

    const number = parseFloat(input);

    if (isNaN(number)) {
        console.log("❌ Please enter a valid number 😅"); 
    } else if (number < 0) {
        console.log("📉 This is a negative number...");
    } else if (number % 10 === 0 && number % 2 === 0) {
        console.log("🎊 This is an even number and multiple of 10!");
    } else if (number % 2 === 0) {
        console.log("🔸 This is an even number!");
    } else {
        console.log("🔹 This is an odd number!");
    }
}
          
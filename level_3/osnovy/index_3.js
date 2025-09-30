function pozdrav(meno = "Neznámy", vek = 18) {
  console.log("Ahoj, " + meno + ". Máš " + vek + " rokov.");
}

pozdrav(); // Výstup: Ahoj, Neznámy. Máš 18 rokov.
pozdrav("Marek"); // Výstup: Ahoj, Marek. Máš 18 rokov.
pozdrav("Jana", 25); // Výstup: Ahoj, Jana. Máš 25 rokov.

// -------------------------------

function pozdrav(meno = "Neznámy") {
  console.log("Ahoj, " + meno);
}

pozdrav(undefined); // Výstup: Ahoj, Neznámy
pozdrav("Marek");   // Výstup: Ahoj, Marek

// -------------------------------

function sumNumbers(number1, number2) {
	const sum = number1 + number2
	return sum
}

const sumOfNumbers = sumNumbers(2, 3)
console.log(sumOfNumbers);
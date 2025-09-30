function sayHello(name) {
	console.log('Ahoj!')
	console.log(name)
}

sayHello('Lukas')

// -------------------------------

function sayHello(name) {
	console.log('Ahoj!')
	console.log(name)
}

sayHello('Lukas')
sayHello('Filip')

// -------------------------------

function sumNumbers(number1, number2) {
	const sum = number1 + number2
	console.log('Sucet cisla ' + number1 + ' a cisla ' + number2 + ' sa rovna ' + sum)
}

sumNumbers(2, 3)

// -------------------------------

function pozdrav(meno = "Neznámy") {
  console.log("Ahoj, " + meno);
}

pozdrav(); // Výstup: Ahoj, Neznámy
pozdrav("Marek"); // Výstup: Ahoj, Marek
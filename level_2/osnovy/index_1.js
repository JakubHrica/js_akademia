console.log('1') // prvy riadok
if (1 == 2) { // podmienka - a zaciatok code blocku
	console.log('2')
} // koniec code blocku
console.log('3')

// -------------------------------

/* 
for (initial_code; condition; change) {
	// code block, ktory sa spusti
}
*/

for (let counter = 0; counter < 5; counter++) { // Counter will be "i", so it will be "for (let i = 0; i < 10; i++)"
	console.log(counter)
}

for (let i = 0; i < 5; i++) {
	console.log('Ahoj')
}

// -------------------------------

const names = ['Lukas', 'Filip', 'Pavol']

for (let i = 0; i < names.length; i++) {
	console.log(names[i])
}

/*
for (let value of array) {
	console.log(value)
}
*/

for (let name of names) {
	console.log(name)
}
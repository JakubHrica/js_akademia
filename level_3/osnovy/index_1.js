console.log('Ahoj!')
console.log('Lukas')
console.log('Ahoj!')
console.log('Filip')

let names = ['Lukas', 'Filip', 'Milan']

console.log('Toto je zoznam mien:')
for (let name of names) {
	console.log(name)
}

// -------------------------------

function sayHello() {
	console.log('Ahoj!')
}

sayHello()
sayHello()

// -------------------------------

function sayHello() {
	console.log('Ahoj!')
}

sayHello()
console.log('Lukas')
sayHello()
console.log('Filip')
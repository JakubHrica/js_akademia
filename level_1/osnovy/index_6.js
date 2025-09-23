const names = ['Lukas', 'Filip', 'Pavol']

const numbers = [1, 3, 4]

console.log(names)
console.log(names[0]) // vypise Lukas (prve miesto arrayu)

console.log(names[0]) // names.at(0) je rovnake (= prve miesto arrayu)
console.log(names[1])
console.log(names[2]) // names.at(-1) je rovnake (= posledne miesto arrayu)

console.log(names.length) // vypise 3 (dlzka arrayu)

console.log(names) // prvy vypis
names.push('Milan') // pridanie dalsieho mena
console.log(names) // druhy vypis

console.log(names) // prvy vypis
names[1] = 'Milan' // zmena mena
console.log(names) // druhy vypis
console.log('Toto je vypis z programu')

const meno = 'Lukas' //string
let vek = 21 //number
const je_student = false //boolean

// -------------------------------

console.log('Moje meno je ')
console.log(meno)
console.log('Moj vek je ')
console.log(vek)

// -------------------------------

console.log('Ako')
// console.log('sa')
console.log('mas')

console.log('Moje meno je ' + meno)

// -------------------------------

const meno2 = 'Lukas'
const priezvisko2 = 'Mrkvicka'

console.log(meno2 + ' ' + priezvisko2)

const celeMeno = meno2 + ' ' + priezvisko2

console.log(celeMeno)

console.log('Lukas\nMrkvicka')

// -------------------------------

const cislo1 = 5
const cislo2 = 3

console.log(cislo1 + cislo2) // vypise cislo 8
console.log(cislo1 - cislo2) // vypise cislo 2

/*
    + (scitanie)
    - (odcitanie)
    * (nasobenie)
    / (delenie)
    ** (mocnina)
    % (modulus - zvysok po deleni)
*/

// -------------------------------

let age = 21
console.log(age) // vypiseme prvy krat premennu age
age = 22 // zmenime hodnotu
console.log(age) // vypiseme druhy krat premmenu age

// -------------------------------

let wordsCount = 10
console.log(wordsCount)

wordsCount = wordsCount + 5 // navysime premennu o hodnotu 5

console.log(wordsCount)

wordsCount += 5 // navysime premennu o hodnotu 5

let number = 1
number++ // je to to iste ako kebyze zapiseme number += 1
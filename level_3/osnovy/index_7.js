/*
const newArray = array.filter(item => {
  // podmienka, ktorá musí byť splnená, aby sa daný prvok dostal do výsledného poľa
});
*/

const users = [
  { firstName: 'Lukas', lastName: 'Mrkvicka', age: 21 },
  { firstName: 'Jana', lastName: 'Novakova', age: 22 },
  { firstName: 'Peter', lastName: 'Kovac', age: 23 },
  { firstName: 'Eva', lastName: 'Siklova', age: 20 }
];

// Filterujeme užívateľov, ktorí majú viac ako 21 rokov
const filteredUsers1 = users.filter(user => user.age > 21);

console.log(filteredUsers1);
// Výstup:
// [
//   { firstName: 'Jana', lastName: 'Novakova', age: 22 },
//   { firstName: 'Peter', lastName: 'Kovac', age: 23 }
// ]

const filteredUsers2 = users.filter(user => user.age > 21 && user.firstName.startsWith('J'));

console.log(filteredUsers2);
// Výstup:
// [
//   { firstName: 'Jana', lastName: 'Novakova', age: 22 }
// ]


const users = [
  { firstName: 'Lukas', lastName: 'Mrkvicka', age: 21 },
  { firstName: 'Jana', lastName: 'Novakova', age: 22 },
  { firstName: 'Peter', lastName: 'Kovac', age: 23 }
];

// Vytvoríme nové pole, kde skombinujeme firstName a lastName do jedného reťazca
const fullNames = users.map(user => {
  return user.firstName + ' ' + user.lastName;
});

console.log(fullNames);
// Výstup: ['Lukas Mrkvicka', 'Jana Novakova', 'Peter Kovac']


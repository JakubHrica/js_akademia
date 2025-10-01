const user = {
  firstName: 'Lukas',
  lastName: 'Mrkvicka',
  age: 21
};

// Použitie object spreading na skopírovanie vlastností do nového objektu
const newUser = { ...user };

console.log(newUser);
// Výstup:
// { firstName: 'Lukas', lastName: 'Mrkvicka', age: 21 }

const additionalInfo = {
  city: 'Bratislava'
};

// Kombinovanie oboch objektov do jedného
const fullUserInfo = { ...user, ...additionalInfo };

console.log(fullUserInfo);
// Výstup:
// { firstName: 'Lukas', lastName: 'Mrkvicka', age: 21, city: 'Bratislava' }

const updatedUser = {
  ...user,
  age: 22 // prepíše pôvodnú hodnotu 'age' na 22
};

console.log(updatedUser);
// Výstup:
// { firstName: 'Lukas', lastName: 'Mrkvicka', age: 22 }

const newUserWithJob = {
  ...user,
  job: 'Developer' // pridávame novú vlastnosť
};

console.log(newUserWithJob);
// Výstup:
// { firstName: 'Lukas', lastName: 'Mrkvicka', age: 21, job: 'Developer' }
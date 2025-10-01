const names = ['Lukas', 'Filip', 'Pavol']
//             index:0   index:1  index:2

const user1 = {
	firstName: 'Lukas',
	lastName: 'Mrkvicka',
	age: 21
}

console.log(user1)

function getFullName(user) {
	console.log(user.firstName + ' ' + user.lastName)
}

const user = {
	firstName: 'Lukas',
	lastName: 'Mrkvicka',
}

getFullName(user)

const user3 = {
  firstName: "Lukas",
  lastName: "Mrkvicka",
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

user3.getFullName();

console.log(user1.firstName)
console.log(user1.lastName)
console.log(user1.age)

const users4 = [
  { firstName: 'Lukas', lastName: 'Mrkvicka', age: 21 },
  { firstName: 'Jana', lastName: 'Novakova', age: 22 }
];

console.log(users4[0].firstName); // Lukas
console.log(users4[1].lastName);  // Novakova

for (const user4 of users4) {
  console.log(user4.firstName);  // Vytlačí meno každého užívateľa
}
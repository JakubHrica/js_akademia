// Projekt: Zoznam mobilov

const phones = [
    { modelName: 'Iphone 16', brand: 'Apple', color: 'black' },
    { modelName: 'Samsung Galaxy S20', brand: 'Samsung', color: 'dark blue' },
    { modelName: 'Xiaomi Redmi 15', brand: 'Xiaomi', color: 'light blue' },
    { modelName: 'Nokia 3310', brand: 'Nokia', color: 'grey' }
];

const phonesNumber = phones.length;

console.log(phonesNumber);

for (let phone of phones) {
    console.log(phone.modelName + ' has color ' + phone.color);
}

const filteredApplePhones = phones.filter(phone => phone.brand === 'Apple');

const applePhones = filteredApplePhones.map(phone => {
    return phone.modelName;
});

console.log('Mobily od spoločnosti Apple:');
for (let i = 0; i < applePhones.length; i++) {
	console.log(applePhones[i])
}

const myPhone = { ...phones[0] };

console.log(myPhone);

const updatedMyPhone = {
  ...myPhone,
  color: 'purple'
};

console.log(updatedMyPhone);
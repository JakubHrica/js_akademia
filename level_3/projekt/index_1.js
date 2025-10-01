// Projekt: Práca s číslami

const numbers = [1, 5, 6, 8, 10];

// Vypísanie arrayu
const printArray = array => {
    console.log("V arrayi sa nachádzajú nasledovné čísla:");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};

// Sčítanie arrayu
function sumArray(arr) {
    let sum = 0;

    for (const number of arr) {
        sum += number;
    }

    return sum;
}

printArray(numbers);

const firstSum = sumArray(numbers);
console.log('Súčet čísel v arrayi je: ' + firstSum);

numbers.push(13, 14, 16);

printArray(numbers);

const secondSum = sumArray(numbers);
console.log('Súčet čísel v arrayi je: ' + secondSum);

let answer;
let difference;

if (firstSum < secondSum) {
        answer = 'väčší'
        difference = secondSum - firstSum
    } else {
        answer = 'menší'
        difference = firstSum - secondSum
    }

console.log('Súčet čísel bol ' + firstSum + ', teraz je ' + secondSum + ', to znamená, že je ' + answer + ' o ' + difference);
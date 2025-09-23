const numbers = [0, 1, 2, 4, 5, 7, 9, 10, 12, 13]

for (let i=0; i < numbers.length; i++) {
    const currentNumber = numbers[i]

    if (currentNumber % 2 === 0) {
        console.log(currentNumber + ' - Párne číslo')
    } else {
        console.log(currentNumber + ' - Nepárne číslo')
    }
}

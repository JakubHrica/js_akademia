// Projekt: Kalkulačka

const readline = require('readline/promises');

async function main() {
    const input = readline.createInterface({input: process.stdin, output: process.stdout});

    const firstNumber = await input.question('Zadaj prvé číslo: ');
    const operation = await input.question('Zadaj operáciu (+, -, *, /): ');
    const secondNumber = await input.question('Zadaj druhé číslo: ');

    if (operation == '/') {
        if (secondNumber == 0) {
            console.log('Nulou sa nesmie deliť!');
            process.exit();
        }
    }

    if (operation == '+') {
        console.log('Výsledok: ' + firstNumber + secondNumber);
    } else if (operation == '-') {
        console.log('Výsledok: ' + (firstNumber - secondNumber));
    }
    else if (operation == '*') {
        console.log('Výsledok: ' + (firstNumber * secondNumber));
    }
    else if (operation == '/') {
        console.log('Výsledok: ' + (firstNumber / secondNumber));
    }
    else {
        console.log('Matematická operácia nie je správna!');
    }
    input.close();
}

main()
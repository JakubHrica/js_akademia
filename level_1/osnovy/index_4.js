const readline = require('readline/promises');

async function main() {
    const input = readline.createInterface({input: process.stdin, output: process.stdout});

    // Nas kod tu zacina
    const number = await input.question('Zadaj tvoje cislo: ');

    if (number > 10) {
        console.log('Cislo je vacsie ako 10')
    }
    else if (number < 10) {
        console.log('Cislo je mensie ako 10')
    }
    else if (number == 10) {
        console.log('Cislo je 10')
    }
    else {
        console.log('Zadana hodnota nie je cislo')
    }
    // Nas kod tu konci

    input.close();
}

main()
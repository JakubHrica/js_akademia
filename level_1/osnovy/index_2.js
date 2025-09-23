const readline = require('readline/promises');

async function main() {
    const input = readline.createInterface({input: process.stdin, output: process.stdout});

    // Tvoj kod
    const name = await input.question('Zadaj svoje celé meno: ');
    console.log('Čau, ' + name);
    // Koniec tvojho kodu

    input.close();
}

main()
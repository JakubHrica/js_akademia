// Projekt: Zisťovanie a zapisovanie obľúbených kníh

const readline = require('readline/promises');

async function main() {
    const input = readline.createInterface({input: process.stdin, output: process.stdout});

    const books = [];
    let bookTitle = '';
    
    while (bookTitle.toUpperCase() !== 'X') {
        bookTitle = await input.question('Zadaj názov knihy (alebo "X" pre ukončenie): ');
        if (bookTitle.toUpperCase() !== 'X') {
            books.push(bookTitle);
        }
    }

    console.log('\nTvoje obľúbené knihy sú:');
    if (books.length === 0) {
        console.log('\nNeboli pridané žiadne knihy.');
    } else {
        let i = 1
        for (let bookTitle of books) {
            console.log(i + '. ' + bookTitle)
            i++
        }
    }

    input.close();
}

main()

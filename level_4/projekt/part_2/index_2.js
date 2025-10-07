// Projekt: Zoznam spolužiakov

const fs = require('fs');
const { exit } = require('process');
const readline = require('readline/promises');

async function main() {
    const input = readline.createInterface({ input: process.stdin, output: process.stdout });

    try {
        const fileContent = fs.readFileSync('classmates.json', 'utf-8');
        let classmates = JSON.parse(fileContent);

        if (!Array.isArray(classmates)) {
            classmates = [];
        }

        let cName = '';
        let cSurname = '';

        while (true) {
            cName = await input.question('Zadaj meno študenta (alebo "X" pre ukončenie): ');

            if (cName.toUpperCase() === 'X') {
                break;
            }

            cSurname = await input.question('Zadaj priezvisko študenta: ');

            classmates.push({
                cName,
                cSurname
            });
        }

        const fileContentIn = JSON.stringify(classmates, null, 2);
        fs.writeFileSync('classmates.json', fileContentIn, 'utf-8');

        console.log('\n-------------------')
        console.log('Zoznam spolužiakov:')
        const numberOfClassmates = classmates.length; 

        for (let i = 0; i < numberOfClassmates; i++) {
            const classmate = classmates[i]; 

            console.log(i + 1 + '. ' + classmate.cName + ' ' + classmate.cSurname);
        }

        input.close()
    } catch (error) {
        console.log('Chyba pri čítaní súboru:', error.message);
        exit();
    }
}

main();
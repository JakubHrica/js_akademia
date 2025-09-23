// Projekt: Zoznam filmov

const readline = require('readline/promises');

async function main() {
    const input = readline.createInterface({input: process.stdin, output: process.stdout});

    const movies = ['The Matrix', 'Inception', 'Interstellar', 'The Dark Knight', 'Pulp Fiction'];

    console.log(movies);

    const newMovie = await input.question('Zadaj názov filmu: ');
    movies.push(newMovie);
    console.log(movies);

    movies[1] = 'Hobit';

    console.log(movies);

    console.log('Prvý film je: ' + movies[0]);

    input.close();
}

main()
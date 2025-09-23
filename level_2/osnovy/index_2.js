const readline = require('readline/promises')

async function main() {
    const input = readline.createInterface({input: process.stdin, output: process.stdout})

    const computerNumber = Math.floor(Math.random() * 11)
    let number

    while (number != computerNumber) {
        number = await input.question('Write number: ')
    
        if (number == 5) {
            console.log('Unlucky 5, you lost')
            break
        }
    }

    console.log('Correct number was ' + computerNumber)

    input.close()
}

main()

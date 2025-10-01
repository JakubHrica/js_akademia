import chalk from 'chalk'

console.log(chalk.red('Hello world!'))
console.log(chalk.green('Hello world!'))
console.log(chalk.magenta('Hello world!'))

console.log(chalk.red.strikethrough.bold('Hello world!'))
console.log(chalk.bgBlue.cyan('Hello world!'))
console.log(chalk.bgRgb(15, 100, 204).inverse('Hello!'))
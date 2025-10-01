
const fs = require('fs');

fs.writeFileSync('mojText.txt', 'Toto je môj prvý zápis!');
fs.appendFileSync('mojText.txt', '\nA tu je druhý zápis.');
const fs = require('fs');  // Načítame modul fs

// Funkcia writeFileSync zapíše text do súboru
fs.writeFileSync('pozdrav.txt', 'Ahoj svet!');

console.log('Text bol úspešne zapísaný do súboru!');

fs.appendFileSync('pozdrav.txt', '\nAko sa máš?');

console.log('Pokračovanie textu bolo pridané na koniec súboru!');

try {
  // Snažíme sa načítať obsah súboru
  const data = fs.readFileSync('neexistujuciSúbor.txt', 'utf-8');
  console.log(data);
} catch (error) {
  // Ak súbor neexistuje alebo nastane chyba, vypíše sa táto správa
  console.log('Chyba pri čítaní súboru:', error.message);
}

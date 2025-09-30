// Základná arrow funkcia
function pozdrav() {
  console.log("Ahoj!");
}

const pozdrav = () => {
  console.log("Ahoj!");
}

// Funkcia s jedným argumentom
function zdvojnasobit(x) {
  return x * 2;
}

const zdvojnasobit = x => x * 2;

// Funkcia s viacerými argumentmi
function sucet(a, b) {
  return a + b;
}

const sucet2 = (a, b) => a + b;

// Funckia bez argumentov
function nahodneCislo() {
  return Math.random();
}

const nahodneCislo = () => Math.random();
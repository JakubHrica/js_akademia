const age = 21;
const height = 175;

if (age > 16) {
  if (height > 160) {
    console.log("Si vyssi ako 160cm a mas viacej ako 16 rokov");
  }
}

// Condition up is same as this

if (age > 16 && height > 160) {
  console.log("Si vyssi ako 160cm a mas viacej ako 16 rokov");
}

if (age > 16 || height > 160) {
  console.log("Si vyssi ako 160cm alebo mas viacej ako 16 rokov");
}

if (condition && condition && condition /*...*/) {
  console.log('Si vyssi ako 160cm a mas viacej ako 16 rokov');
}

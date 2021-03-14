function howManyHundreds (num) {
  let total = 0;
  if (num % 100 === 0) {
    total = num / 100;
  } else {
    total = ((num - (num %= 100)) / 100);
  }
  return total;
}



console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
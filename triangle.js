/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */



function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

// console.log(makeLine(5));

function buildTriangle (number) {
  let triangle = '';
  for (let line = 1; line <= number; line++) {
    triangle += makeLine(line);
  }
  return triangle;
}


console.log(buildTriangle(10));
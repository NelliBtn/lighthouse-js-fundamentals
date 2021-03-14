const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

for (let j = ingredients.length - 1; j >= 0; j--) {
  console.log(ingredients[j]);
}
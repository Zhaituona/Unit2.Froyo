// Prompt user to enter flavors
const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

// Split the string of flavors into an array of strings.
const flavors = userInputString.split(",");

// Create function to count number of each flavor ordered.
let flavorCount = {};

for (let i = 0; i < flavors.length; i++) {
  let flavor = flavors[i].trim();

  if (flavorCount[flavor]) {
    flavorCount[flavor]++;
  } else {
    flavorCount[flavor] = 1;
  }
}
console.table(flavorCount);

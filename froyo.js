// prompt("Enter a list of comma separated froyo flavors");
const chosenFlavors = prompt(
  "Enter a list of comma separated froyo flavors"
).split(",");
// choosenFlavors = [vanilla,vanilla,vanilla,strawberry,coffee,coffee]

function filterPush() {
  let table = {};
  chosenFlavors.forEach((flavor) => {
    flavor in table ? (table[flavor] += 1) : (table[flavor] = 1);
  });
  return table;
}

console.log(filterPush(chosenFlavors));

// Another Answer
// function filterPush() {
//   let table = {};
//   for (let i = 0; i < chosenFlavors.length; i++) {
//     let flavor = chosenFlavors[i];
//     flavor in table ? (table[flavor] += 1) : (table[flavor] = 1);
//   }
//   return table;
// }
// console.log(filterPush(chosenFlavors));

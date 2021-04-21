var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5Filter(value) {
  return value > 5;
}
var filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filtered number array: ", filteredNumberArray);

var shoppingList = ["milk", "donuts", "cookies", "chocolate", "peanut butter"];
console.log("Shopping List: ", shoppingList);

var searchValue = "donuts";
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}
var searchedShoppingList = shoppingList.filter(containsFilter);
console.log(searchedShoppingList);

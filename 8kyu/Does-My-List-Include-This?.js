//problem
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//answer 1
function include(arr, item){
  return arr.includes(item);
}

//answer 2
var include = (a, i) => a.indexOf(i) > -1;

//answer 3
function include(arr, item){
  return arr.some(n=>n===item);
}

//answer 4
function include(arr, item){
  return arr.indexOf(item)>-1
}


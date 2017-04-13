let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  __proto__: bed,
  money: 2000
};

console.log(table.glasses); //should be 1
console.log(pockets.pen); //should be 3

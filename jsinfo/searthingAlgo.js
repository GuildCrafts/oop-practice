/*
Use __proto__ to assign prototypes in a way that any property
lookup will follow the path: pockets → bed → table → head. For instance,
pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
*/

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

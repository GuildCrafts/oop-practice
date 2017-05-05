//Why Are two hamsters full?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food]; //<-- fix
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

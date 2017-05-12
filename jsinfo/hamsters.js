let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  _proto_: hamster
};

let lazy = {
  _proto_: hamster
};

//Create Calculator

let calculator = {

  read() {
    this.num1 = +prompt('num1?');
    this.num2 = +prompt('num2?');
  },
  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

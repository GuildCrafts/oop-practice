function Calculator() {

  this.read = function() {
    this.value1 = prompt("value the first");
    this.value2 = prompt("value the second");
  };

  this.sum = function() {
    return parseInt(this.value1) + parseInt(this.value2);
  };

  this.mul = function() {
    return this.value1 * this.value2;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

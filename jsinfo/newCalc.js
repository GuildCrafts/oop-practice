function Calculator() {
  this.read() = function() {
    this.a = +prompt("value 1?")
    this.b = +prompt("value 2?")
  },

  this.sum() = function() {
    return this.a + this.b;
  },

  this.mul() = function(){
    return this.a * this.b;
  };

}

let calculator = new Calculator();

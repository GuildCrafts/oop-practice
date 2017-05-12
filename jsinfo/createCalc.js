let calculator  = {
  a;
  b;
  read() {
    this.a = +prompt("number?");
    this.b = +prompt("2nd number?");

  },

  sum() {
    return this.a + this.b;

  },

  mul() {
    return this.a * this.b;


  }

};

let calculator = {
  sum () {
    return this.a + this.b;
 },
  mul () {
    return this.a * this.b;
 },
  read () {
     this.a = +prompt('first number', 0);
     this.b = +prompt('second number', 0);
 }
}

let calculator = {
  read() {
    this.value1 = prompt("value the first");
    this.value2 = prompt("value the second");
  },
  sum() {
    return parseInt(this.value1) + parseInt(this.value2);
  },
  mul() {
    return this.value1 * this.value2;
  }
}
calculator.read();
console.log(calculator.sum());

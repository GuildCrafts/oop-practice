function Calculator() {

  let methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function(str) {

    let splitted = str.split(' '),
    a = +splitted[0],
    operator = splitted[1],
    b = +splitted[2]

  return methods[operator](a, b);
  }


  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}

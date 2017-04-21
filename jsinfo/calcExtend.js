//old junked code, please ignore

//function calculate(str) {
//  var vals = str.split(" ");
//  if (vals[1] == "+") {
//    return parseInt(vals[0]) + parseInt(vals[2]);
//  } else if (vals[1] == "-") {
//    return parseInt(vals[0]) - parseInt(vals[2]);
//  }
//  return vals;
//}



function Calculator() {
//create an object where the keys are operators and the values are functions, I wish I was clever enough to think of this!
  let ops = {
    "-": function(x, y) {
      return x - y;
    },
    "+": function(x, y) {
      return parseInt(x) + parseInt(y);
    },
  }
//split str into vars so operator can be matched with key in "ops"
  this.calculate = function (str){
    let vals = str.split(" "),
      op = vals[1];
      x = vals[0];
      y = vals[2];
    return ops[op](x, y);
  }
//create new key:value pair by matching new operator with new function
  this.addOperator = function(name, func) {
    ops[name] = func;
  }
}

let calc = new Calculator();

let powerCalc = new Calculator;
powerCalc.addOperator("*", (a, b) => a * b);
powerCalc.addOperator("/", (a, b) => a / b);
powerCalc.addOperator("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 + 3");
console.log( result ); // 6

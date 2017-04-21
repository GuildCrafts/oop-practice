//calculator is a constructor function w 3 methods

//this.read is a function/prompts for values store as obj properties
//sum a + b
//mul a * b

function calculator(){ //calculator org func
     this.read = function (){
          this.a = +prompt("enter first number:", 0) //num 1
          this.b = +prompt("enter second number:", 0) //num 2
     },
     this.sum = function (){  //calculator sum obj/func/prop
      return this.a + this.b; //return num a + b
    },
     this.mul = function (){
          return this.a * this.b;
     }

}
let calculator = new Calculator;

alert( "Sum =" + calculator.sum() );
alert( "Mul =" + calculator.mul() );

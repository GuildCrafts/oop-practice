var Accumulator = function(startingValue){
   this.value = startingValue;

   this.read = function (){
     this.value += +prompt("enter a number:", 0);
   };
}



let accumulator = new Accumulator()

//An error in inheritance

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert(this.name + ' walks');
};

function Rabbit(name) {
  this.name = name;
}

//--> Rabbit.prototype = Animal.prototype <--
      //error here

Rabbit.protoype.__proto__ = Animal.prototype; //<-- fix

Rabbit.prototype.walk = function() {
  alert(this.name + " bounces!");
};

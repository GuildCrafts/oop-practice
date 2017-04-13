function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  return this.name + ' walks';
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.__proto__ = Animal.prototype;

Rabbit.prototype.walk = function() {
  return this.name + " bounces!";
}

var babs = new Animal("Babs");

console.log(babs.walk);

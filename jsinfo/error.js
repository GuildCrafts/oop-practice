Rabbit.prototype = Animal.prototype

Both become the same object so the methods inside each function become jumbled.
In this case, Rabbit.prototype would override Animal.prototype so Animal.prototype inherits the function of Rabbit.prototype.

Rabbit.prototype._proto = Animal.prototype allows the prototypes to be separate and store methods of the corresponding class,
with Rabbit.prototype inheriting from Animal.prototype.  

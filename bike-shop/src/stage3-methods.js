function Bike() {
  // your code here
  this.moving = false,
  this.tires = [new Tire(), new Tire()],
  this.rings = [3, 7]

}

Bike.prototype.isMoving = function() {
  return this.moving
}

Bike.prototype.pedal = function() {
  if (this.tires[0]._flat === true || this.tires[1]._flat === true ) {
    throw new Error("Can't pedal with a flat tire")
  } else {

   this.moving = true
  }
}

Bike.prototype.brake = function() {
  return this.moving = false
}

Bike.prototype.gearSpeeds = function() {
  return this.rings.reduce((acc, next) => {
    return acc * next
  }, 1)
};

function Tire() {
   this._flat = false
  }

  Tire.prototype.isFlat = function() {
    return this._flat
  }

  Tire.prototype.puncture = function() {
    this._flat = true
  }

  Tire.prototype.repair = function() {
    this._flat = false
  }




module.exports = {
  Bike: Bike,
  //Frame: Frame,
  Tire: Tire
}

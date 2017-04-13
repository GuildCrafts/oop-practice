function Bike() {
  // your code here
  this.isMoving = function () {
    return false;
  };

  this.tires = [];
  this.tires[0] = new Tire();
  this.tires[1] = new Tire();

  this.pedal = function () {
    if (this.tires[0].isFlat() || this.tires[1].isFlat()) {
      throw "Can't pedal with a flat tire";
    };
    this.isMoving = function () {
      return true;
    };
  };

  this.brake = function () {
    this.isMoving = function () {
      return false;
    };
  };

  this.gearSpeeds = function () {
    return this.rings[0] * this.rings[1];
  };
}

function Frame() {
  // your code here
}

function Tire() {
  // your code here
  this.isFlat = function() {
    return false;
  };

  this.puncture = function() {
    this.isFlat = function() {
      return true;
    };
  };

  this.repair = function () {
      this.isFlat = function() {
        return false;
      };
  };
};


module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}

class Frame {
  constructor(style){
    this.style = style;
  }
}

class Tire {
  constructor(diameter, type) {
    this.diameter = diameter;
    this.type = type;
  }
}

class Bike {
  constructor() {
    this.tires = [new Tire(), new Tire()];
    this.frame = new Frame();
  }
}

class MountainBike extends Bike {
  constructor() {
  super();
  this.frame.style = 'mountain';
  this.tires[0].type = 'dirt';
  this.tires[1].type = 'dirt';
  this.shocks = 20;
}
  adjustShocks(x) {
    this.shocks = x;
  }
}

class BMXBike extends Bike {
  constructor() {
    super();
    this.brakes = {
      front : false,
      back : true
    }
    this.tires.diameter[0] = 20;
    this.tires.diameter[1] = 20;
  }
}

class RacingBike extends Bike {
  constructor() {
    super();
    this.frame.style = 'racing';
    this.tires[0].type = 'road';
    this.tires[1].type = 'road';
    this.rings = [3, 10];
  }
  gearSpeeds() {
    return (parseInt(this.rings[0])) * (parseInt(this.rings[1]));
  }
}

module.exports = {
  Bike: Bike,
  // you'll need to export new classes here
  Frame: Frame,
  Tire: Tire,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike,
}

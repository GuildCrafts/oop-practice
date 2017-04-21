class Frame {
 constructor () {
  this.style = "default";
  }
}

class Tire {
  constructor (){
   this.type = "default";
   this.diameter = 20;

 }
}

class Bike  {
 constructor (){
  this.frame = new Frame;
  this.tires = [new Tire(), new Tire()];
  this.brakes = new Brakes;
  }
}

class MountainBike extends Bike {
 constructor () { super();
  this.frame.style = "mountain";
  this.tires[0].type = "dirt";
  this.tires[1].type = "dirt";
  this.shocks = 20;
  }

  adjustShocks (num){
    this.shocks = num;
  }
}

class BMXBike extends Bike {
}

class RacingBike extends Bike {
     // this.style = "racing"
     // this.type = "road"

}

class Brakes {
  constructor(){
   this.front = false;
   this.back = true;
 }
}

module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike,
  // you'll need to export new classes here
}

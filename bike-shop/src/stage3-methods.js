function Bike() {
 this.isMoving =  function(){
   return false;
};
  this.tires = [new Tire(), new Tire()]
  this.pedal = function (){
   if (this.tires[0].isFlat() || this.tires[1].isFlat()) {
     throw "Can't pedal with a flat tire"
   }

   this.isMoving = function (){
     return true;
   }
  }
  this.brake = function(){
   this.isMoving = function(){
        return false;
   }
  }
   this.gearSpeeds = function(){
     }
   this.rings = [3,7];
    this.gearSpeeds = function(){
        return this.rings[0] *this.rings[1]
       }
   }


function Frame() {
  // your code here
}

function Tire() {
  this.isFlat = function(){
      return false;
     }
   this.puncture = function(){
     this.isFlat = function(){
     return true;
        }
   };
     this.repair = function(){
       this.isFlat = function(){
        return false;
       };
     }
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
};

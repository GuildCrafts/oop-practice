
function Frame(color, size, style) {
  this.color = 'black';
  this.size = 55;
  this.style = 'street';
}

let myFrame = new Frame();

function myFrame() {
  this.color = 'blue',
  this.size = 60,
  this.style = 'mountain'
};

// myFrame.color = 'blue';
// myFrame.size = 60;
// myFrame.style = 'mountain';

function Tire() {
}

function Bike() {

}


module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}

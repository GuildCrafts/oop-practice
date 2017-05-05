const myBike = {
  name: "Roadster",
  price: 199.99,
  frame: new frame() {
    height: 55,
    color: 'blue',
    stlye: 'cruiser'
  }
  brakes: new brakes() {
    front: false,
    back: true
  }
  tires: new tires() {
    diameter: 22,
    type: 'fat'
  }
  rings: new rings() {
    front: 2,
    back: 5
  }
}


module.exports = myBike

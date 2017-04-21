class Artist {
  constructor(name, bandmembers, genre){
     this.name = name;
     this.bandmembers = bandmembers;
     this.genre = genre;
 }
}

let littleDragon = new Artist ("Little Dragon", ["Yukimi Nagano", "Erik Bodin", "Hakan Wirenstrand", "Frederik Wallin"], "Indie");

console.log(littleDragon.artist)

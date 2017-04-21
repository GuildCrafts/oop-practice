class Song {
  constructor(title){
     this.name = name;
     this.length = length;
 }
 
 Song.prototype = {
  play: function(){
     return this.name + "plays";
  },
  pause: function(){
       return this.name + "pauses";
  };
 }

}

// }
//
// class Artist {
//   constructor(name, bandmembers, genre){
//      this.name = name;
//      this.bandmembers = bandmembers;
//      this.genre = genre;
//  }
// }
//
// let littleDragon = new Artist (("Little Dragon", "Yukimi Nagano, Erik Bodin, Hakan Wirenstrand, Frederik Wallin", "Indie"));
//
//

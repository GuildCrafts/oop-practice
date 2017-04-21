//class Artist {
//  constructor(name, bandmembers, genre){
//  this.name = name;
//  this.bandMembers = bandmembers;
//  this.genre = genre;
//  }
//}
const Artist = require ("./artist.js")

class Album {
  constructor(title, songcount, [name, bandmembers, genre]) {
    this.title = title;
    this.songCount = songcount;
    this.artist = new Artist(name, bandmembers, genre)
  }
}

let sgtpepper = new Album ("Sgt. Pepper's Lonely Hearts Club Band", 13, ["The Beatles", ["John Lennon", "Ringo Star", "Paul Mcartney", "George Harrison"], "classic rock"]);

console.log(sgtpepper.artist.bandMembers);

//console.log(sgtpepper.songCount);

module.exports = Album;

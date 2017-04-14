class Song extends Album {
  constructor(title, length){
  this.title = title;
  this.length = length
  
  //.artist, inherits from album
  }
  play() {
    return this.title + " is now playing.";
  }
  pause() {
    return this.title + " is paused.";
  }
}

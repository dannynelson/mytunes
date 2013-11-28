// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
    this.on('add', this.checkFirst, this);
    this.on('ended', this.removeFirst, this);
  },

  checkFirst: function() {
    // if it is the first in the array, playIt
    if (this.length === 1) this.playFirst();
  },

  removeFirst: function() {
    this.shift();
    if (this.length) this.playFirst();
  },

  playFirst: function() {
  }

});

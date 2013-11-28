// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
    this.on('add', this.checkFirst, this);
    this.on('ended', this.removeFirst, this);
  },

  checkFirst: function() {
    if (this.length === 1) this.playFirst();
  },

  playFirst: function() {
  },

  removeFirst: function() {
    this.get(0).remove();
  }

});

var playerDom,player,playlist,song;

describe("TestVideoSpec", function() {
	  console.log("This is my very 1st testcase in my lifetime!");
	  beforeEach(function () {
	        playerDom = $(
	           '<div id="player">\
	        		<div id="myElement"></div>\
	        		<div id="playbutton">Please start playback first!</div>\
	        	</div>'
	        );
    		$(document.body).append(playerDom);
    		getPlayer();
    		player = playerInstance;
    		playlist = player.getPlaylist();
    		song   = playlist[0];
    		debugger;
	  });

	  afterEach(function () {
		  player.remove();
		  playerDom.remove();
		  player = null;	      
	  });

  it("should be able to play a Song", function() {
    player.play(playlist[0]);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });		  
});




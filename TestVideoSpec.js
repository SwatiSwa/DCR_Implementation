describe("TestVideoSpec", function() {
	  var playerDom,player;

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
    		debugger;
	  });	
	  it("should be able to play a Song", function() {
	  });
	  afterEach(function () {
		  playerDom.hide();
		 //  myElement = null;	      
	  });		  
});



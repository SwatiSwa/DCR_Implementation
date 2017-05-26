

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


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Jasmine Spec Runner v2.5.2</title>

  <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.5.2/jasmine_favicon.png">
  <link rel="stylesheet" href="lib/jasmine-2.5.2/jasmine.css">

  <script src="lib/jasmine-2.5.2/jasmine.js"></script>
  <script src="lib/jasmine-2.5.2/jasmine-html.js"></script>
  <script src="lib/jasmine-2.5.2/boot.js"></script>
  <script src="jquery.js"></script>
  <script src="jasmine-jquery.js"></script>

  <script src="https://content.jwplatform.com/libraries/URxg89az.js"></script>
  <script>jwplayer.key="dN8rYM3cyRXw9+6UI9FEMnq1UQWgMa6Ld3sheQ==";</script>

  <!-- include spec files here... -->
  <script src="spec/TestVideoSpec.js"></script>

</head>

<body>
   <script type="text/javascript" src="../js/main.js"></script>
</body>
</html>




var btn = document.getElementById("playbutton"),
    ply = false,
    tag = "assets/Nielsen_ad.mp4",
    playerInstance = jwplayer("myElement"),
    //create content object
    content_metadata_object ={
      type          : 'content',
      assetid       : 'VID345-67483',
      isfullepisode : 'y',
      program       : 'programName',
      title         : 'EpisodeTitle S3 E1',
      length        : '3600',
      mediaURL      : 'http://../exampledomain.com',
      segB          : 'segmentB',
      segC          : 'segmentC',
      crossId1      : 'CS-1',
      crossId2      : 'CS-2',
      airdate       : '20161013 20:00:00',
      adloadtype    : '2',
      hasAds        : '1'
    },
    //create ad object
    ad_metadata_object = {
      assetid       : 'AD-1',
      type          : 'preroll'
    };

playerInstance.setup({
    'plugins'     : {
      'js/ggcmb510.js' : {
          apid                 : 'DHG163HR-BH45-JKY6-BKH7-67GJKY68GJK7',
          sfcode               : 'qat1',
          nsdkv                : '511',
          apn                  : 'Test_JWPlayer',
          //nol_sdkDebug         : 'console',
          stream_custom_params : content_metadata_object
        }
    }, 
   'playlist':[  
        {  
           'description':'Happy New Year',
           'pubdate':1483384629,
           'tags':'',
           'image':'https://content.jwplatform.com/thumbs/2ituTHgC-720.jpg',
           'sources':[  
              {  
                 'type':'video/mp4',
                 'file':'assets/HNY1.mp4'
              }
           ],
           'tracks':[  

           ],
           'link':'https://content.jwplatform.com/previews/2ituTHgC',
           'duration':0,
           'mediaid':'2ituTHgC',
           'title':'New Year Video 1',
           'custom':{  

           }
        },
        {  
           'description':'Happy New Year',
           'pubdate':1483384584,
           'tags':'',
           'image':'https://content.jwplatform.com/thumbs/bwFtx2Gn-720.jpg',
           'sources':[  
              {  
                 'type':'video/mp4',
                 'file':'assets/HNY2.mp4'
              }
           ],
           'tracks':[  

           ],
           'link':'https://content.jwplatform.com/previews/bwFtx2Gn',
           'duration':0,
           'mediaid':'bwFtx2Gn',
           'title':'New Year Video 2',
           'custom':{  

           }
        }
     ],
     'title':'Happy New Year',
     'kind':'dynamic',
     'feedid':'KDBLXSPB',
     'stretching' : 'uniform',
     'width' : '80%',
     'height' : '40%',
    /*file        : "https://content.jwplatform.com/videos/hWF9vG66-TNpruJId.mp4",
    image       : "https://content.jwplatform.com/thumbs/hWF9vG66-480.jpg",*/
    advertising : {
      client: "vast"
    }
});

playerInstance.on('play',function() {
  ply = true;
  btn.innerHTML = "<a href='javascript:playNext()'>Play Next!</a>";
});
playerInstance.on('pause',function() {
  ply = false;
  btn.innerHTML = "Please unpause video to play video!";
});
playerInstance.on('idle',function() {
  ply = false;
  btn.innerHTML = "Player idle. Please restart playback.";
});

playerInstance.on('volume',function() {
  ply = false;
  //alert("Volume has been changed to:"+playerInstance.getVolume());
  btn.innerHTML = "Volume has been changed to:"+playerInstance.getVolume();
});

function playNext() {
  if(ply) {
    playerInstance.next();
    ply = false;
    btn.innerHTML = "Playing next Video! Please wait...";
   }
};
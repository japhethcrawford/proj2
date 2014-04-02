'use strict';

/*
(function($) {
	var 
		
})
*/









/* Youtube API Key: AIzaSyBJHN8jCr4fenlfmNWnyFGbpOJ73l68Nqw */


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function load() {
	gapi.client.setApiKey('AIzaSyBJHN8jCr4fenlfmNWnyFGbpOJ73l68Nqw');
  gapi.client.load('urlshortener', 'v1', makeRequest);	
}

function makeRequest() {
  var request = gapi.client.urlshortener.url.get({
    'shortUrl': 'http://goo.gl/fbsS'
  });
  request.execute(function(response) {
    appendResults(response.longUrl);
  });
}

function appendResults(text) {
   var results = document.getElementById('results');
   results.appendChild(document.createElement('P'));
   results.appendChild(document.createTextNode(text));
}



(function($) {
	//Assign YouTube API Key and Get YouTube Videos
	var gapi.client.setApiKey('AIzaSyBJHN8jCr4fenlfmNWnyFGbpOJ73l68Nqw');
	var gapi.client.load('youtube.videos.list', 'v1', function() { console.log('loaded.'); });
	
	
	//Get Vimeo Username and Video
	var vimeoUsername = 'japhethcrawford',
		vimeoVideoId = '88327649',
		vimeoVideos = 'http://vimeo.com/api/v2/' + vimeoUsername + '/videos.json',
//		vimeoId = $.getParam('videoId'),
		youtubeVideos = '';
	
	//Direct Vimeo what Functions to Call
	//var title: videoTitle,
	
	// Get List of Videos
	// Youtube & Vimeo
	
	var req = $.ajax({
		url: vimeoVideos,
		dataType: 'jsonp',
		type: 'GET'
	});
	
	req.done(function (data){
		var videoReq = $.ajax({
			url: 'http://vimeo.com/api/v2/video/' + data[0].id +'.json'
		});
		
		videoReq.done(function (data){
			console.log(data);
		});
	})

		
})(jQuery);
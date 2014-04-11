'use strict';
/* ////////////REFERENCE\\\\\\\\\\\\\\\\\\*/
/* Youtube API Key: AIzaSyBJHN8jCr4fenlfmNWnyFGbpOJ73l68Nqw */
/* Youtube Client ID: 283220766280.apps.googleusercontent.com */
/* Youtube video = cD_VkkuKpK8 */
/* Vimeo video id = 88327649 */
/* Vimeo username: japhethcrawford */
/* Youtube username: japhethcrawford */






(function($) {

	//Get Vimeo Username and Video
	var vimeoUsername = 'japhethcrawford',
		vimeoVideoId = '88327649',
		vimeoVideos = 'http://vimeo.com/api/v2/' + vimeoUsername + '/videos.json';
	
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
	
/*
	function showData(data){
		var views = document.getElementById('views');
		
		for (var i = 0; < videos.length; i++) {
			var p = document.createElement('p');
			p.appendChild(title)
		}
		
	}
*/
	
	
	

		
})(jQuery);
'use strict';

		var vimeoUserName = 'storyfarmvideo';

		// Tell Vimeo what function to call
		var callback = 'showThumbs';

		// Set up URLs
		var url = 'http://vimeo.com/api/v2/' + vimeoUserName + '/videos.json?callback=' + callback;

		// load vimeo data
		function init() {
			var js = document.createElement('script');
			js.setAttribute('type', 'text/javascript');
			js.setAttribute('src', url);
			document.getElementsByTagName('head').item(0).appendChild(js);
		}

		// Print videos with thumbnails to page
		function showThumbs(videos) {
			var thumbs = document.getElementById('thumbs');
			thumbs.innerHTML = '';

			for (var i = 0; i < videos.length; i++) {
				var a = document.createElement('a');
				a.setAttribute('href', 'details.html?vimeoID=' + videos[i].id);
				a.setAttribute('target', '_blank');
				a.setAttribute('class', 'videoLink large-12 columns');
				a.setAttribute('data-vimeo', videos[i].id);
				a.setAttribute('title-vimeo', videos[i].title);
				a.setAttribute('data-youtube', videos[i].id);
				a.appendChild(document.createTextNode(videos[i].title));
				
				var thumb = document.createElement('img');
				thumb.setAttribute('src', videos[i].thumbnail_large);
				thumb.setAttribute('alt', videos[i].title);
				thumb.setAttribute('title', videos[i].title);
				thumb.setAttribute('class', 'large-12 columns thumbnail');
				

				
				var p = document.createElement('p');
				p.setAttribute('class', 'large-4 columns');
				p.appendChild(document.createElement('br'));
				p.appendChild(a);
				p.appendChild(document.createElement('br'));
				p.appendChild(document.createElement('br'));
				p.appendChild(thumb);
				thumbs.appendChild(p);
				

			}
			
			$('.videoLink').on('click', function(event) {
				event.preventDefault();
				showStats($(this).attr('data-vimeo'), $(this).attr('data-youtube'));
			});
		}
		
		function showStats(vimeoID, youtubeID) {
			$('#thumbs').hide();
			
/*
				var div = document.createElement('div');
				var h1 = document.createElement('h1');
				div.setAttribute('class', 'large-6 columns stats');
				h1.setAttribute(document.createTextNode(videoTitle));
*/

				
		
			
			alert(vimeoID, youtubeID);
		}

		

		// Call init function when the page loads
		window.onload = init;
		
		
		
/* 		var vimeoID = getUrlParameters("vimeoID", "", true); */
		
		console.log();

		
		// Print video details on details page
		/*
function showStats() {
			var data = document.getElementById('data');
			data.innerHTML = '';
			
			function () {
				var thumb = document.createElement('img');
				thumb.setAttribute('src', videos[i].thumbnail_laarge);
				thumb.setAttribute('alt', videos[i].title);
				thumb.setAttribute('title', videos[i].title);
				thumb.setAttribute('class', 'large-12 columns thumbnail');
				
				var p = document.createElement('p');
				p.setAttribute('class', 'large-4 columns');
				p.appendChild(thumb);
				thumbs.appendChild(p);
			}
		}
*/
var carawebsMap;
		function initialize() {
		var myOptions = {
			zoom: 10,
			center: new google.maps.LatLng(52.659692, -8.632643),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			disableDefaultUI: false,
			styles:
        [
          {"featureType":"water",
					"stylers":[{"visibility":"on"},{"color":"#0e7488"}]},
          {"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},
          {"featureType":"road.highway","elementType":"geometry",
						"stylers":[{"color":"#777777"}]},
          {"featureType":"road.arterial","elementType":"geometry",
						"stylers":[{"color":"#c0c0c0"}]},
          {"featureType":"road.local","elementType":"geometry",
						"stylers":[{"color":"#fbfaf7"}]},
          {"featureType": "road.highway", "elementType": "labels",
						"stylers": [{ "visibility": "off" }]},
          {"featureType": "transit.line", "elementType": "labels.icon",
						"stylers": [{ "visibility": "off" }]},
          {"featureType":"poi.park","elementType":"geometry",
						"stylers":[{"color":"#c5dac6"}]},
          {"featureType":"administrative",
						"stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},
          {"featureType":"poi.park","elementType":"labels",
						"stylers":[{"visibility":"on"},{"lightness":20}]},{},
          {"featureType":"road","stylers":[{"lightness":20}]}]
        };

		carawebsMap = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

		// Define an image to be used as a marker
		// var image set from wp_localize_script in the enqeueing function
		//var image = 'http://localhost:9000/assets/images/marker.png';
		//var image = document.body.getAttribute("data-src");
		//var image = markerImage;

    console.log(image);


		var centreLatLng = new google.maps.LatLng(52.659692,-8.632643);
        /* School Co-ordinates */
        var mainLatLng = new google.maps.LatLng(52.659692,-8.632643); // Graduate School of Motoring
        var secondLatLng = new google.maps.LatLng(52.713686, -8.863001); // Shannon

    // -------------------------------------------------------------------------
    // Position the Markers
    // -------------------------------------------------------------------------
    var marker = new google.maps.Marker({
			position: mainLatLng,
			icon: image,
			map: carawebsMap,
			title: 'Graduate School of Motoring'
        });

    var marker2 = new google.maps.Marker({
			position: secondLatLng,
			icon: image,
			map: carawebsMap,
			title: 'Graduate School of Motoring'
        });

      // -----------------------------------------------------------------------
      // Content Strings for Markers
      // -----------------------------------------------------------------------

      // Graduate School of Motoring
        var graduateContentString =
        '<div id="content" style="color: #666;">'+
        '<h4 id="firstHeading" class="firstHeading">Graduate School of Motoring</h4>'+
        '<div>'+
        '<p><b>Graduate School of Motoring</b> is where we started<br>'+
        '</div>'+
        '</div>';

      // Ennistymon CBS
			 	var shannonContentString = '<div id="content" style="color: #000;">'+
				 '<h4 id="firstHeading" class="firstHeading">Graduate School of Motoring: Shannon</h4>'+
				 '<div id="bodyContent">'+
				 '<p>Some information about Graduate in Shannon</p>'+
				 '</div>'+
				 '</div>';

    /*===========================
      Set the InfoWindow
    ===========================*/

			var ennisInfowindow = new google.maps.InfoWindow({
                content: graduateContentString
            });

			var ennistymon1InfoWindow = new google.maps.InfoWindow({
                content: shannonContentString
            });


			/*===================================
        Click Events for Markers
      ===================================*/

            // Graduate School of Motoring
            google.maps.event.addListener(marker, 'click', function() {
				ennisInfowindow.open(carawebsMap,marker); // Reference the info window and marker
            });

            // Ennistymon CBS
            google.maps.event.addListener(marker2, 'click', function() {
				ennistymon1InfoWindow.open(carawebsMap,marker2);
            });

		}

		google.maps.event.addDomListener(window, "load", initialize);
		google.maps.event.addDomListener(window, "resize", function() {
			 var center = carawebsMap.getCenter();
			 google.maps.event.trigger(carawebsMap, "resize");
			 carawebsMap.setCenter(center);
        });

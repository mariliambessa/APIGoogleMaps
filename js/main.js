const mondrian = [
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#0F0919"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#E4F7F7"
            }
        ]
    },
    {
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#002FA7"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#E60003"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#FBFCF4"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#FFED00"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#D41C1D"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#BF0000"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": -100
            }
        ]
    }
]

function initMap() {
	const pelotas = {lat: -31.76, lng: -52.340986}
	const aquarelaTintas = {lat: -31.752805, lng: -52.337116}

	const map = new google.maps.Map(document.getElementById('map'), {
		center: pelotas, zoom: 12,
		styles: mondrian,
	});

	const marker = new google.maps.Marker({
		position: aquarelaTintas,
		map: map,
		title: 'Aquarela Tintas',
		icon: 'https://source.unsplash.com/50x50/?colors'
  	});

  	const infowindow = new google.maps.InfoWindow({
    content: '<p> Olá! Aqui é a loja matriz da Aquarela Tintas </p> '
  	});

  	marker.addListener('click', function() {
    infowindow.open(map, marker);
  	});
}

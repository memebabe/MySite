var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 16.049743103281894, lng: 108.2230364322662},
        zoom: 18,
        mapTypeId: 'roadmap',
        styles: [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "20"
                },
                {
                    "lightness": "-5"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-70"
                },
                {
                    "lightness": "-3"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "100"
                },
                {
                    "lightness": "-14"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "lightness": "12"
                }
            ]
        }
        ]
    });

    var icon = {
        url: 'images/Map-Marker-Marker-Inside-Pink-icon.png',
        size: new google.maps.Size(60, 60),
        scaledSize: new google.maps.Size(60, 60),
        origin: new google.maps.Point(0,0)
      }

    marker = new google.maps.Marker({
        map: map,
        icon: icon,
        draggable: true,
        animation: null,
        position: {lat: 16.049743103281894, lng: 108.2230364322662}
    });
    marker.addListener('mouseover', markerMouseover);
    marker.addListener('mouseout', markerMouseout);
}

function markerMouseover() {
    marker.setAnimation(google.maps.Animation.BOUNCE);
}

function markerMouseout() {
    marker.setAnimation(null);
}

function mapClick() {
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });
}
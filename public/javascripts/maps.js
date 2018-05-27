// This example creates a custom overlay called USGSOverlay, containing
      // a U.S. Geological Survey (USGS) image of the relevant area on the map.

      // Set the custom overlay object's prototype to a new instance
      // of OverlayView. In effect, this will subclass the overlay class therefore
      // it's simpler to load the API synchronously, using
      // google.maps.event.addDomListener().
      // Note that we set the prototype to an instance, rather than the
      // parent class itself, because we do not wish to modify the parent class.

      var overlay, location;
      var map;
      var srcImagePink = 'images/Cam05.png';
      var srcImageAzure = 'images/Map-Marker-Marker-Outside-Chartreuse-icon.png';
      USGSOverlay.prototype = new google.maps.OverlayView();

      // Initialize the map and the custom overlay.

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 16.062639985199173, lng: 108.2124263314497},
            zoom: 17,
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

        google.maps.event.addListener(map, 'click', mapClick);
        
        locations = [
            {
                x: 16.0607841801677,
                y: 108.21965756695386,
                state: 2
              },
              {
                x: 16.05981503066173,
                y: 108.21116032879468,
                state: 2
              },
              {
                x: 16.058680913545317,
                y: 108.20607486050244,
                state: 2
              },
              {
                x: 16.06567109619664,
                y: 108.20257725994702,
                state: (Math.floor(Math.random() * 11) % 2)
              },
              {
                x: 16.066207206260977, 
                y: 108.20678296368237,
                state: (Math.floor(Math.random() * 11) % 2)
              },
              {
                x: 16.06645464118802,
                y: 108.21030202190991,
                state: (Math.floor(Math.random() * 11) % 2)
              },
              {
                x: 16.067176324634126, 
                y: 108.214100029875,
                state: (Math.floor(Math.random() * 11) % 2)
              },
              {
                x: 16.06624844543685, 
                y: 108.22008672039624,
                state: (Math.floor(Math.random() * 11) % 2)
              },
              {
                x: 16.054639280005112, 
                y: 108.2119757203352,
                state: (Math.floor(Math.random() * 11) % 2)
              },
              {
                x: 16.0648050691949, 
                y: 108.21648183148022,
                state: (Math.floor(Math.random() * 11) % 2)
              },
              {
                x: 16.056928174382392, 
                y: 108.21721139233227,
                state: (Math.floor(Math.random() * 11) % 2)
              },
              {
                x: 16.06138685974359, 
                y: 108.23433387487216,
                state: (Math.floor(Math.random() * 11) % 2)
              },
              {
                x: 16.072556401609248, 
                y: 108.23055751058212,
                state: (Math.floor(Math.random() * 11) % 2)
              }
        ];

        overlay = new USGSOverlay(locations, srcImagePink, map);
        setTimeout(swapState, 10000);
    }

    function swapState() {
        locations.forEach( function(location) {
            var index = locations.indexOf(location)
            var div = document.getElementById('mark' + index);

            var swap = (Math.floor(Math.random() * 11) % 2) == 0;

            if (index > 2 && swap) {
                location.state = (Math.floor(Math.random() * 11) % 3);
                if (location.state == 0) {
                    div.className = 'pulse red';
                    img = div.getElementsByTagName('img')[0];
                    img.src = srcImagePink;
                } else {
                    div.className = 'pulse yellow';
                    img = div.getElementsByTagName('img')[0];
                    img.src = srcImageAzure;
                }
            }
        });
        setTimeout(swapState, 10000);
    }

      /** @constructor */
      function USGSOverlay(locations, imagesrc, map) {

        // Initialize all properties.
        this.locations_ = locations;
        this.imagesrc_ = imagesrc;
        this.map_ = map;

        // Define a property to hold the image's div. We'll
        // actually create this div upon receipt of the onAdd()
        // method so we'll leave it null for now.
        this.mark_ = null;

        // Explicitly call setMap on this overlay.
        this.setMap(map);
      }

      /**
       * onAdd is called when the map's panes are ready and the overlay has been
       * added to the map.
       */
      USGSOverlay.prototype.onAdd = function() {
        var locations = this.locations_;
        var imgsrc = this.imagesrc_;
        var mark = document.createElement('div');
        locations.forEach( function(location) {
            
            var div = document.createElement('div');
            div.style.position = 'relative';
            div.style.cursor = 'pointer';
            div.className = 'pulse';
            div.style.textAlign = 'center';
            div.id = 'mark' + locations.indexOf(location);
            
            // Create the img element and attach it to the div.
            var image = document.createElement('img');
            image.src = imgsrc;
            image.style.width = '100%';
            image.style.height = '100%';
            image.style.position = 'absolute';
            div.appendChild(image);

            // var text = document.createElement('p');
            // text.innerText = 'mark' + locations.indexOf(location);
            // div.appendChild(text);

            mark.appendChild(div);
        });

        this.mark_ = mark;

        // Add the element to the "overlayLayer" pane.
        var panes = this.getPanes();
        panes.overlayLayer.appendChild(mark);
      };

      USGSOverlay.prototype.draw = function() {

        // We use the south-west and north-east
        // coordinates of the overlay to peg it to the correct position and size.
        // To do this, we need to retrieve the projection from the overlay.
        var overlayProjection = this.getProjection();

        var locations = this.locations_;
        var mark = this.mark_;
        locations.forEach( function(location) {
            var index = locations.indexOf(location)
            var div = document.getElementById('mark' + index);
            var latLng = new google.maps.LatLng(location.x, location.y);
            var position = overlayProjection.fromLatLngToDivPixel(latLng);

            div.style.left = position.x + 'px';
            div.style.top = (position.y - (25 + index * 50)) + 'px';

            if (location.state == 0)
            {
                div.className = 'pulse red';
                img = div.getElementsByTagName('img')[0];
                img.src = srcImagePink;
            }
            else
            {
                div.className = 'pulse yellow';
                img = div.getElementsByTagName('img')[0];
                img.src = srcImageAzure;
            }
        });
      };

      // The onRemove() method will be called automatically from the API if
      // we ever set the overlay's map property to 'null'.
      USGSOverlay.prototype.onRemove = function() {
        // this.div_.parentNode.removeChild(this.div_);
        // this.div_ = null;
      };

      function mapClick(event) {
        alert(event.latLng);
      }

      google.maps.event.addDomListener(window, 'load', initMap);
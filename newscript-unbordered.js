//Julia Hesse-Fong, Alo Navarro, Rachael Wang, Ale Vasques
//GirlsWhoCode final project
//7.22.2015
//accesses the api (using the key provided)


L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
//creates a map (initializes)
var map = L.mapbox.map('map', 'examples.map-20v6611k')
  .setView([38.12367, -76.81229], 9);

//initializing the feature layer
var myLayer = L.mapbox.featureLayer().addTo(map);
//initializes map style
var myTile = L.mapbox.tileLayer('mapbox.satellite').addTo(map);

var geojson = {
    type: 'FeatureCollection', //a collection of map points


    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: 'Los Angeles',
            description: 'end location',
            'marker-color': '#6699ff',
            'marker-size': 'large',
            'marker-symbol': 'city',
        },
        geometry: {
            type: 'Point',
            coordinates: [-118.233185, 34.051124]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Hong Kong, China',
            description: ' A crazy man lived here',
            'marker-color': '#eae374',
            'marker-size': 'large',
            'marker-symbol': 'city',
        },
        geometry: {
            type: 'Point',
            coordinates: [114.177094, 22.286111]
        }
    },

	{
		type: 'Feature',
		properties: {
			title: 'Shanghai',
			description: '...',
			'marker-color': '#E9967A', //dark salmon
			'marker-size': 'large',
			'marker-symbol': 'garden',
		},
		geometry: {
			type: 'Point',
			coordinates:   [121.473389, 31.233530]

		}
		//gps-coordinates.net //lat,long
		//mapbox.com/maki
	},
	
	

    ]
};

myLayer.setGeoJSON(geojson); // Adds all of the markers to the map

map.on('ready', function() {
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());
});

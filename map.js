'use strict'        

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYW15Z2Nvbm5vciIsImEiOiJjbW9kYWd0aDEwMTBuMm9vbGc1amRnenpjIn0.DG90J5XYDWue-_3Bn6_0nQ'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.93324, 40.80877],
    zoom: 14
});

var blocks_url = "./data/blocks_joined_trees_um.geojson"

map.on('load',function(){
  // define a 'source' for your polygons dataset
  map.addSource('blocks_data',{
    'type':'geojson',
    'data': blocks_url,
  });
  // add a new layer with your polygons
  map.addLayer({
    'id':'blocks',
    'type':'fill',
    'source':'blocks_data',
    'paint':{
      'fill-color':'#ffffff',
      'fill-outline-color':'#000000',
      'fill-opacity': 0.5
    }
  })

  // define a 'source' for your point dataset
    map.addSource('trees_data',{
      'type':'geojson',
      'data': trees_url
    });
    // add a new layer with your points
    map.addLayer({
      'id':'trees',
      'type':'circle',
      'source':'trees_data',
      'paint':{
        'circle-color': '#349f27',
        'circle-opacity':0.7,
        'circle-radius': ['/', ['get', 'tree_dbh'], 5],
      },
    })
});

var trees_url = "./data/2015_Street_Tree_Census_subset_um.geojson"
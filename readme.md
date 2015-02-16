ReactMap
--------

Provides an easy leaflet.js wrapper for react, so that you can initialize a map as a React-component:

    <Map lat="60.0" lon="10.0" zoom="10"/>


Properties
----------

* lat (required): initial latitude of map
* lon (required): initial longitude of map
* zoom (required): initial zoom level of map
* createMap (optional): function that takes a DOM-element and creates a map, the default is quite simple:

```javascript    
function (element) {
    var map = L.map(element);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    return map;
}
```

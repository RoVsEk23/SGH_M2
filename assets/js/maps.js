function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {
      lat: 51.494805,
      lng: -0.177363,
    },
  });
  var labels = "ABCDEFGHIJKLMNOOPQRSTUVWXYZ";

  var locations = [
    {
      lat: 51.494181,
      lng: -0.173949,
    },
    {
      lat: 51.496728,
      lng: -0.176364,
    },
    {
      lat: 51.494421,
      lng: -0.182725,
    },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

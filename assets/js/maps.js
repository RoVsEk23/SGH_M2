function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 51.494805,
      lng: -0.177363,
    },
  });
  var labels = "ABCDEFGHIJKLMNOOPQRSTUVWXYZ";

  var locations = [
    {
      lat: 51.494805,
      lng: -0.177363,
    },
    {
      lat: 51.253348,
      lng: -0.162888,
    },
    {
      lat: 51.099775,
      lng: -0.206,
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

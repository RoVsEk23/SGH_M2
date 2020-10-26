function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 46.619261,
      lng: -33.134766,
    },
  });
  var labels = "ABCDEFGHIJKLMNOOPQRSTUVWXYZ";

  var locations = [
    {
      lat: 51.096399,
      lng: -0.210595,
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

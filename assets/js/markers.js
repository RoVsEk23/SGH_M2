var map;
var InfoObj = [];
var centerCords = { lat: 51.494805, lng: -0.177363 };

var icons = {
  house: {
    icon: "assets/images/markericons/house.png",
  },
  pub: {
    icon: "assets/images/markericons/beer.png",
  },
  restaurant: {
    icon: "assets/images/markericons/cutlery.png",
  },
  grocery: {
    icon: "assets/images/markericons/grocery.png",
  },
  subway: {
    icon: "assets/images/markericons/underground.png",
  },
  museum: {
    icon: "assets/images/markericons/museum.png",
  },
};

var markersOnMap = [
  {
    placeName: "Selsey House",
    LatLng: [{ lat: 51.494805, lng: -0.177363 }],
    type: "house",
  },
  {
    placeName: "Natural History Museum",
    LatLng: [{ lat: 51.496729, lng: -0.176354 }],
    type: "museum",
  },
  {
    placeName: "SOUTH KENSINGTON STATION",
    LatLng: [{ lat: 51.494154, lng: -0.173965 }],
    type: "subway",
  },
];

window.onload = function () {
  initMap();
};

function addMarkerInfo() {
  for (var i = 0; i < markersOnMap.length; i++) {
    var contentString = "<h5>" + markersOnMap[i].placeName + "</h5>";
    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      icon: icons[markersOnMap[i].type].icon,
      map: map,
    });
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });
    marker.addListener("click", () => {
      closeOtherInfo();
      infowindow.open(marker.get("map"), marker);
      InfoObj[0] = infowindow;
    });
  }
}

function closeOtherInfo() {
  if (InfoObj.length > 0) {
    InfoObj[0].set("marker", null);
    InfoObj[0].close();
    InfoObj[0].length = 0;
  }
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerCords,
    zoom: 15,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.business",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
  });
  addMarkerInfo();
}

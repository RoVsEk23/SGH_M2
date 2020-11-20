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
    placeName: "Science Museum",
    LatLng: [{ lat: 51.497856, lng: -0.174534 }],
    type: "museum",
  },
  {
    placeName: "South Kensington Station",
    LatLng: [{ lat: 51.494154, lng: -0.173965 }],
    type: "subway",
  },
  {
    placeName: "Sloane Square Station",
    LatLng: [{ lat: 51.492431, lng: -0.156389 }],
    type: "subway",
  },
  {
    placeName: "Glamis Bar South Kensington",
    LatLng: [{ lat: 51.495904, lng: -0.181341 }],
    type: "pub",
  },
  {
    placeName: "Natural History Museum Ice Rink, South Kensington",
    LatLng: [{ lat: 51.496175, lng: -0.174463 }],
    type: "museum",
  },
  {
    placeName: "Sainsbury's, Cromwell Rd, Kensington",
    LatLng: [{ lat: 51.495541, lng: -0.188207 }],
    type: "grocery",
  },
  {
    placeName: "Gloucester Road Station, South Kensington",
    LatLng: [{ lat: 51.49439, lng: -0.182728 }],
    type: "subway",
  },
  {
    placeName: "Restaurant Ours, Brompton Rd, South Kensington",
    LatLng: [{ lat: 51.494052, lng: -0.169114 }],
    type: "restaurant",
  },
  {
    placeName: "Big Fernand Thurloe Pl, South Kensington",
    LatLng: [{ lat: 51.495209, lng: -0.173755 }],
    type: "restaurant",
  },
  {
    placeName: "Brompton Food Market Thurloe Pl, South Kensington",
    LatLng: [{ lat: 51.494786, lng: -0.174175 }],
    type: "restaurant",
  },
  {
    placeName: "Waitrose Gloucester Rd, South Kensington",
    LatLng: [{ lat: 51.494824, lng: -0.183123 }],
    type: "grocery",
  },
  {
    placeName: "Tesco Express Gloucester Rd, South Kensington",
    LatLng: [{ lat: 51.494383, lng: -0.182258 }],
    type: "grocery",
  },
  {
    placeName: "Humphrey's Bar Harrington Gardens, South Kensington",
    LatLng: [{ lat: 51.493501, lng: -0.18323 }],
    type: "pub",
  },
  {
    placeName: "The Hereford Arms, South Kensington",
    LatLng: [{ lat: 51.49294, lng: -0.181299 }],
    type: "pub",
  },
  {
    placeName: "Duke of Clarence Old Brompton Rd, South Kensington",
    LatLng: [{ lat: 51.491016, lng: -0.182543 }],
    type: "pub",
  },
  {
    placeName: "Eli’s Restaurant - South Kensington",
    LatLng: [{ lat: 51.493563, lng: -0.176037 }],
    type: "restaurant",
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

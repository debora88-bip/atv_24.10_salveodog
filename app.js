// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.51679978489825, -46.83546507677398], 13);

var greenIcon = L.icon({
    iconUrl: 'https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-puppy-labrador-retriever-cute-dog-animal-png-image_9993729.png',
 
    iconSize:     [80, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
  
  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  // Create a marker with popup and add it to the map
  var marker = L.marker([-23.51679978489825, -46.83546507677398]).addTo(map);
  marker.bindPopup("Estamos na Fatec").openPopup();

    // Create a marker with popup and add it to the map
 var marker2 = L.marker([-23.52026413037824, -46.83670586136634], {icon: greenIcon}).addTo(map);
  marker2.bindPopup("Auau Socorro, estoy perdido!").openPopup();

});

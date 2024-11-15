var map = L.map('map', {
  center: [44.47802170412041, -73.19722678261232],
  zoom: 17,
});

var Satellite = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

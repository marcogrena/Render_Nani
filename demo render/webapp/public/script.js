// Crea la mappa e impostala al centro di una posizione specifica
const map = L.map("map").setView([45.6895, 9.6798], 13); // Latitudine, longitudine e livello di zoom iniziale

// Aggiungi una basemap da OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


map.on('click', function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    alert(`Hai cliccato sulla mappa: latitudine: ${lat}, longitudine: ${lng}`);
});  
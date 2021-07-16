// // EJEMPLO DE GEOLOCALIZACION

// // Geolocalizacion puntual
// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(
//         `Latitud: ${position.coords.latitude}\nLongitud: ${position.coords.longitude}`
//       );
//       let datos = `<h1>Aquí estás!</h1>
//           <p>Lat: ${position.coords.latitude.toFixed(4)}</p>
//           <p>Long: ${position.coords.longitude.toFixed(4)}</p>`;
//       document.body.innerHTML = datos;
//     });
//   } else {
//     console.warn("Tu navegador no soporta Geolocalización!! ");
//   }
  
// // Seguimiento de geolocalizacion de dispositivo

// navigator.geolocation.watchPosition(
//     (position) => {
//       console.log(`${position.coords.latitude}, ${position.coords.longitude}`);
//     },
//     (error) => {
//       console.warn(`Error! - ${error}`);
//     }
//   );

  // Leaflet
  let position = navigator.geolocation.getCurrentPosition(
    (position) => {

           let latitude = position.coords.latitude;
           let longitude = position.coords.longitude;
       

           const mapId = "map";
           const initialCoordinates = [latitude, longitude]; // Plaza Sol en Madrid [lat, lng]
           const map = L.map(mapId).setView(initialCoordinates, 13);
         
           const MAPBOX_API =
           "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";
           const ATTRIBUTION =
           'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
         // Este token será el que obtengamos en la web de Mapbox
         const ACCESS_TOKEN =
           "pk.eyJ1IjoibW1hcnRpbmRqIiwiYSI6ImNrcjYxYnBnMzAxbXkydnBnemJ0eDBtZ2wifQ.JvTICi-_V8Uo5vgqyCjvfg";
         
           L.tileLayer(MAPBOX_API, {
             attribution: ATTRIBUTION,
             maxZoom: 18,
             id: "mapbox/dark-v10", // {para satellite -> satellite-streets-v11}
             tileSize: 512,
             zoomOffset: -1,
             accessToken: ACCESS_TOKEN,
           }).addTo(map);

           // Añadimos el marcador a nuestra posición inicial
            L.marker(initialCoordinates).addTo(map);
            // Ejemplo añadiendo otras coordenadas:
            const myHouse = [40.4168898, -3.7020553];
            L.marker(myHouse).addTo(map);

            // Añadimos el marcador a nuestra posición inicial
        L.marker(initialCoordinates)
        .bindPopup("<b>Mi casa</b><br>Posición inicial del mapa")
        .addTo(map);
        // Ejemplo añadiendo otras coordenadas:
        const plazaMayorCoordinates = [40.415511, -3.7095896];
        L.marker(plazaMayorCoordinates)
        .bindPopup("<b>Plaza Mayor</b><br>Posición adicional")
        .addTo(map);


           
  });


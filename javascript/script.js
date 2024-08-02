// if ("geolocation" in navigator) {
//   console.log("geolocation available");
//   navigator.geolocation.getCurrentPosition((position) =>{
//   console.log(position.coords)
//   });
// } else {
//   console.log("geolocation not available");
// }

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}
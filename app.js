var weather = require("./weather");
var location = require("./location");
const { Console } = require("console");

weather(function(currentWeather) {
    console.log(currentWeather);
});

location(function(location) {

    if (!location) {
        console.log("Location Error");
        return;
    } else {
        console.log("City : " + location.city);
        console.log("Long/Lat: " + location.loc);
        console.log("country : " + location.country);
    }

});
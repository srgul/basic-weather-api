var request = require("request");
var url = "http://api.weatherapi.com/v1/current.json?key=1b282254f22842dfa9b210949202909&q=%C4%B0stanbul";

request({
    url: url,
    json: true,
}, function(error, response, body) {
    if (error) {
        console.log(" API error! ");
    } else {
        console.log(body.location.name + "'da hava sıcaklığı : " + body.current.temp_c + " C");
    }
})
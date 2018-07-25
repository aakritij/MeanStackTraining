var request = require("request");

module.exports = function(location,callback) {
    var encodedLocation = encodeURIComponent(location);
var url = 'http://api.openweathermap.org/data/2.5/weather?q='
     + encodedLocation + ',in&appid=4cf802d43b490b13b7b4b40805502db7&units=metric';

     if(!location)
     {
         return callback("No location provided");
     }
request({
    url: url,
    json: true
}, function(error,response,body){
    if(error){
        console.log("unable to fetch weather.");
    }
    else{
        console.log("Its "+ body.main.temp + " in " + body.name + " ! ");
    }
});
}
console.log("After request");

var weather = require("./weather.js");
var location = require("./location.js");

weather(function (cw){
    console.log(cw);
});

location(function (location){

    if(!location){
        console.log("unable to guess location");
        return;
    }

    console.log("log/lat: "+ location.loc);

})
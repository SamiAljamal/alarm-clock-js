var Temperature = require("./../js/temperature.js").temperatureModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var kelvin = response.main.temp;
      var newTemperature = new Temperature (kelvin);
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%, and the temperature is " + newTemperature.convertedTemperature() + " degrees.");
    }).fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});

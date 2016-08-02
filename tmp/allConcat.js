var Alarm = require("./../js/time.js").alarmModule;

$(document).ready(function() {
  $("#time").text(moment());
  $("#alarm-form").submit(function(event) {
    event.preventDefault();
    var inputAlarmTime = $("#alarm-time").val();
    var newAlarm = new Alarm (inputAlarmTime);
    newAlarm.getAlarm();
  });
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});

var Temperature = require("./../js/temperature.js");

var apiKey="0e3e8dcdb1c6921977c47f5900f0d7d2";

$(function() {
  $("#weather").click(function() {
    var city = $("#location").val();
    $("#location").val("");
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    .then(function(response) {
      $('.showWeather').text(`${city} currently has ${response.main.humidity}% humidity.`);
      console.log(JSON.stringify(response));

    });
  });
});



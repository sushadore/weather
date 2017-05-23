(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Temperature(temp) {
  this.temp = temp;
}

Temperature.prototype.Celsius = function() {
  return this + 273.15;
};

Temperature.prototype.Fahrenheit = function () {
  return this * 1.8 - 459.67;
};

exports.moduleTemperature = Temperature;

},{}],2:[function(require,module,exports){
var Temperature = require("./../js/temperature.js");

var apiKey="0e3e8dcdb1c6921977c47f5900f0d7d2";

$(function() {
  $("#weather").click(function() {
    var city = $("#location").val();
    $("#location").val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
         .then(function(response) {
             $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      console.log(JSON.stringify(response));

    });
  });
});



},{"./../js/temperature.js":1}]},{},[2]);

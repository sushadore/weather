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

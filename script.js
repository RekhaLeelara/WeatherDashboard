

// var el.textContent = "element";
var city = document.createElement("p");
var currentTemp = document.createElement("p");
var currentWind = document.createElement("p");
var currentHumidity = document.createElement("p");
var currentUVIndex = document.createElement("p");

// currentHumidity.addClass("class");
// currentTemp.addClass("currentTemp");
// currentWind.addClass("currentWind");
// currentHumidity.addClass("currentHumidity");
// currentUVIndex.addClass("currentUVIndex");

$(".search").click(function (event) {

//$(".currentWeatherResults").append(city).text("Atlanta")
$(".currentWeatherResults").append(currentTemp).append("REkha");
$(".currentWeatherResults").append(currentWind).text("currentWind")
$(".currentWeatherResults").append(currentHumidity).text("currentHumidity")
$(".currentWeatherResults").append(currentUVIndex).text("currentUVIndex")

});
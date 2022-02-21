

// var el.textContent = "element";
// var cityName = "Atlanta"
var cityName;
var currentCityJSONresp;
var jsonData;
var storingfutureWeatherData;
var icon1;
var searchCityName = [];

// currentHumidity.addClass("class");
// currentTemp.addClass("currentTemp");
// currentWind.addClass("currentWind");
// currentHumidity.addClass("currentHumidity");
// currentUVIndex.addClass("currentUVIndex");

function currentCitySearch() {
    cityName = $("#cityText").val();
    var api = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=ee4f9f3d7e1fc41296cc0f4ec013c662"
    $.ajax({
        url: api,
        dataType: "json",
        type: "GET"
    }).then(function (response) {
        console.log(response);
        storingWeatherData = JSON.stringify(response);
        jsonData = JSON.parse(storingWeatherData);
        displayCurrentForecast();
        searchFutureForecast();
    });
}
storeSearchedCity();


$(".search").click(function (event) {
    currentCitySearch();
    
});

function displayCurrentForecast() {
    console.log("search button clicked" + jsonData)
    $("#city").text(cityName);
    $("#currentTemp").text("Temp: " + jsonData.main.temp);
    $("#currentWind").text("Wind: " + jsonData.wind.speed);
    $("#currentHumidity").text("Humidity: " + jsonData.main.humidity);
    $("#divcurrentUVIndex").text("UV Index: ");

    localStorage.setItem("currentCity", cityName);
    localStorage.setItem("temp", jsonData.main.temp);
    localStorage.setItem("wind", jsonData.wind.speed);
    localStorage.setItem("humidity", jsonData.main.humidity);
    localStorage.setItem("uvIndex", "UVIndexToBeDisplayed");
}


function searchFutureForecast() {
    console.log("searchFutureForecast");
    var lat = "33.749";
    var lon = "-84.388";
    // var api2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=ee4f9f3d7e1fc41296cc0f4ec013c662";
    var api2 = "http://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid=ee4f9f3d7e1fc41296cc0f4ec013c662&units=imperial";
    // var iconUrl2 = "http://openweathermap.org/img/w/" + icon2 + ".png";

    $.ajax({
        url: api2,
        dataType: "json",
        type: "GET"
    }).then(function (response) {
        console.log(response);
        storingfutureWeatherData = JSON.parse(JSON.stringify(response));
        displayFutureForecast();
    });
   
}

function displayFutureForecast(){

    // var date1 = storingfutureWeatherData.list[1].dt_txt;
    // conDate1 = moment(storingfutureWeatherData.list[1].dt_txt).format("L");
    icon1 = "http://openweathermap.org/img/w/" +storingfutureWeatherData.list[1].weather[0].icon+".png"
    $(".futureForecast").append("<div class='futureForecast1 subFeatureFore'></div>")
    $(".futureForecast1").append("<span class='fw1Date fwDate '></span>").append(moment(storingfutureWeatherData.list[1].dt_txt).format("L"));
    $(".futureForecast1").append("<span class='fw1Icon fwIcon'></span>").html("<img src='" + icon1 + "'>");
    $(".futureForecast1").append("<span class='fw1Temp fwTemp'></span>").append("Temp: "+storingfutureWeatherData.list[1].main.temp);
    $(".futureForecast1").append("<span class='fw1Speed fwSpeed'></span>").append("Wind: "+storingfutureWeatherData.list[1].wind.speed);
    $(".futureForecast1").append("<span class='fw1Humidity fwHumidity'></span>").append("Humidity: "+storingfutureWeatherData.list[1].main.humidity);


    icon2 = "http://openweathermap.org/img/w/" +storingfutureWeatherData.list[8].weather[0].icon+".png"
    $(".futureForecast").append("<div class='futureForecast2 subFeatureFore'></div>")
    $(".futureForecast2").append("<span class='fw2Date fwDate'></span>").append(moment(storingfutureWeatherData.list[8].dt_txt).format("L"));
    $(".futureForecast2").append("<span class='fw2Icon fwIcon'></span>").html("<img src='" + icon2 + "'>");
    $(".futureForecast2").append("<span class='fw2Temp fwTemp'></span>").append("Temp: "+storingfutureWeatherData.list[8].main.temp);
    $(".futureForecast2").append("<span class='fw2Speed fwSpeed'></span>").append("Wind: "+storingfutureWeatherData.list[8].wind.speed);
    $(".futureForecast2").append("<span class='fw2Humidity fwHumidity'></span>").append("Humidity: "+storingfutureWeatherData.list[8].main.humidity);

    icon3 = "http://openweathermap.org/img/w/" +storingfutureWeatherData.list[15].weather[0].icon+".png"
    $(".futureForecast").append("<div class='futureForecast3 subFeatureFore'></div>")
    $(".futureForecast3").append("<span class='fw3Date fwDate'></span>").append(moment(storingfutureWeatherData.list[15].dt_txt).format("L"));
    $(".futureForecast3").append("<span class='fw3Icon fwIcon'></span>").html("<img src='" + icon3 + "'>");
    $(".futureForecast3").append("<span class='fw3Temp fwTemp'></span>").append("Temp: "+storingfutureWeatherData.list[15].main.temp);
    $(".futureForecast3").append("<span class='fw3Speed fwSpeed'></span>").append("Wind: "+storingfutureWeatherData.list[15].wind.speed);
    $(".futureForecast3").append("<span class='fw3Humidity fwHumidity'></span>").append("Humidity: "+storingfutureWeatherData.list[15].main.humidity);

    icon4 = "http://openweathermap.org/img/w/" +storingfutureWeatherData.list[23].weather[0].icon+".png"
    $(".futureForecast").append("<div class='futureForecast4 subFeatureFore'></div>")
    $(".futureForecast4").append("<span class='fw3Date fwDate'></span>").append(moment(storingfutureWeatherData.list[23].dt_txt).format("L"));
    $(".futureForecast4").append("<span class='fw3Icon fwIcon'></span>").html("<img src='" + icon4 + "'>");
    $(".futureForecast4").append("<span class='fw3Temp fwTemp'></span>").append("Temp: "+storingfutureWeatherData.list[23].main.temp);
    $(".futureForecast4").append("<span class='fw3Speed fwSpeed'></span>").append("Wind: "+storingfutureWeatherData.list[23].wind.speed);
    $(".futureForecast4").append("<span class='fw3Humidity fwHumidity'></span>").append("Humidity: "+storingfutureWeatherData.list[23].main.humidity);

    icon5 = "http://openweathermap.org/img/w/" +storingfutureWeatherData.list[31].weather[0].icon+".png"
    $(".futureForecast").append("<div class='futureForecast5 subFeatureFore'></div>")
    $(".futureForecast5").append("<span class='fw3Date fwDate'></span>").append(moment(storingfutureWeatherData.list[31].dt_txt).format("L"));
    $(".futureForecast5").append("<span class='fw3Icon fwIcon'></span>").html("<img src='" + icon5 + "'>");
    $(".futureForecast5").append("<span class='fw3Temp fwTemp'></span>").append("Temp: "+storingfutureWeatherData.list[31].main.temp);
    $(".futureForecast5").append("<span class='fw3Speed fwSpeed'></span>").append("Wind: "+storingfutureWeatherData.list[31].wind.speed);
    $(".futureForecast5").append("<span class='fw3Humidity fwHumidity'></span>").append("Humidity: "+storingfutureWeatherData.list[31].main.humidity);
    
}

function storeSearchedCity(){
    if (searchCityName.includes(cityName)){

    }
    else{
        searchCityName.push(cityName);
        $(".mainSearch").append("<button class='city1'></span>").append(cityName);
        localStorage.setItem("searchCityName", cityName);
    }

}

// chennai

fetchWeather()



function fetchWeather() {
    var api="http://api.openweathermap.org/data/2.5/forecast?q=";
    var city = document.getElementById("select").value;
    var apiKey = "&APPID=df5e7a5f31ecaa062ffca2ace3eea06c";
    var units = "&units=metric";
    var url = api+city+apiKey+units;
    var fetchConfig = 
        fetch(url, {
            method: "GET",
        })

        .then(onDataFetched)
        .catch(onDataFetchFailed)

}

function onDataFetched(response) {
    response.json()
        .then(onConversionToJsonSuccessful)
        .catch(onConversionToJsonFailed);
    console.log(2);
}

function onDataFetchFailed(error) {
    console.log("I have failed in life.", error);
}

function onConversionToJsonSuccessful(json) {
    console.log("Success!");
    data = json;
    
    var button = document.getElementById("select");
    button.addEventListener("submit",fetchWeather)
    console.log(data);
    
//document.getElementById("myInput").addEventListener("submit", fetchWeather);
   

}

function onConversionToJsonFailed() {
    console.log("Not a json mate!");
}

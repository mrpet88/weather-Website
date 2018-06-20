var button = document.getElementById("select");
button.addEventListener("click",fetchWeather);
//var input = document.getElementById(units);
//input.ontoggle(fetchWeather())
//fetchWeather()

function fetchWeather() {
        var city = document.getElementById("city").value; 
    
        var fetchConfig =
        fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=df5e7a5f31ecaa062ffca2ace3eea06c&units=metric", {
            method: "GET",
        })
        .then(onDataFetched)
        .catch(onDataFetchFailed)

}

function onDataFetched(response) {
    response.json()
        .then(onConversionToJsonSuccessful)
        .catch(onConversionToJsonFailed);
}

function onDataFetchFailed(error) {
    console.log("I have failed in life.", error);
}

function onConversionToJsonSuccessful(data) {
    console.log(data);
    document.getElementById("temperature").innerHTML=""; 
    for (var i = 0; i < data.list.length; i++) {
        addInfoToPage(data.list[i]);
        if (i == 5) {
            break;
        }
    }
    }

function onConversionToJsonFailed() {
    console.log("Not a json mate!");
}

function addInfoToPage(singleThreeHoursRecord){
    document.getElementById("temperature").append(singleThreeHoursRecord.dt_txt+" "+singleThreeHoursRecord.wind.speed+"-");
}

//function changeUnits(){
//    document.getElementById(units).
//}





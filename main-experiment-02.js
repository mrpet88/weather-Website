//var button = document.getElementById("select");
//button.addEventListener("click",fetchWeather);
fetchWeather()

function fetchWeather() {
        var city = document.getElementById("city").value; 
    
        var fetchConfig =
        fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=df5e7a5f31ecaa062ffca2ace3eea06c", {
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

function onConversionToJsonSuccessful(json) {
    console.log("Success!");
    data = json;
   console.log(data);
//    document.getElementById("weatherData").innerHTML="";       for (var i=0; i<data.list.length; i++){
//            bring(data.list[i]);
//        }
//    bring(xlist)
//
}

function onConversionToJsonFailed() {
    console.log("Not a json mate!");
}

//function bring(xlist){
//    document.getElementById("weatherData").append(" "+xlist.wind.speed);
//}



//var slideIndex = 1;
//showDivs(slideIndex);
//
//function plusDivs(n) {
//    showDivs(slideIndex += n);
//}
//function showDivs(n) {
//    var i;
//    var x = document.getElementsByClassName("mySlides");
//    if (n > x.length) {slideIndex = 1} 
//    if (n < 1) {slideIndex = x.length} ;
//    for (i = 0; i < x.length; i++) {
//        x[i].style.display = "none"; 
//    }
//    x[slideIndex-1].style.display = "block"; 
//}

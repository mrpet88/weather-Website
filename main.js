fetchWeather()



function fetchWeather() {
    var input="Athens"
    var fetchConfig =
        fetch("http://api.openweathermap.org/data/2.5/forecast?q="+input+"&APPID=df5e7a5f31ecaa062ffca2ace3eea06c", {
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
document.getElementById("myInput").addEventListener("submit", fetchWeather);
   

}

function onConversionToJsonFailed() {
    console.log("Not a json mate!");
}

//function searchResults() {
//
//    var input = document.getElementById("myInput");
//    
//    input.addEventListener("keyup", function (e) {
//        var filter = e.target.value.toLowerCase();
//        for (i = 0; i < books.length; i++) {
//            var bookInHTML = document.querySelector('[data-title="' + books[i].titulo + '"]');
//            if (bookInHTML.innerHTML.toLowerCase().indexOf(filter) > -1) {
//                bookInHTML.style.display = "";
//            } else {
//                bookInHTML.style.display = "none";
//            }
//        }
//    });
//}






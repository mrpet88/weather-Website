var button = document.getElementById("select");
button.addEventListener("click", fetchWeather);
var selectUnits = document.getElementById("unitSelection");
selectUnits.addEventListener("change", fetchWeather);
//var input = document.getElementById(units);
//input.ontoggle(fetchWeather())
//fetchWeather()
starterImages()



function fetchWeather() {
    var city = document.getElementById("city").value;
    var units = document.getElementById("unitSelection").value;
    var fetchConfig =
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=df5e7a5f31ecaa062ffca2ace3eea06c&units=" + units + "", {
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
        starterImages()

    console.log("I have failed in life.", error);
}

function onConversionToJsonSuccessful(data) {

    changeTheText = [];
    console.log(data);
    addTheCurrentState(data);
    

    city =document.getElementById("allDay").innerHTML = "";

    for (var i = 0; i < data.list.length; i++) {
        addInfoToPage(data.list[i]);

        //        if (i == 7) {
        //            break;
        //        }
    }
}

function onConversionToJsonFailed() {
        starterImages()

    console.log("Not a json mate!");
}

function addInfoToPage(singleThreeHoursRecord) {

    var icon = document.createElement('div');
    var image = document.createElement('img');
    icon.classList.add("icon");
    image.src = ("http://openweathermap.org/img/w/" + singleThreeHoursRecord.weather["0"].icon + ".png");
    icon.appendChild(image);

    var theDay = singleThreeHoursRecord.dt_txt.substr(8, 2);
    var theMonth = singleThreeHoursRecord.dt_txt.substr(5, 2);
    var theYear = singleThreeHoursRecord.dt_txt.substr(0, 4);

    var textOfDay = document.createElement('div');
    textOfDay.classList.add("textOfDay");

    changeTheText.push(theDay);
    if (changeTheText[changeTheText.length - 2] != theDay) {
        textOfDay.innerHTML = theDay + "-" + theMonth + "-" + theYear;
    } else {
        textOfDay.innerHTML = "";
    }

    var currentDay = document.createElement('div');
    currentDay.classList.add("currentDay");

    var temperature = document.createElement('div');
    temperature.classList.add("temperature");
    temperature.innerHTML = singleThreeHoursRecord.main.temp.toFixed(0) + "&#9675;".sup();

    var timeStamp = document.createElement('div');
    timeStamp.classList.add("timeStamp");
    timeStamp.innerHTML = singleThreeHoursRecord.dt_txt.substr(11, 5);

    if (document.getElementById("unitSelection").value == "metric"){
    var wind = document.createElement('div');
    wind.classList.add("wind");
    wind.innerHTML = singleThreeHoursRecord.wind.speed +" "+"m/s";}
    
    else if (document.getElementById("unitSelection").value == "imperial"){
    var wind = document.createElement('div');
    wind.classList.add("wind");
    wind.innerHTML = singleThreeHoursRecord.wind.speed +" "+"mph";}
 

    //    var mainState = document.createElement("div");
    //    mainState.classList.add(mainState);
    //    mainState.innerHTML = singleThreeHoursRecord.main.temp;



    currentDay.appendChild(textOfDay);
    //currentDay.appendChild(day);
    currentDay.appendChild(temperature);
    currentDay.appendChild(timeStamp);
    currentDay.appendChild(wind);
    currentDay.appendChild(icon);

    document.getElementById("allDay").appendChild(currentDay);
}

//document.getElementById("temperature").append(singleThreeHoursRecord.main.temp);
//document.getElementById("date").append(singleThreeHoursRecord.dt_txt);
//document.getElementById("wind").append(singleThreeHoursRecord.wind.speed);

//var textOfDay = document.createElement('div');
//textOfDay.classList.add("textOfDay");
//currentDay.appendChild(textOfDay);

function addTheCurrentState(currentState) {
    document.getElementById("message").innerHTML = "";

    document.getElementById("mainState").innerHTML = '';

    if (currentState.message == "city not found") {
        document.getElementById("message").innerHTML = "City Not Found";
    }

    var currentStateOfTemp = document.createElement('div');
    currentStateOfTemp.classList.add("currentStateOfTemp");
    var pFirst = document.createElement("p");
    pFirst.classList.add("currentTemp");
    pFirst.innerHTML = currentState.list[0].main.temp.toFixed(0) + "&#9675;".sup();
    var icon = document.createElement('div');
    var image = document.createElement('img');
    icon.classList.add("icon");
    image.src = ("http://openweathermap.org/img/w/" + currentState.list[0].weather["0"].icon + ".png");
    icon.appendChild(image);


    var pSecond = document.createElement("p");
    pSecond.classList.add("currentCity");
    pSecond.innerHTML = currentState.city.name + "-" + currentState.city.country;

    var pThird = document.createElement("p");
    pThird.classList.add("currentDescription");
    pThird.innerHTML = currentState.list[0].weather["0"].description;

    var flex = document.createElement("div");
    flex.classList.add("flex");
    flex.appendChild(icon);
    flex.appendChild(pFirst);
    flex.appendChild(pThird);


    if (currentState.list[0].weather["0"].description == "clear sky") {
        document.body.style.background = "url('clearSky.jpg') no-repeat";
        document.body.style.backgroundSize = "100% 100%;";

    }
    if (currentState.list[0].weather["0"].description == "few clouds") {
        document.body.style.background = "url('fewClouds.jpg') no-repeat";
        document.body.style.backgroundSize = "100% 100%;";

    }
    if (currentState.list[0].weather["0"].description == "scattered clouds") {
        document.body.style.background = "url('scatterredClouds.jpg') no-repeat";
        document.body.style.backgroundSize = "100% 100%;";

    }
    if (currentState.list[0].weather["0"].description == "broken clouds") {
        document.body.style.background = "url('brokenClouds.jpg') no-repeat";
        document.body.style.backgroundSize = "100% 100%;";
    }
    if (currentState.list[0].weather["0"].description == "light rain") {
        document.body.style.background = "url('lightRain.jpg') no-repeat";
        document.body.style.backgroundSize = "100% 100%;";

    }
    if (currentState.list[0].weather["0"].description == "rain") {
        document.body.style.background = "url('rain.jpg') no-repeat";
        document.body.style.backgroundSize = "100% 100%;";

    }
    if (currentState.list[0].weather["0"].description == "thunderstorm") {
        document.body.style.background = "url('thunderstorm.jpg') no-repeat ";
        document.body.style.backgroundSize = "100% 100%;";

    }
    if (currentState.list[0].weather["0"].description == "snow") {
        document.body.style.background = "url('snow.png') no-repeat";
        document.body.style.backgroundSize = "100% 100%;";

    }
    if (currentState.list[0].weather["0"].description == "mist") {
        document.body.style.background = "url('mist.jpg') no-repeat";
        document.body.style.backgroundSize = "100% 100%;";

    }





    document.getElementById("mainState").className += " currentStateContainer";
    document.getElementById("mainState").append(pSecond);
    document.getElementById("mainState").append(flex);

    //    document.getElementById("mainState").append(icon);
    //    document.getElementById("mainState").append(pFirst);
    //    document.getElementById("mainState").append(pThird);
}
//function displayMessage(showMessage) {
//    var placeTheMessage = document.getElementById("message");
//    if (showMessage) {
//        placeTheMessage.innerHTML = ' "Please select a Party" ';
//    } else {
//        placeTheMessage.innerHTML = " ";
//    }
//    return 0;
//}
 
function starterImages(){

    var boxSun = document.createElement('div');
    boxSun.classList.add("boxSun");
    
    var boxWind = document.createElement('div');
    boxWind.classList.add("boxWind");
    
    var boxRain = document.createElement('div');
    boxRain.classList.add("boxRain");
    
    var boxSnow = document.createElement('div');
    boxSnow.classList.add("boxSnow");
    
    var allDayId = document.getElementById("allDay");
    allDayId.innerHTML="";

    allDayId.appendChild(boxSun);
    allDayId.appendChild(boxWind);
    allDayId.appendChild(boxRain);
    allDayId.appendChild(boxSnow);
    
}

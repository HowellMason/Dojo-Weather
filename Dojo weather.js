var currentCity =
    document.querySelector("#city");

var cookieRemove =
    document.querySelector("#cookie-footer");

function cityWeather(element) {
    alert("Loading weather for " + element.innerText + "...")
    currentCity.innerText = element.innerText
}

function accept() {
    cookieRemove.remove();
}

function celciusToFahrenheit(temperature) {
    return Math.round(9/5 * temperature + 32)
}

function fahrenheitToCelcius(temperature) {
    return Math.round(5/9 * (temperature - 32))
}

function convert(element) {
    for(var i=1; i<=8; i++){
        var tempChange = document.querySelector("#temp" + i);
        var newTemp = parseInt(tempChange.innerText); 
        console.log(newTemp)
        if(element.value == "celcius") {
            tempChange.innerText = fahrenheitToCelcius(newTemp) + "°";
        }
        else{
            tempChange.innerText = `${celciusToFahrenheit(newTemp)} °`;
        }
    }
}


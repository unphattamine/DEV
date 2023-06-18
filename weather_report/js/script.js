const getCity = () => {
    let city = document.getElementById("city").value;
    console.log(city);
    return city;
}

const validateCity = () => {
    city = getCity();
    if (!city.match(/^[A-Za-z]+$/)){
        alert("City is invalid!");
        return 0;
    }
}

function weatherCall(city){
    let url = "https://www.meteosource.com/api/v1/free/point?place_id=" + city + "&sections=all&timezone=UTC&language=en&units=metric&key=fnaddym2jcdwwc7xw08lafth1t2b4sd1vpj6hwu0";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(weather) {
        console.log(weather);
        try {
            if (weather.detail.includes("exist") === true){
                document.getElementById("weather").innerHTML =  weather.detail;
                return;
                }
            }
        catch {
            document.getElementById("weather").innerHTML =  "<img class=\"icon\" src=\"img/" + weather.current.icon_num + ".png\"></img>"  + " " +  weather.current.summary + " " +  weather.current.temperature + "&#8451" + ", Wind speed " + weather.current.wind.speed + ", Direction:" + weather.current.wind.dir + ", Angle: " + weather.current.wind.angle;
            }   
    }) 
}

function clear(){
    city.reset;
    document.getElementById("weather").innerHTML = "";
}

function main(){
    if (validateCity() == 0){
        return;
    }
    weatherCall(city);
}
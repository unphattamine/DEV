function getCity(){
    let city = document.getElementById("city").value;
    console.log(city);
    return city;
}

function validateCity(){
    city = getCity();
    if (!city.match(/^[A-Za-z]+$/)){
        alert("Invalid city");
        return;
    }
}
async function weatherCall(city){
    let url = "https://www.meteosource.com/api/v1/free/point?place_id=" + city + "&sections=all&timezone=UTC&language=en&units=metric&key=fnaddym2jcdwwc7xw08lafth1t2b4sd1vpj6hwu0";
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
        console.log(url);
        return response;
}

function printWeather(){
    document.getElementById("weather").innerHTML = "test";
}

function main(){
    validateCity();
    weatherCall(city);
    printWeather();

}
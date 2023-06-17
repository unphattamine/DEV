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

async function weatherCall(city){
    let url = "https://www.meteosource.com/api/v1/free/point?place_id=" + city + "&sections=all&timezone=UTC&language=en&units=metric&key=fnaddym2jcdwwc7xw08lafth1t2b4sd1vpj6hwu0";
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
        console.log(jsonData.current.summary, jsonData.current.temperature)
        return weather;
}


function printWeather(current){
    document.getElementById("weather").innerHTML = current;
}

function main(){
    if (validateCity() == 0){
        return;
    }
    const current = weatherCall(city);
    printWeather(current);

}
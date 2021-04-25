const API_KEY = "55e3870ccf80f2b45434d2180aab6c4c";
const d = document;

const city = d.querySelector('#city');
const country = d.querySelector('#country');
const temp = d.querySelector('#temp');
const temp_min = d.querySelector('#temp_min');
const temp_max = d.querySelector('#temp_max');
const humidity = d.querySelector('#humidity');
const pressure = d.querySelector('#pressure');
const wind = d.querySelector('#wind');

const printData = (data) =>{
    city.textContent = data.name;
    country.textContent = data.sys.country;
    temp.innerHTML = "Temperature: <span class='result'>" + data.main.temp + "ºC </span>";
    temp_min.innerHTML = "Minimun Temperature: <span class='result'>" + data.main.temp_min + "ºC </span>";
    temp_max.innerHTML = "Maximun Temperature: <span class='result'>" + data.main.temp_max + "ºC </span>";
    humidity.innerHTML = "Humidity: <span class='result'>" + data.main.humidity + "% </span>";
    pressure.innerHTML = "Pressure: <span class='result'>" + data.main.pressure + " hPa </span>";
    wind.innerHTML = "Wind: <span class='result'>" + data.wind.speed + " mi/h</span>";
}

const fetchData = (position)=>{
    const {latitude, longitude} = position.coords;
    console.log(`latitude: ${latitude} - longitude: ${longitude}`);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        printData(data);
    })
}

//function main
const onLoad = () =>{
    navigator.geolocation.getCurrentPosition(fetchData);
}

const interval = setInterval(()=>{
    onLoad();
    clearInterval(interval);
}, 10_000);

//LeoMarqz

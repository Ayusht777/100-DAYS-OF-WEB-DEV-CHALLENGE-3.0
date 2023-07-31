const apikey = "f458fe9b85a5aad938afb32733419a3d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404 || city == "") {
  
    document.querySelector(".error").style.display = "block";

    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    var temp = data.main.temp - 273;
    temp = Math.round(temp);

    document.querySelector(".temp").innerHTML = temp + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  localStorage.setItem("city", `${searchBox.value}`);
  checkWeather(searchBox.value);
});

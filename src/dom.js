// set weather time :
const setWeatherTime = (localTime) => {
  const weatherTime = document.getElementById("weather-info-time");
  const weatherDate = document.getElementById("weather-info-date");
  const date = new Date(localTime);
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleString("en-us", { month: "short" });
  const time = date.toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
  });
  weatherTime.textContent = time;
  weatherDate.textContent = `${dayOfWeek}, ${day} ${month}.`;
};
// set weather place and condition :
const setWeatherPlaceAndCondition = (condition, icon, country, city) => {
  const weatherCondition = document.getElementById("weather-condition");
  const weatherConditionIcon = document.getElementById(
    "weather-condition-icon"
  );
  const weatherPlaceCityAndCountry = document.getElementById(
    "weather-place-city-and-country"
  );
  weatherCondition.textContent = condition;
  weatherConditionIcon.style.display = "flex";
  weatherConditionIcon.src = `https:${icon}`;
  weatherPlaceCityAndCountry.textContent = `${country}, ${city}.`;
};
// set weather details :
const setWeatherDetails = (temperature, humidity, windSpeed) => {
  const weatherTemperature = document.getElementById("weather-temperature");
  const weatherHumidity = document.getElementById("weather-humidity");
  const weatherWind = document.getElementById("weather-wind");
  weatherTemperature.textContent = `${temperature} °C`;
  weatherHumidity.textContent = `${humidity} %`;
  weatherWind.textContent = `${windSpeed} km/h`;
};
// show search error :
const showSearchError = () => {
  const searchError = document.getElementById("search-error");
  searchError.style.display = "inline";
  searchError.style.textAlign = "center";
};
// hide search error :
const hideSearchError = () => {
  const searchError = document.getElementById("search-error");
  searchError.style.display = "none";
};
// set forecast description :
const setForecastDescription = (desiredForecastData) => {
  const allForecastDescriptions = document.querySelectorAll(
    ".forecast-description"
  );
  [...allForecastDescriptions].map((ele, index) => {
    ele.textContent = desiredForecastData[index].description;
  });
  return desiredForecastData;
};
// set forecast day :
const setForecastDay = (desiredForecastData) => {
  const allForecastDates = document.querySelectorAll(".forecast-date");
  [...allForecastDates].map((ele, index) => {
    const date = new Date(desiredForecastData[index].date);
    const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
    ele.textContent = dayOfWeek;
  });
  return desiredForecastData;
};
// set forecast icon :
const setForecastIcon = (desiredForecastData) => {
  const allForecastIcons = document.querySelectorAll(".forecast-weatherIcon");
  [...allForecastIcons].map((ele, index) => {
    const iconSrc = `https://openweathermap.org/img/wn/${desiredForecastData[index].weatherIcon}@2x.png`;
    ele.src = iconSrc;
  });
  return desiredForecastData;
};

export {
  setWeatherPlaceAndCondition,
  setWeatherTime,
  setWeatherDetails,
  showSearchError,
  hideSearchError,
  setForecastDescription,
  setForecastDay,
  setForecastIcon,
};

import "./style.css";
import {
  setWeatherTime,
  setWeatherPlaceAndCondition,
  setWeatherDetails,
  showSearchError,
  hideSearchError,
  setForecastDescription,
  setForecastDay,
  setForecastIcon,
  setForecastTempMaxAndMin,
} from "./dom.js";
// dom :
const input = document.getElementById("input");
const submit = document.getElementById("submit");
// window.onload = () => {
//   getWeatherData();
// };
// fetch weather data :
const getWeatherData = async () => {
  try {
    const cityName = input.value;
    const weatherDataResponse = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=5d38eab46801406988d170949242901&q=${cityName}`
    );
    // handle weather data error :
    if (!weatherDataResponse.ok) {
      showSearchError();
    } else hideSearchError();
    const weatherJsonData = await weatherDataResponse.json();
    return weatherJsonData;
  } catch (err) {
    console.error("Error Fetching Weather Data:", err);
  }
};
// fetch weather forcast :
const getWeatherForecast = async () => {
  try {
    const cityName = input.value;
    const forecastDataResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0a9c77ff65c2dc4d28a91e04fa19c9dd`
    );
    // handle weather forecast error :
    if (!forecastDataResponse.ok) {
      showSearchError();
    } else hideSearchError();
    // get weather forecast json data :
    const forecastJsonData = await forecastDataResponse.json();
    return forecastJsonData;
  } catch (err) {
    console.error("Error Fetching Forcast Data:", err);
  }
};
// handle get weather data promise chain :
const getWeatherDataPromiseChain = () => {
  getWeatherData()
    .then(getDesiredWeatherData)
    .then((desiredData) => {
      // set weather time :
      setWeatherTime(desiredData.localtime);
      // set weather place and condition
      setWeatherPlaceAndCondition(
        desiredData.condition,
        desiredData.weatherIcon,
        desiredData.country,
        desiredData.cityName
      );
      // set weather details :
      setWeatherDetails(
        desiredData.temp_c,
        desiredData.humidity,
        desiredData.wind_kph
      );
    });
};
// submit event :
submit.onclick = () => {
  getWeatherDataPromiseChain();
  getWeatherForecastPromiseChain();
};
// handle get weather forecast promise chain :
const getWeatherForecastPromiseChain = () => {
  getWeatherForecast()
    .then(getForecastDays)
    .then(getDesiredForecastData)
    .then(setForecastDescription)
    .then(setForecastDay)
    .then(setForecastIcon)
    .then(setForecastTempMaxAndMin);
};
// get 5 forecast days :
const getForecastDays = (forecastJsonData) => {
  const weatherForecastDaysArray = [];
  // get 5 forecast days from list at mid day 12:00:00 :
  const pattern = /\d{4}-\d{2}-\d{2}\s12:00:00/gi;
  const { list: listArray } = forecastJsonData;
  for (const list of listArray) {
    const targetDate = list.dt_txt;
    if (pattern.test(targetDate)) {
      weatherForecastDaysArray.push(list);
    }
  }
  return weatherForecastDaysArray;
};
// get desired forecast data :
const getDesiredForecastData = (forecastDays) => {
  const desiredForecastArray = [];
  for (const day of forecastDays) {
    const {
      dt_txt: date,
      main: { temp_max, temp_min },
      weather: [{ description, icon: weatherIcon }],
    } = day;
    desiredForecastArray.push({
      description,
      date,
      weatherIcon,
      temp_max,
      temp_min,
    });
  }
  return desiredForecastArray;
};
// get desired weather forecast data :
const getDesiredWeatherData = (weatherJsonData) => {
  // destructuring desired data from jsonData :
  const {
    location: { localtime, country, name: cityName },
    current: {
      condition: { text: condition, icon: weatherIcon },
      temp_c,
      humidity,
      wind_kph,
    },
  } = weatherJsonData;
  // create desiredData object using destructured data :
  const desiredWeatherdData = {
    localtime,
    country,
    cityName,
    condition,
    temp_c,
    humidity,
    wind_kph,
    weatherIcon,
  };
  return desiredWeatherdData;
};

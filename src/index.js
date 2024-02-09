import "./style.css";
import {
  setWeatherTime,
  setWeatherPlaceAndCondition,
  setWeatherDetails,
  showSearchError,
  hideSearchError,
  setForecastDescription,
  setForecastDate,
} from "./dom.js";
// dom :
const input = document.getElementById("input");
const submit = document.getElementById("submit");
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
    .then((weatherJsonData) => getDesiredWeatherData(weatherJsonData))
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
    .then(getWeatherForecastDays)
    .then(getDesiredWeatherForecastData)
    .then(setForecastDescription)
    .then(setForecastDate);
};

// getDesiredWeatherForecast
const getWeatherForecastDays = (weatherForecastJsonData) => {
  const weatherForecastDaysArray = [];
  const pattern = /\d{4}-\d{2}-\d{2}\s12:00:00/gi;
  const { list: listArray } = weatherForecastJsonData;

  for (const list of listArray) {
    const targetDate = list.dt_txt;
    if (pattern.test(targetDate)) {
      weatherForecastDaysArray.push(list);
    }
  }
  return weatherForecastDaysArray;
};

const getDesiredWeatherForecastData = (forecastDays) => {
  const desiredWeatherForecastArray = [];
  // console.log(forecastDays);
  for (const day of forecastDays) {
    // console.log(day);
    const {
      dt_txt: date,
      main: { temp_max, temp_min },
      weather: [{ description, icon: weatherIcon }],
    } = day;
    desiredWeatherForecastArray.push({
      description,
      date,
      weatherIcon,
      temp_max,
      temp_min,
    });
  }
  return desiredWeatherForecastArray;
};

const getDesiredWeatherData = (weatherJsonData) => {
  // destructuring desired data from jsonData :
  const {
    location: { localtime, country, name: cityName },
    current: {
      condition: { text: condition, icon: weatherIcon },
      temp_c,
      // temp_f ,
      humidity,
      // wind_mph,
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

// https://openweathermap.org/img/wn/10d@2x.png ===> api icon

// const processJsonData = async (data) => {
//   const jsonData = await data.json();
//   // FUTURE WEATHER SOLVED :
//   // let arr = [];
//   // for (const list of jsonData.list) {
//   //   arr.push(list.dt_txt);
//   // }
//   // arr.map((date) => {
//   //   const pattern = /\d{4}-\d{2}-\d{2}\s00:00:00/gi;
//   //   console.log(pattern.test(date));
//   //   console.log(date.match(pattern));
//   // });

//   // console.log(arr);
//   console.log(jsonData);
//   return jsonData;
// };

// `https://api.weatherapi.com/v1/current.json?key=5d38eab46801406988d170949242901&q=${cityName}`
// jsonData.cod === 400

// const pattern2 = /\d{4}-\d{2}-\d{2}\s00:00:00/gi;
// const str2 = "2024-02-04 00:00:00";
// console.log(pattern2.test(str2));
// console.log(str2.match(pattern2));

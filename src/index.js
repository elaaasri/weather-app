import "./style.css";
import {
  setWeatherTime,
  setWeatherPlaceAndCondition,
  setWeatherDetails,
  showSearchError,
  hideSearchError,
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

    return weatherDataResponse;
  } catch (err) {
    console.error("Error Fetching Weather Data:", err);
  }
};
// fetch weather forcast data :
// const getWeatherForcast = async () => {
//   try {
//     const cityName = input.value;
//     const weatherForcastResponse = await fetch(
//       `http://api.openweathermap.org/data/2.5/forecast?q=khouribga&appid=0a9c77ff65c2dc4d28a91e04fa19c9dd`
//     );
//     return weatherForcastResponse;
//   } catch (err) {
//     console.error("Error Fetching Forcast Data:", err);
//   }
// };

//
const processJsonData = async (response) => {
  const jsonData = await response.json();
  // destructuring desirddata from jsonData :
  const {
    location: { localtime, country, name: cityName },
    current: {
      condition: { text: condition, icon },
      temp_c,
      // temp_f,
      humidity,
      // wind_mph,
      wind_kph,
    },
  } = jsonData;

  console.log(jsonData);
  // create desiredData object using destructured data :
  const desiredData = {
    localtime,
    country,
    cityName,
    condition,
    temp_c,
    humidity,
    wind_kph,
    icon,
  };
  return desiredData;
};
// submit event :
submit.onclick = () => {
  getWeatherData()
    .then((dataResponse) => processJsonData(dataResponse))
    .then((desiredData) => {
      // destructuring desired data after processing it :
      const {
        localtime,
        country,
        cityName,
        condition,
        temp_c,
        humidity,
        wind_kph,
        icon,
      } = desiredData;
      // set weather time :
      setWeatherTime(localtime);
      // set weather place and condition
      setWeatherPlaceAndCondition(condition, icon, country, cityName);
      // set weather details :
      setWeatherDetails(temp_c, humidity, wind_kph);
    })
    .catch((err) => console.log("REJECTED!", err));
};
// working on using promise.all to fetch both responses.

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

import "./style.css";

const input = document.getElementById("input");
const submit = document.getElementById("submit");

const getData = async () => {
  try {
    const cityName = input.value;
    // const response = await fetch(
    //   `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0a9c77ff65c2dc4d28a91e04fa19c9dd`
    // );
    // const response = await fetch(
    //   `http://api.openweathermap.org/data/2.5/forecast?q=rabat&appid=0a9c77ff65c2dc4d28a91e04fa19c9dd`
    // );
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=5d38eab46801406988d170949242901&q=rabat`
    );
    return response;
  } catch (err) {
    console.error("Error Fetching Data:", err);
  }
};
const processJsonData = async (response) => {
  const jsonData = await response.json();
  // destructuring data :
  const {
    location: { localtime, country, name: cityName },
    current: {
      condition: { text: condition },
    },
    current: { temp_c, temp_f, humidity, wind_mph, wind_kph },
  } = jsonData;
  console.log(jsonData);
  console.log(jsonData.current);
  // returns desired data :
  const desiredData = {
    localtime,
    country,
    cityName,
    condition,
    temp_c,
    humidity,
    wind_mph,
  };
  return desiredData;
};

const setWeatherPlaceAndCondition = (condition, country, city) => {
  const weatherCondition = document.getElementById("weather-condition");
  const weatherCountry = document.getElementById("weather-place-country");
  const weatherCity = document.getElementById("weather-place-city");
  weatherCondition.textContent = condition;
  weatherCountry.textContent = country;
  weatherCity.textContent = city;
};

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
const setWeatherDetails = (temperature, humidity, windSpeed) => {
  const weatherTemperature = document.getElementById("weather-temperature");
  const weatherHumidity = document.getElementById("weather-humidity");
  const weatherWind = document.getElementById("weather-wind");
  console.log(weatherTemperature);
  console.log(weatherHumidity);
  console.log(weatherWind);
  weatherTemperature.textContent = temperature;
  weatherHumidity.textContent = humidity;
  weatherWind.textContent = windSpeed;
};

submit.onclick = () => {
  getData()
    .then((response) => processJsonData(response))
    .then((desiredData) => {
      // destructuring desired data after processing it :
      const {
        localtime,
        country,
        cityName,
        condition,
        temp_c,
        humidity,
        wind_mph,
      } = desiredData;
      // set weather time :
      setWeatherTime(localtime);
      // set weather place and condition
      setWeatherPlaceAndCondition(condition, country, cityName);
      // set weather details :
      setWeatherDetails(temp_c, humidity, wind_mph);
    });
};

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

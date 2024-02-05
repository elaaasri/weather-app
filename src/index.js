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
  const {
    location: { localtime, country, name: cityName },
    current: {
      condition: { text: condition },
    },
  } = jsonData;
  console.log(jsonData);
  const requiredJsonData = {
    localtime,
    country,
    cityName,
    condition,
  };
  return requiredJsonData;
};

const setWeatherPlaceAndCondition = (condition, country, city) => {
  const weatherCondition = document.getElementById("weather-condition");
  const weatherCountry = document.getElementById("weather-place-country");
  const weatherCity = document.getElementById("weather-place-city");
  weatherCondition.textContent = condition;
  weatherCountry.textContent = country;
  weatherCity.textContent = city;
};

const setWeatherTime = (localtime) => {
  const weatherTime = document.getElementById("weather-info-time");
  const weatherDate = document.getElementById("weather-info-date");
  const date = new Date(localtime);
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

submit.onclick = () => {
  getData()
    .then((response) => processJsonData(response))
    .then((requiredJsonData) => {
      const { localtime, country, cityName, condition } = requiredJsonData;
      setWeatherTime(localtime);
      setWeatherPlaceAndCondition(condition, country, cityName);
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

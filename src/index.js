import "./style.css";

const input = document.getElementById("input");
const submit = document.getElementById("submit");

const getData = async () => {
  try {
    const cityName = input.value;
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=0a9c77ff65c2dc4d28a91e04fa19c9dd`
    );
    processJsonData(response);
  } catch (err) {
    console.error("Error Fetching Data:", err);
  }
};

const processJsonData = async (data) => {
  const jsonData = await data.json();
  console.log(jsonData);
  return jsonData;
};
submit.addEventListener("click", getData);

// const response = await fetch(
//   `http://api.openweathermap.org/data/2.5/forecast?q=rabat&appid=0a9c77ff65c2dc4d28a91e04fa19c9dd`

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

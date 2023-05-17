import './style.css';

async function getData(string) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9f51d71599cf4a5ba3782327231605&q=${string}`);
  const data = await response.json();
  console.log(data);
  return data;
}

async function getWeatherStats(string) {
  const data = await getData(string);
  const stats = data.current;
  return stats;
}

async function getLocationData(string) {
  const data = await getData(string);
  const stats = data.location;
  return stats;
}

async function getFeelTemp(type, string) {
  const weatherData = await getWeatherStats(string);
  const temp = (type === 'c') ? weatherData.temp_c : weatherData.temp_f;
  const result = temp + type;
  return result;
}

async function getTemp(type, string) {
  const weatherData = await getWeatherStats(string);
  const temp = (type === 'c') ? await weatherData.temp_c : await weatherData.temp_f;
  console.log(`The temperature is ${temp}${type}`);
}

// getTemp('c', 'dubai');
// getFeelTemp('c', 'dubai');

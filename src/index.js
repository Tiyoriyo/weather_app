import './style.css';

async function getData(string) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9f51d71599cf4a5ba3782327231605&q=${string}`);
  const data = await response.json();
  return data;
}

async function getWeatherStats(string) {
  const data = await getData(string);
  const stats = await data.current;
  return stats;
}

async function getLocationData(string) {
  const data = await getData(string);
  const stats = await data.location;
  return stats;
}

async function getTemp(type, string) {
  const data = await getWeatherStats(string);
  const temp = (type === 'c') ? await data.temp_c : await data.temp_f;
  console.log(`The temperature is ${temp}${type}`);
}

// getTemp('c', 'dubai');

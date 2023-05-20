// Universal Get Data Async Function
export default async function getData(string) {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9f51d71599cf4a5ba3782327231605&q=${string}`);
  const data = await response.json();
  return data;
}

// Weather Stat Component
export async function getWeatherStats(string) {
  const data = await getData(string);
  const stats = data.current;
  return stats;
}

export async function getFeelTemp(type, string) {
  const weatherData = await getWeatherStats(string);
  const tempNum = (type === 'c') ? weatherData.temp_c : weatherData.temp_f;
  return `${tempNum} ${type.toUpperCase()}`;
}

export async function getTemp(type, string) {
  const weatherData = await getWeatherStats(string);
  const tempNum = (type === 'c') ? await weatherData.temp_c : await weatherData.temp_f;
  return `${tempNum} ${type.toUpperCase()}`;
}

export async function getWindSpeed(string) {
  const { wind_kph } = await getWeatherStats(string);
  const windString = `${wind_kph} km/h`;
  return windString;
}

export async function getImage(string) {
  const weatherData = await getWeatherStats(string);
  const { icon } = weatherData.condition;
  return icon;
}

export async function getPressure(string) {
  const { pressure_mb } = await getWeatherStats(string);
  return `${pressure_mb} mb`;
}

// Location stat component
export async function getLocationData(string) {
  const data = await getData(string);
  const stats = data.location;
  return stats;
}

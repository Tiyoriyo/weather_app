/* eslint-disable no-underscore-dangle */
// Universal Get Data Async Function

// Weather Stat Component

export const weather = (async () => {
  async function getData(string) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f51d71599cf4a5ba3782327231605&q=${string}`);
    const data = await response.json();
    return data;
  }
  async function _getWeatherStats(string) {
    const data = await getData(string);
    console.log(data);
    const stats = data.current;
    return stats;
  }

  async function getImage(string) {
    const weatherData = await _getWeatherStats(string);
    const { icon } = weatherData.condition;
    return icon;
  }

  async function getWindSpeed(string) {
    const { wind_kph } = await _getWeatherStats(string);
    const windString = `${wind_kph} km/h`;
    return windString;
  }

  async function getPressure(string) {
    const { pressure_mb } = await _getWeatherStats(string);
    return `${pressure_mb} mb`;
  }

  async function getTemp(type, string) {
    const weatherData = await _getWeatherStats(string);
    const tempNum = (type === 'c') ? await weatherData.temp_c : await weatherData.temp_f;
    return `${tempNum} ${type.toUpperCase()}`;
  }

  return {
    getImage, getWindSpeed, getPressure, getTemp,
  };
})();

export async function getFeelTemp(type, string) {
  const weatherData = await getWeatherStats(string);
  const tempNum = (type === 'c') ? weatherData.temp_c : weatherData.temp_f;
  return `${tempNum} ${type.toUpperCase()}`;
}

// Location stat component
export async function getLocationData(string) {
  const data = await getData(string);
  const stats = data.location;
  return stats;
}

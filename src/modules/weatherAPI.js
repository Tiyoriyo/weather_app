/* eslint-disable prefer-const */
const weatherAPI = (async () => {
  let tempType = 'c';

  async function getData(string) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f51d71599cf4a5ba3782327231605&q=${string}`);
    const data = await response.json();
    return data;
  }

  async function getTemperature(string) {
    const data = await getData(string);
    const temp = (tempType === 'c') ? data.current.temp_c : data.current.temp_f;
    console.log(`Real Temp: ${temp} ${tempType.toUpperCase()}`);
    return temp;
  }

  async function getFeelTemperature(string) {
    const data = await getData(string);
    const temp = (tempType === 'c') ? data.current.feelslike_c : data.current.feelslike_f;
    console.log(`Feel Temp: ${temp} ${tempType.toUpperCase()}`);
    return temp;
  }

  async function getMinTemperature(string) {
    const data = await getData(string);
    const forecast = data.forecast.forecastday[0];
    const temp = (tempType === 'c') ? forecast.day.mintemp_c : forecast.day.mintemp_f;
    console.log(`Min Temp: ${temp} ${tempType.toUpperCase()}`);
    return temp;
  }

  async function getMaxTemperature(string) {
    const data = await getData(string);
    const forecast = data.forecast.forecastday[0];
    const temp = (tempType === 'c') ? forecast.day.maxtemp_c : forecast.day.maxtemp_f;
    console.log(`Max Temp: ${temp} ${tempType.toUpperCase()}`);
    return temp;
  }

  async function getAvgTemperature(string) {
    const data = await getData(string);
    const forecast = data.forecast.forecastday[0];
    const temp = (tempType === 'c') ? forecast.day.avgtemp_c : forecast.day.avgtemp_f;
    console.log(`Avg Temp: ${temp} ${tempType.toUpperCase()}`);
    return temp;
  }

  function changeTemperatureType() {
    tempType = (tempType === 'c') ? 'f' : 'c';
  }

  async function getCondition(string) {
    const data = await getData(string);
    const condition = data.current.condition.text;
    console.log(`Condition: ${condition}`);
    return condition;
  }

  async function getWindSpeed(string) {
    const data = await getData(string);
    const { wind_kph } = data.current;
    console.log(`Wind Speed: ${wind_kph} km/h`);
    return wind_kph;
  }

  async function getWindDirection(string) {
    const data = await getData(string);
    const { wind_dir } = data.current;
    console.log(`Wind Direction: ${wind_dir}`);
    return wind_dir;
  }

  async function getPressure(string) {
    const data = await getData(string);
    const { pressure_mb } = data.current;
    console.log(`Pressure: ${pressure_mb} mb`);
    return pressure_mb;
  }

  return {
    getData,
    getTemperature,
    changeTemperatureType,
    getFeelTemperature,
    getMinTemperature,
    getMaxTemperature,
    getAvgTemperature,
    getCondition,
    getWindSpeed,
    getWindDirection,
    getPressure,
  };
})();

export default weatherAPI;

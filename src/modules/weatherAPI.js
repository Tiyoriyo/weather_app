/* eslint-disable camelcase */
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
    return temp;
  }

  async function getFeelTemperature(string) {
    const data = await getData(string);
    const temp = (tempType === 'c') ? data.current.feelslike_c : data.current.feelslike_f;
    return `${temp} ${tempType.toUpperCase()}`;
  }

  async function getMinTemperature(string) {
    const data = await getData(string);
    const forecast = data.forecast.forecastday[0];
    const temp = (tempType === 'c') ? forecast.day.mintemp_c : forecast.day.mintemp_f;
    return `${temp} ${tempType.toUpperCase()}`;
  }

  async function getMaxTemperature(string) {
    const data = await getData(string);
    const forecast = data.forecast.forecastday[0];
    const temp = (tempType === 'c') ? forecast.day.maxtemp_c : forecast.day.maxtemp_f;
    return `${temp} ${tempType.toUpperCase()}`;
  }

  async function getAvgTemperature(string) {
    const data = await getData(string);
    const forecast = data.forecast.forecastday[0];
    const temp = (tempType === 'c') ? forecast.day.avgtemp_c : forecast.day.avgtemp_f;
    return `${temp} ${tempType.toUpperCase()}`;
  }

  function getTempType() {
    return tempType.toUpperCase();
  }

  function changeTemperatureType() {
    tempType = (tempType === 'c') ? 'f' : 'c';
  }

  async function getCondition(string) {
    const data = await getData(string);
    const condition = data.current.condition.text;
    return condition;
  }

  async function getConditionImg(string) {
    const data = await getData(string);
    const { icon } = data.current.condition;
    return icon;
  }

  async function getWindSpeed(string) {
    const data = await getData(string);
    const { wind_kph } = data.current;
    return `${wind_kph} km/h`;
  }

  async function getWindDirection(string) {
    const data = await getData(string);
    const { wind_dir } = data.current;
    return wind_dir;
  }

  async function getPressure(string) {
    const data = await getData(string);
    const { pressure_mb } = data.current;
    return `${pressure_mb} mb`;
  }

  async function getPrecipitation(string) {
    const data = await getData(string);
    const { precip_mm } = data.current;
    return `${precip_mm} mm`;
  }

  async function getLocation(string) {
    const data = await getData(string);
    const { name } = data.location;
    return name;
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
    getPrecipitation,
    getLocation,
    getTempType,
    getConditionImg,
  };
})();

export default weatherAPI;

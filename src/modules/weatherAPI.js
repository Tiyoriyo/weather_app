/* eslint-disable prefer-const */
const weatherAPI = (async () => {
  let tempType = 'c';

  async function getData(string) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f51d71599cf4a5ba3782327231605&q=${string}`);
    const data = await response.json();
    console.log(data);
    return data;
  }

  async function getTemperature(string) {
    const data = await getData(string);
    const temp = (tempType === 'c') ? data.current.temp_c : data.current.temp_f;
    console.log(temp);
    return temp;
  }

  function changeTemperatureType() {
    tempType = (tempType === 'c') ? 'f' : 'c';
    console.log(tempType);
  }

  return { getData, getTemperature, changeTemperatureType };
})();

export default weatherAPI;

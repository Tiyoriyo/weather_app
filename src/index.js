/* eslint-disable prefer-const */
import './style.css';
import weatherAPI from './modules/weatherAPI';

let inputLocation;

async function renderData(string) {
  const API = await weatherAPI;
  inputLocation = string;
  console.log(await API.getData(string));

  // Upper Container DOM Items
  // const tempCount = document.querySelector('.tempCount');
  // const tempType = document.querySelector('.tempType');
  const locationName = document.querySelector('.locationName');
  locationName.style.fontSize = '48px';

  // Lower Container DOM Items
  // Summary Info DOM Items
  const curTempText = document.querySelector('.curTemp');
  const minTempText = document.querySelector('.minTemp');
  const maxTempText = document.querySelector('.maxTemp');
  const avgTempText = document.querySelector('.avgTemp');

  // Forecast Details DOM Items
  const windspeedText = document.querySelector('.windSpeed');
  const windDirectionText = document.querySelector('.windDirection');
  const pressureText = document.querySelector('.pressure');
  const precipitationText = document.querySelector('.precipitation');
  const feelsLikeText = document.querySelector('.feelLike');

  try {
    // tempCount.textContent = await API.getTemperature(string);
    // tempType.textContent = API.getTempType();
    locationName.textContent = await API.getLocation(string);

    curTempText.textContent = await API.getTemperature(string);
    minTempText.textContent = await API.getMinTemperature(string);
    maxTempText.textContent = await API.getMaxTemperature(string);
    avgTempText.textContent = await API.getAvgTemperature(string);

    windspeedText.textContent = await API.getWindSpeed(string);
    windDirectionText.textContent = await API.getWindDirection(string);
    pressureText.textContent = await API.getPressure(string);
    precipitationText.textContent = await API.getPrecipitation(string);
    feelsLikeText.textContent = await API.getFeelTemperature(string);

    reduceTextSize(locationName);
  } catch (error) {
    reduceTextSize(locationName);
  }
}

const button = document.querySelector('button');
button.addEventListener('click', async () => {
  const API = await weatherAPI;
  await API.changeTemperatureType();
  await renderData(inputLocation);
});

const input = document.querySelector('.locationInput');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    renderData(input.value);
    input.value = '';
  }
});

function reduceTextSize(element) {
  while (element.offsetWidth > element.parentElement.offsetWidth) {
    element.style.fontSize = `${parseFloat(window.getComputedStyle(element).fontSize) - 1}px`;
  }
}

window.reduceTextSize = reduceTextSize;

renderData('Tel Aviv');

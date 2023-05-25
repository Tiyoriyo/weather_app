import './style.css';
import weatherAPI from './modules/weatherAPI';

let inputLocation;

async function renderData(string) {
  const API = await weatherAPI;
  inputLocation = string;
  console.log(await API.getData(string));

  // Upper Container DOM Items
  const tempCount = document.querySelector('.tempCount');
  const locationName = document.querySelector('.locationName');

  // Lower Container DOM Items
  // Summary Info DOM Items
  const conditionImg = document.querySelector('.conditionImg');
  const conditionText = document.querySelector('.conditionText');
  const minTempText = document.querySelector('.minTemp');
  const maxTempText = document.querySelector('.maxTemp');
  const avgTempText = document.querySelector('.avgTemp');

  try {
    tempCount.textContent = await API.getTemperature(string);
    locationName.textContent = await API.getLocation(string);
    conditionImg.src = await API.getConditionImg(string);
    conditionText.textContent = await API.getCondition(string);
    minTempText.textContent = await API.getMinTemperature(string);
    maxTempText.textContent = await API.getMaxTemperature(string);
    avgTempText.textContent = await API.getAvgTemperature(string);
  } catch {
    console.error('Whoops');
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

renderData('Dubai');

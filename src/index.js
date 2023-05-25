import './style.css';
import weatherAPI from './modules/weatherAPI';

let inputLocation;

async function renderData(string) {
  const API = await weatherAPI;

  // Upper Container DOM Items
  const tempCount = document.querySelector('.tempCount');
  const locationName = document.querySelector('.locationName');

  // Lower Container DOM Items
  // Summary Info DOM Items
  const conditionImg = document.querySelector('.conditionImgContainer');

  try {
    tempCount.textContent = await API.getTemperature(string);
    locationName.textContent = await API.getLocation(string);
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

renderData('Manchester');

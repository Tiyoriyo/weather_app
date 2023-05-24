import './style.css';
import weatherAPI from './modules/weatherAPI';

async function print(string) {
  const currentTemp = document.querySelector('.tempCount');
  const location = document.querySelector('.locationName');
  try {
    const API = await weatherAPI;
    console.log(await API.getData(string));
    await API.getData(string);
    currentTemp.textContent = await API.getTemperature(string);
    await API.getFeelTemperature(string);
    await API.getMinTemperature(string);
    await API.getMaxTemperature(string);
    await API.getAvgTemperature(string);
    await API.getCondition(string);
    await API.getWindSpeed(string);
    await API.getWindDirection(string);
    await API.getPressure(string);
    await API.getPrecipitation(string);
  } catch (error) {
    console.error('The input you have inserted is not a valid location name', error);
  }
}

const button = document.querySelector('button');
button.addEventListener('click', async () => {
  const API = await weatherAPI;
  await API.changeTemperatureType();
  await print('Dubai');
});

print('Manchester');

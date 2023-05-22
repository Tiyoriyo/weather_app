import './style.css';
import weatherAPI from './modules/weatherAPI';

async function print(string) {
  const API = await weatherAPI;
  await API.getData(string);
  await API.getTemperature(string);
  await API.changeTemperatureType();
  await API.getTemperature(string);
}

print('dubai');

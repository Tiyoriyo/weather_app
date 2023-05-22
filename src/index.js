import './style.css';
import { weather } from '../modules/weatherAPI';

const type = 'c';

async function renderInfo(string) {
  const api = await weather;
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const temp = document.createElement('p');
  const windSpeed = document.createElement('p');
  const pressure = document.createElement('p');
  const image = new Image();

  temp.innerHTML = await api.getTemp(type, string);
  windSpeed.innerHTML = await api.getWindSpeed(string);
  pressure.innerHTML = await api.getPressure(string);
  image.src = await api.getImage(string);

  container.append(temp, windSpeed, pressure, image);
}

renderInfo('Dubai');

// getTemp('c', 'dubai');
// getFeelTemp('c', 'dubai');

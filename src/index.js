import './style.css';
import getData, {
  getWeatherStats, getLocationData, getFeelTemp, getTemp, getWindSpeed, getImage, getPressure,
} from '../modules/weatherAPI';

async function addInfo(string) {
  const container = document.querySelector('.container');

  const temp = document.createElement('p');
  const windSpeed = document.createElement('p');
  const pressure = document.createElement('p');
  const image = new Image();
  image.src = await getImage(string);

  temp.innerHTML = await getTemp('c', string);
  windSpeed.innerHTML = await getWindSpeed(string);
  pressure.innerHTML = await getPressure(string);
  container.append(temp, windSpeed, pressure, image);
}

addInfo('Manila');

// getTemp('c', 'dubai');
// getFeelTemp('c', 'dubai');

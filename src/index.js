import './style.css';
import weatherAPI from './modules/weatherAPI';

async function print(string) {
  const API = await weatherAPI;
  API.getData(string);
}

// print('dubai');

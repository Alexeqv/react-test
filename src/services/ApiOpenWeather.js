import axios from "axios";
import { EndpointConfig } from '../config/config.js';

export default class WeatherRepository {
  // Definir el cliente Axios para consumir el servicio
  get ws() {
    const cfg = new EndpointConfig();
    const ws = axios.create({
      baseURL: cfg.URL_API_WEATHER,
    });
    return ws;
  }

  async getWeather(data) {
    const cfg = new EndpointConfig();
    // data = { lat: 35, lon: 139}
    const endpoint = `/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&units=${data.units}&lang=${data.lang}&appid=${cfg.API_KEY}`;
    const res = await this.ws.get(endpoint);
    return res.data;
  }

}

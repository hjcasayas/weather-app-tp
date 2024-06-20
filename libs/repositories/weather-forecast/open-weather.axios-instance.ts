import axios from 'axios';

export const openWeatherWeatherForecastAxiosInstance = axios.create({
  baseURL: process.env.WEATHER_FORCAST_BASE_URL,
});

openWeatherWeatherForecastAxiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    exclude: 'minutely,hourly,daily,alerts',
    units: 'imperial',
    appid: process.env.OPEN_WEATHER_API_KEY,
  };
  return config;
});

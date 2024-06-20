import axios from 'axios';

export const openWeatherGeoCodingAxiosInstance = axios.create({
  baseURL: process.env.GEO_CODING_BASE_URL,
});

openWeatherGeoCodingAxiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    limit: 5,
    appid: process.env.OPEN_WEATHER_API_KEY,
  };
  return config;
});

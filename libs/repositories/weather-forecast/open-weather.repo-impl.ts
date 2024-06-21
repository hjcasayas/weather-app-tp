import { Coordinate } from '@/libs/domain-objects/coordinate.domain-object';
import { WeatherInfo } from '@/libs/domain-objects/weather-info.domain-object';
import { IWeatherForcastRepository } from './weather-forecast.repo-interface';
import { AxiosInstance, AxiosResponse } from 'axios';
import { WeatherForecastDTO } from './weather-forecast.dto';

export class OpenWeatherWeatherForcastRepo
  implements IWeatherForcastRepository
{
  constructor(private axiosInstance: AxiosInstance) {}

  getWeatherInfoByCoordinate = async (
    coordinate: Coordinate
  ): Promise<WeatherInfo> => {
    const response = await this.axiosInstance.get<
      WeatherForecastDTO,
      AxiosResponse<WeatherForecastDTO, {}>,
      {}
    >('/onecall', {
      params: {
        lat: coordinate.latitude,
        lon: coordinate.longitude,
      },
    });

    const data = response.data;
    if (data == null || data.current == null) {
      throw new Error('No weather information found');
    }

    return {
      tempInFahrenheit: Math.ceil(data.current.temp),
      weather: data.current.weather[0].main,
    };
  };
}

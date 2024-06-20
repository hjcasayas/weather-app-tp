import { Coordinate } from '@/libs/domain-objects/coordinate.domain-object';
import { WeatherInfo } from '@/libs/domain-objects/weather-info.domain-object';

export interface IWeatherForcastRepository {
  getWeatherInfoByCoordinate: (coordinate: Coordinate) => Promise<WeatherInfo>;
}

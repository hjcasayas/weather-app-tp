import { Coordinate } from '../domain-objects/coordinate.domain-object';
import { WeatherInfo } from '../domain-objects/weather-info.domain-object';
import { IWeatherForcastRepository } from '../repositories/weather-forecast/weather-forecast.repo-interface';
import { IUseCase } from './use-case.interface';

export class GetWeatherInfoByCoordinateUseCase
  implements IUseCase<Coordinate, Promise<WeatherInfo>>
{
  constructor(private weatherForcastRepository: IWeatherForcastRepository) {}

  execute = async (coordinate: Coordinate): Promise<WeatherInfo> => {
    return await this.weatherForcastRepository.getWeatherInfoByCoordinate(
      coordinate
    );
  };
}

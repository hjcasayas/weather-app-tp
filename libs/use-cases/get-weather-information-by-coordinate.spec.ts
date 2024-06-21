import { describe } from 'node:test';
import { expect, test } from 'vitest';
import { IGeoCodingRepository } from '../repositories/geo-coding/geo-coding.repo-interface';
import { Location } from '../domain-objects/location.domain-object';
import { GetCoordidateByLocationUseCase } from './get-coordinate-by-location.use-case';
import { IWeatherForcastRepository } from '../repositories/weather-forecast/weather-forecast.repo-interface';
import { Coordinate } from '../domain-objects/coordinate.domain-object';
import { WeatherInfo } from '../domain-objects/weather-info.domain-object';
import { GetWeatherInfoByCoordinateUseCase } from './get-weather-information-by-coordinate.use-case';

describe('Get Weather Information By Coordinate', () => {
  test('True', () => {
    expect(true).toBeTruthy();
  });

  test('getWeatherInfoByCoordinate method is called with correct received arguments', () => {
    let calledCount = 0;
    let coordinateInitial: Coordinate = { latitude: 0, longitude: 0 };

    class FakeWeatherForcastRepository implements IWeatherForcastRepository {
      getWeatherInfoByCoordinate = async (
        coordinate: Coordinate
      ): Promise<WeatherInfo> => {
        calledCount++;
        coordinateInitial = coordinate;

        return { tempInFahrenheit: 0, weather: '' };
      };
    }

    const coordinateArgs: Coordinate = { latitude: 123, longitude: 456 };
    const getWeatherInfoByCoordinateUseCase =
      new GetWeatherInfoByCoordinateUseCase(new FakeWeatherForcastRepository());
    getWeatherInfoByCoordinateUseCase.execute(coordinateArgs);

    expect(coordinateInitial.latitude).toBe(coordinateArgs.latitude);
    expect(coordinateInitial.longitude).toBe(coordinateArgs.longitude);
    expect(calledCount).toBe(1);
  });
});

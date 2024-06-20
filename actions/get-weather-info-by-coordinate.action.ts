'use server';

import { Coordinate } from '@/libs/domain-objects/coordinate.domain-object';
import { openWeatherWeatherForecastAxiosInstance } from '@/libs/repositories/weather-forecast/open-weather.axios-instance';
import { OpenWeatherWeatherForcastRepo } from '@/libs/repositories/weather-forecast/open-weather.repo-impl';
import { GetWeatherInfoByCoordinateUseCase } from '@/libs/use-cases/get-weather-information-by-coordinate.use-case';

export async function getWeatherInfoByCoordinateAction(coordinate: Coordinate) {
  const useCase = new GetWeatherInfoByCoordinateUseCase(
    new OpenWeatherWeatherForcastRepo(openWeatherWeatherForecastAxiosInstance)
  );

  return await useCase.execute(coordinate);
}

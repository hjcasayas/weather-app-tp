'use server';

import { openWeatherGeoCodingAxiosInstance } from '@/libs/repositories/geo-coding/open-weather.axios-instance';
import { OpenWeatherGeoCodingRepo } from '@/libs/repositories/geo-coding/open-weather.repo-impl';
import { GetCoordidateByLocationUseCase } from '@/libs/use-cases/get-coordinate-by-location.use-case';

export const searchLocations = async (location: string) => {
  const useCase = new GetCoordidateByLocationUseCase(
    new OpenWeatherGeoCodingRepo(openWeatherGeoCodingAxiosInstance)
  );

  return await useCase.execute(location);
};

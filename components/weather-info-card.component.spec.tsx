import { describe, expect, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Coordinate } from '@/libs/domain-objects/coordinate.domain-object';
import { IWeatherForcastRepository } from '@/libs/repositories/weather-forecast/weather-forecast.repo-interface';
import { WeatherInfo } from '@/libs/domain-objects/weather-info.domain-object';
import { GetWeatherInfoByCoordinateUseCase } from '@/libs/use-cases/get-weather-information-by-coordinate.use-case';
import { WeatherInfoCard } from './weather-info-card.component';

describe('Weather Info Card', () => {
  test('True', () => {
    expect(true).toBeTruthy;
  });
  test('Weather info card should call the correct method and received the correct arguments', async () => {
    let calledCount = 0;
    let testCoordinate: Coordinate = { latitude: 0, longitude: 0 };
    const location = 'London';

    class FakeWeatherForcastRepository implements IWeatherForcastRepository {
      getWeatherInfoByCoordinate = async (
        coordinate: Coordinate
      ): Promise<WeatherInfo> => {
        calledCount++;
        expect(coordinate.latitude).toBe(testCoordinate.latitude);
        expect(coordinate.longitude).toBe(testCoordinate.longitude);
        return { tempInFahrenheit: 90, weather: 'Clouds' };
      };
    }
    const useCase = new GetWeatherInfoByCoordinateUseCase(
      new FakeWeatherForcastRepository()
    );

    const fakeGetWeatherInfoByCoordinate = async (coordinate: Coordinate) => {
      try {
        return await useCase.execute(coordinate);
      } catch (error) {
        return null;
      }
    };

    console.log(fakeGetWeatherInfoByCoordinate);

    const Component = await WeatherInfoCard({
      getWeatherInfoByCoordinate: fakeGetWeatherInfoByCoordinate,
      location: location,
      coordinate: testCoordinate,
    });
    render(Component);
    const locationText = await screen.findByText(location);
    expect(locationText).toBeVisible();
    expect(calledCount).toBe(1);
  });
});

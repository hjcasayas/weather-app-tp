import { Coordinate } from '@/libs/domain-objects/coordinate.domain-object';
import { WeatherInfo as IWeatherInfo } from '@/libs/domain-objects/weather-info.domain-object';
import { redirect } from 'next/navigation';
import { WeatherInfo } from './weather-info.component';
import Link from 'next/link';
import { BackButton } from './back-button.component';

interface WeatherInfoCardProps {
  getWeatherInfoByCoordinate: (
    coordinate: Coordinate
  ) => Promise<IWeatherInfo | null>;
  coordinate: Coordinate;
  location: string;
}

export async function WeatherInfoCard({
  getWeatherInfoByCoordinate,
  coordinate,
  location,
}: WeatherInfoCardProps) {
  const weatherInfo = await getWeatherInfoByCoordinate(coordinate);

  if (weatherInfo == null) {
    redirect('/');
  }

  return (
    <WeatherInfo>
      <WeatherInfo.Location>{location}</WeatherInfo.Location>
      <WeatherInfo.Temperature>
        {weatherInfo.tempInFahrenheit}
      </WeatherInfo.Temperature>
      <WeatherInfo.Weather>{weatherInfo.weather}</WeatherInfo.Weather>
      <Link href="/">
        <BackButton>Search again</BackButton>
      </Link>
    </WeatherInfo>
  );
}

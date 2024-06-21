import { getWeatherInfoByCoordinateAction } from '@/actions/get-weather-info-by-coordinate.action';
import { BackButton } from '@/components/back-button.component';
import { WeatherInfo } from '@/components/weather-info.component';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface LocationProps {
  params: {
    location: string;
  };
  searchParams: {
    lat: string;
    lon: string;
  };
}

export default async function Location({
  params: { location },
  searchParams: { lat, lon },
}: LocationProps) {
  const weatherInfo = await getWeatherInfoByCoordinateAction({
    latitude: +lat,
    longitude: +lon,
  });

  if (weatherInfo == null) {
    notFound();
  }

  return (
    <WeatherInfo>
      <WeatherInfo.Location>{decodeURI(location)}</WeatherInfo.Location>
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

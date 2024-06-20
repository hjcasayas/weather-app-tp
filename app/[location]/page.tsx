import { getWeatherInfoByCoordinateAction } from '@/actions/get-weather-info-by-coordinate.action';
import { WeatherInfo } from '@/components/weather-info.component';

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

  return (
    <WeatherInfo>
      <WeatherInfo.Location>{decodeURI(location)}</WeatherInfo.Location>
      <WeatherInfo.Temperature>
        {weatherInfo.tempInFahrenheit}
      </WeatherInfo.Temperature>
      <WeatherInfo.Weather>{weatherInfo.weather}</WeatherInfo.Weather>
    </WeatherInfo>
  );
}

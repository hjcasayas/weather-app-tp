import { getWeatherInfoByCoordinateAction } from '@/actions/get-weather-info-by-coordinate.action';
import { WeatherInfoCard } from '@/components/weather-info-card.component';

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
  return (
    <WeatherInfoCard
      getWeatherInfoByCoordinate={getWeatherInfoByCoordinateAction}
      coordinate={{ latitude: +lat, longitude: +lon }}
      location={decodeURI(location)}
    ></WeatherInfoCard>
  );
}

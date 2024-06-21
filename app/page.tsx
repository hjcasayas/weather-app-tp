import { SearchForm } from '@/components/search-form.component';
import { Hero } from '@/components/hero.component';
import { GetCoordidateByLocationUseCase } from '@/libs/use-cases/get-coordinate-by-location.use-case';
import { openWeatherGeoCodingAxiosInstance } from '@/libs/repositories/geo-coding/open-weather.axios-instance';
import { OpenWeatherGeoCodingRepo } from '@/libs/repositories/geo-coding/open-weather.repo-impl';

export default function Home() {
  const searchLocations = async (location: string) => {
    'use server';
    const useCase = new GetCoordidateByLocationUseCase(
      new OpenWeatherGeoCodingRepo(openWeatherGeoCodingAxiosInstance)
    );

    return await useCase.execute(location);
  };
  return (
    <div className="overflow-hidde relative isolate min-h-screen py-16 sm:py-24 lg:py-32">
      <Hero>
        <Hero.Title>Weather App</Hero.Title>
        <Hero.SubTitle>
          Find weather information anywhere in the world.
        </Hero.SubTitle>
        <SearchForm searchLocations={searchLocations}></SearchForm>
      </Hero>
    </div>
  );
}

import { SearchForm } from '@/components/search-form.component';
import { Hero } from '@/components/hero.component';

export default function Home() {
  return (
    <div className="overflow-hidde relative isolate min-h-screen py-16 sm:py-24 lg:py-32">
      <Hero>
        <Hero.Title>Weather App</Hero.Title>
        <Hero.SubTitle>
          Find weather information anywhere in the world.
        </Hero.SubTitle>
        <SearchForm></SearchForm>
      </Hero>
    </div>
  );
}

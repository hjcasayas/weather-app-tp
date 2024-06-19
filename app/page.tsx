import { SearchFrom } from '@/components/search-form.component';
import { Hero } from '@/components/hero.component';

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <Hero>
        <Hero.Title>Weather App</Hero.Title>
        <Hero.SubTitle>
          Find weather information anywhere in the world.
        </Hero.SubTitle>
        <SearchFrom></SearchFrom>
      </Hero>
    </div>
  );
}

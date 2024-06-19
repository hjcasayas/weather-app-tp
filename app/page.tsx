import { SearchFrom } from '@/components/search-form.component';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto flex max-w-xl flex-col lg:max-w-lg">
        <h2 className="self-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Weather App
        </h2>
        <p className="mt-4 self-center text-lg leading-8 text-gray-300">
          Get weather information anywhere from the world.
        </p>
        <SearchFrom></SearchFrom>
      </div>
    </div>
  );
}

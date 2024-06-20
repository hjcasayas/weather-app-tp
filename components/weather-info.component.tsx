import { ReactNode } from 'react';

interface WeatherInfoProps {
  children: ReactNode;
}

export function WeatherInfo({ children }: WeatherInfoProps) {
  return (
    <div className="min-h-screen py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20">
          <div className="-mt-2 p-2">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5">
              <div className="mx-auto max-w-xs px-8">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

WeatherInfo.Location = Location;
WeatherInfo.Temperature = Temperature;
WeatherInfo.Weather = Weather;

interface LocationProps {
  children: ReactNode;
}

function Location({ children }: LocationProps) {
  return <p className="text-lg font-semibold text-gray-600">{children}</p>;
}

interface TemperatureProps {
  children: ReactNode;
}

function Temperature({ children }: TemperatureProps) {
  return (
    <p className="mt-6 flex items-baseline justify-center gap-x-2">
      <span className="text-9xl font-bold tracking-tight text-indigo-500">
        {children}&#8457;
      </span>
    </p>
  );
}

interface WeatherProps {
  children: ReactNode;
}

function Weather({ children }: WeatherProps) {
  return <p className="mt-6 text-base leading-5 text-gray-600">{children}</p>;
}

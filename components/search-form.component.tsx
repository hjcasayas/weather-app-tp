'use client';

import { Location } from '@/libs/domain-objects/location.domain-object';
import { error } from 'console';
import Link from 'next/link';
import { ChangeEventHandler, useEffect, useState } from 'react';

interface SearchFormProps {
  searchLocations: (location: string) => Promise<Location[]>;
}

export function SearchForm({ searchLocations }: SearchFormProps) {
  const [search, setSearch] = useState<string>('');
  const [locations, setLocations] = useState<Location[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined | null>(
    null
  );

  useEffect(() => {
    setErrorMessage(null);
    if (search.trim() !== '') {
      const setTimeoutId = setTimeout(async () => {
        try {
          const searchedLocations = await searchLocations(search);
          setLocations(searchedLocations);
        } catch (error) {
          setLocations([]);
          setErrorMessage('No location found.');
        }
      }, 1000);

      return () => {
        clearTimeout(setTimeoutId);
      };
    } else {
      setLocations([]);
    }
  }, [search]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="location" className="sr-only">
          Search location
        </label>
        <input
          id="location"
          type="text"
          autoComplete="location"
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Search location"
          onChange={handleChange}
        />
        {errorMessage != null ? (
          <div className="mt-2 rounded-md border border-red-400 bg-red-200 py-1">
            <p className="block px-4 py-2 text-sm text-gray-700">
              No weather information found
            </p>
          </div>
        ) : null}
        {locations != null && locations.length > 0 ? (
          <div className="mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <ul className="flex flex-col gap-2 py-1">
              {locations.map((location) => (
                <Link
                  key={`${location.coordinate.latitude}${location.coordinate.longitude}`}
                  href={`/${location.name}?lat=${location.coordinate.latitude}&lon=${location.coordinate.longitude}`}
                >
                  <li className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    <span>{`${location.name}, ${location.country}, lat: ${location.coordinate.latitude}, lon: ${location.coordinate.longitude}`}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

'use client';

import { useLocations } from '@/hooks/use-locations.hook';
import { Location } from '@/libs/domain-objects/location.domain-object';
import { ChangeEventHandler } from 'react';
import { LocationList } from './location-list.component';

interface SearchFormProps {
  searchLocations: (location: string) => Promise<Location[]>;
}

export function SearchForm({ searchLocations }: SearchFormProps) {
  const { setSearch, locations, errorMessage } = useLocations({
    searchLocations,
  });

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
        <LocationList locations={locations}></LocationList>
      </div>
    </>
  );
}

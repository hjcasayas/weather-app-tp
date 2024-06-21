import { Location } from '@/libs/domain-objects/location.domain-object';
import { useEffect, useState } from 'react';

interface UseLocationParams {
  searchLocations: (location: string) => Promise<Location[]>;
}

export function useLocations({ searchLocations }: UseLocationParams) {
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
      }, 300);

      return () => {
        clearTimeout(setTimeoutId);
      };
    } else {
      setLocations([]);
    }
  }, [search]);

  return { setSearch, locations, errorMessage };
}

import { describe, expect, test } from 'vitest';
import { screen, fireEvent, render } from '@testing-library/react';
import { SearchForm } from './search-form.component';
import { GetCoordidateByLocationUseCase } from '@/libs/use-cases/get-coordinate-by-location.use-case';
import { IGeoCodingRepository } from '@/libs/repositories/geo-coding/geo-coding.repo-interface';
import { Location } from '@/libs/domain-objects/location.domain-object';

describe('Search Form', () => {
  test('Searching for a location should call the correct method with the arguments', async () => {
    let calledCount = 0;
    let locationParams = '';
    const locationToSearch = 'London';

    class FakeGeoCodingRepository implements IGeoCodingRepository {
      getLocations = async (location: string): Promise<Location[]> => {
        calledCount++;
        locationParams = location;
        return [];
      };
    }

    const useCase = new GetCoordidateByLocationUseCase(
      new FakeGeoCodingRepository()
    );

    const fakeSearchLocations = async (location: string) => {
      return await useCase.execute(location);
    };

    render(<SearchForm searchLocations={fakeSearchLocations}></SearchForm>);
    const searchInput = await screen.findByPlaceholderText(/Search location/i);
    fireEvent.change(searchInput, { target: { value: locationToSearch } });

    setTimeout(() => {
      expect(locationParams).toBe(locationToSearch);
      expect(calledCount).toBe(1);
    }, 300);
  });
});

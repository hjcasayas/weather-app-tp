import { describe } from 'node:test';
import { expect, test } from 'vitest';
import { IGeoCodingRepository } from '../repositories/geo-coding/geo-coding.repo-interface';
import { Location } from '../domain-objects/location.domain-object';
import { GetCoordidateByLocationUseCase } from './get-coordinate-by-location.use-case';

describe('Get Coordinate By Location', () => {
  test('getLocations method is called with correct received arguments', () => {
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

    const getCoordinateByLocationUseCase = new GetCoordidateByLocationUseCase(
      new FakeGeoCodingRepository()
    );
    getCoordinateByLocationUseCase.execute(locationToSearch);

    expect(locationParams).toBe(locationToSearch);
    expect(calledCount).toBe(1);
  });
});

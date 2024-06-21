import { Location } from '../../domain-objects/location.domain-object';

export interface IGeoCodingRepository {
  getLocations: (location: string) => Promise<Location[]>;
}

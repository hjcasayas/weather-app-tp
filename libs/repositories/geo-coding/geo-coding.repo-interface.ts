import { Location } from '../../domain-objects/location.domain-object';

export interface IGeoCodingRepository {
  getCoordidateByLocation: (location: string) => Promise<Location>;
}

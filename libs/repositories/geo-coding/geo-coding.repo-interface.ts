import { Coordinate } from '../../domain-objects/coordinate.domain-object';

export interface IGeoCodingRepository {
  getCoordidateByLocation: (location: string) => Promise<Coordinate>;
}

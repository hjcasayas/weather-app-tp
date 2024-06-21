import { IGeoCodingRepository } from '../repositories/geo-coding/geo-coding.repo-interface';
import { Coordinate } from '../domain-objects/coordinate.domain-object';
import { IUseCase } from './use-case.interface';
import { Location } from '../domain-objects/location.domain-object';

export class GetCoordidateByLocationUseCase
  implements IUseCase<string, Promise<Location[]>>
{
  constructor(private geoCodingRepository: IGeoCodingRepository) {}

  execute = async (location: string): Promise<Location[]> => {
    return await this.geoCodingRepository.getLocations(location);
  };
}

import { IGeoCodingRepository } from '../repositories/geo-coding/geo-coding.repo-interface';
import { Coordinate } from '../domain-objects/coordinate.domain-object';
import { IUseCase } from './use-case.interface';

export class GetCoordidateByLocationUseCase
  implements IUseCase<string, Promise<Coordinate>>
{
  constructor(private geoCodingRepository: IGeoCodingRepository) {}

  execute = async (params: string): Promise<Coordinate> => {
    return await this.geoCodingRepository.getCoordidateByLocation(params);
  };
}

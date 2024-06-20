import { Coordinate } from '@/libs/domain-objects/coordinate.domain-object';
import { IGeoCodingRepository } from './geo-coding.repo-interface';
import { AxiosInstance } from 'axios';
import { DirectDTO } from './direct.dto';

export class OpenWeatherGeoCodingRepo implements IGeoCodingRepository {
  constructor(private axiosInstance: AxiosInstance) {}

  getCoordidateByLocation = async (location: string): Promise<Coordinate> => {
    const response = await this.axiosInstance.get<DirectDTO[]>('/direct', {
      params: {
        q: location,
      },
    });

    const data = response.data;
    if (data == null || data.length < 0) {
      throw new Error('No weather information found');
    }

    return { latitude: data[0].lat, longitude: data[0].lon };
  };
}

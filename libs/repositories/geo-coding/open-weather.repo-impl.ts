import { IGeoCodingRepository } from './geo-coding.repo-interface';
import { AxiosInstance } from 'axios';
import { DirectDTO } from './direct.dto';
import { Location } from '@/libs/domain-objects/location.domain-object';

export class OpenWeatherGeoCodingRepo implements IGeoCodingRepository {
  constructor(private axiosInstance: AxiosInstance) {}

  getLocations = async (location: string): Promise<Location[]> => {
    try {
      const response = await this.axiosInstance.get<DirectDTO[]>('/direct', {
        params: {
          q: location,
        },
      });

      const data = response.data;
      if (data == null || data.length <= 0) {
        throw new Error('No weather information found');
      }
      const locations: Location[] = data.map((location) => {
        return {
          name: location.name,
          coordinate: { latitude: location.lat, longitude: location.lon },
          country: location.country,
        };
      });

      return locations;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  };
}

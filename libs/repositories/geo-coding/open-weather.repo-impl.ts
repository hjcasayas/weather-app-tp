import { IGeoCodingRepository } from './geo-coding.repo-interface';
import { AxiosInstance } from 'axios';
import { DirectDTO } from './direct.dto';
import { Location } from '@/libs/domain-objects/location.domain-object';

export class OpenWeatherGeoCodingRepo implements IGeoCodingRepository {
  constructor(private axiosInstance: AxiosInstance) {}

  getCoordidateByLocation = async (location: string): Promise<Location> => {
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
      const locationData = data.find((d) => {
        return d.name.toLowerCase().includes(location.toLowerCase());
      });

      if (locationData == null) {
        throw new Error('No weather information found');
      }

      return {
        name: locationData.name,
        coordinate: { latitude: locationData.lat, longitude: locationData.lon },
      };
    } catch (error) {
      console.log({ error });
      throw error;
    }
  };
}

'use server';

import { Coordinate } from '@/libs/domain-objects/coordinate.domain-object';
import { openWeatherGeoCodingAxiosInstance } from '@/libs/repositories/geo-coding/open-weather.axios-instance';
import { OpenWeatherGeoCodingRepo } from '@/libs/repositories/geo-coding/open-weather.repo-impl';
import { GetCoordidateByLocationUseCase } from '@/libs/use-cases/get-coordinate-by-location.use-case';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export interface IGetGoordinateByLocationState {
  errors: {
    location?: string[];
    _form?: string[];
  };
}

const searchLocationSchema = z.object({
  location: z.string().min(1, { message: 'Location is required.' }),
});

export async function getGoordinateByLocationAction(
  prevState: IGetGoordinateByLocationState,
  formData: FormData
): Promise<IGetGoordinateByLocationState | undefined> {
  const location = formData.get('location');
  const parsedData = searchLocationSchema.safeParse({ location });

  if (!parsedData.success) {
    return {
      errors: parsedData.error.flatten().fieldErrors,
    };
  }
  let coordinates: Coordinate;
  try {
    coordinates = await new GetCoordidateByLocationUseCase(
      new OpenWeatherGeoCodingRepo(openWeatherGeoCodingAxiosInstance)
    ).execute(parsedData.data.location);
  } catch (error) {
    return {
      errors: {
        _form: ['Something went wrong!'],
      },
    };
  }

  redirect(
    `/${location}?lat=${coordinates.latitude}&lon=${coordinates.longitude}`
  );
}

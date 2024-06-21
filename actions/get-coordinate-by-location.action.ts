'use server';

import { Coordinate } from '@/libs/domain-objects/coordinate.domain-object';
import { Location } from '@/libs/domain-objects/location.domain-object';
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
): Promise<IGetGoordinateByLocationState> {
  const location = formData.get('location');
  const parsedData = searchLocationSchema.safeParse({ location });

  if (!parsedData.success) {
    return {
      errors: parsedData.error.flatten().fieldErrors,
    };
  }
  let locationWithCoordinate: Location;
  try {
    locationWithCoordinate = await new GetCoordidateByLocationUseCase(
      new OpenWeatherGeoCodingRepo(openWeatherGeoCodingAxiosInstance)
    ).execute(parsedData.data.location);
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message !== '') {
        return {
          errors: {
            _form: [error.message],
          },
        };
      }
    }

    return {
      errors: {
        _form: ['Something went wrong!'],
      },
    };
  }

  redirect(
    `/${locationWithCoordinate.name}?lat=${locationWithCoordinate.coordinate.latitude}&lon=${locationWithCoordinate.coordinate.longitude}`
  );
}

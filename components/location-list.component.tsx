import { Location } from '@/libs/domain-objects/location.domain-object';
import Link from 'next/link';
import { LocationItem } from './location-item.component';

interface LocationListProps {
  locations?: Location[];
}

export function LocationList({ locations }: LocationListProps) {
  return locations != null && locations.length > 0 ? (
    <div className="mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <ul className="flex flex-col gap-2 py-1">
        {locations.map((location) => (
          <LocationItem
            key={`${location.coordinate.latitude}${location.coordinate.longitude}`}
            location={location}
          ></LocationItem>
        ))}
      </ul>
    </div>
  ) : null;
}

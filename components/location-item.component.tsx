import { Location } from '@/libs/domain-objects/location.domain-object';
import Link from 'next/link';

interface LocationItemProps {
  location: Location;
}

export function LocationItem({ location }: LocationItemProps) {
  return (
    <Link
      href={`/${location.name}?lat=${location.coordinate.latitude}&lon=${location.coordinate.longitude}`}
    >
      <li className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
        <span>{`${location.name}, ${location.country}, lat: ${location.coordinate.latitude}, lon: ${location.coordinate.longitude}`}</span>
      </li>
    </Link>
  );
}

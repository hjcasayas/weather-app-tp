'use client';

import { SubmitButton } from './submit-button.component';
import { useFormState } from 'react-dom';
import { getGoordinateByLocationAction } from '@/actions/get-coordinate-by-location.action';

export function SearchForm() {
  const [state, formAction] = useFormState(getGoordinateByLocationAction, {
    errors: {},
  });

  return (
    <>
      <form action={formAction} className="mt-6 flex gap-x-4">
        <label htmlFor="location" className="sr-only">
          Search location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          autoComplete="location"
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Search location"
        />
        <SubmitButton></SubmitButton>
      </form>
      <></>
    </>
  );
}

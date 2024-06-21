'use client';
import { cn } from '@/libs/utils/cn.util';
import { ButtonHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function SearchButton({ className, ...restProps }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...restProps}
      type="submit"
      className={cn(
        'flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
        className
      )}
      disabled={pending}
    >
      {pending ? 'Searching' : 'Search'}
    </button>
  );
}

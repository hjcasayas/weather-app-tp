'use client';
import { cn } from '@/libs/utils/cn.util';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function BackButton({
  children,
  className,
  ...restProps
}: BackButtonProps) {
  return (
    <button
      {...restProps}
      type="button"
      className={cn(
        'flex-none rounded-md border border-indigo-500 bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-500 shadow-sm hover:border-white hover:bg-indigo-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        className
      )}
    >
      {children}
    </button>
  );
}

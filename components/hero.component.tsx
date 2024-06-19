import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../libs/utils/cn.util';

interface HeroProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Hero({ children, className, ...restProps }: HeroProps) {
  return (
    <div
      className={cn('mx-auto flex max-w-xl flex-col lg:max-w-lg', className)}
      {...restProps}
    >
      {children}
    </div>
  );
}

Hero.Title = Title;
Hero.SubTitle = SubTitle;

interface TitleProps extends HTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
}

function Title({ children, className, ...restProps }: TitleProps) {
  return (
    <h2
      className={cn(
        'self-center text-3xl font-bold tracking-tight text-white sm:text-4xl',
        className
      )}
      {...restProps}
    >
      {children}
    </h2>
  );
}

interface SubTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

function SubTitle({ children, className, ...restProps }: SubTitleProps) {
  return (
    <p
      className={cn(
        'mt-4 self-center text-lg leading-8 text-gray-300',
        className
      )}
      {...restProps}
    >
      {children}
    </p>
  );
}

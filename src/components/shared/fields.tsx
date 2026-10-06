import { TypographyComp } from '@dashflowx/core';
import type { AuthLinkType, AuthLibrary } from './types';

export function AuthTextLink({
  library,
  type,
  href,
  children,
  className = 'font-semibold text-primary underline underline-offset-4',
}: {
  library: AuthLibrary;
  type: AuthLinkType;
  href: string;
  children: string;
  className?: string;
}) {
  if (library === 'next') {
    return (
      <TypographyComp as={type} href={href} className={className}>
        {children}
      </TypographyComp>
    );
  }
  return (
    <TypographyComp as={type} to={href} className={className}>
      {children}
    </TypographyComp>
  );
}

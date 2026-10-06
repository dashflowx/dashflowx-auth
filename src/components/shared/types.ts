import type { ComponentType, ElementType } from 'react';

/** Router library used for auth link components (`react-router` vs Next.js). */
export type AuthLibrary = 'react' | 'next';

/**
 * Visual layout for auth screens.
 * - `basic` / `split` — form + preview panel (default)
 * - `card` — centered card, no preview panel
 * - `minimal` — compact form only
 */
export type AuthVariant = 'basic' | 'split' | 'card' | 'minimal';

export type AuthEmailMode = 'resetPassword' | 'recoverEmail' | 'verifyEmail';

/** Link component from React Router (`Link`) or Next.js (`Link` / `a`). */
export type AuthLinkType = ElementType | ComponentType<Record<string, unknown>>;

export type AuthPreviewProps = {
  previewImg?: string;
  previewTitle?: string;
  PreviewDescription?: string;
};

export type AuthChromeProps = AuthPreviewProps & {
  library?: AuthLibrary;
  type?: AuthLinkType;
  /** Preferred spelling. */
  variant?: AuthVariant;
  /** @deprecated Use `variant`. Kept for existing call sites. */
  varient?: AuthVariant;
  isLoading?: boolean;
  className?: string;
};

export function resolveAuthVariant(
  variant?: AuthVariant,
  varient?: AuthVariant,
): AuthVariant {
  return variant ?? varient ?? 'basic';
}

export function showsAuthPreview(variant: AuthVariant): boolean {
  return variant === 'basic' || variant === 'split';
}

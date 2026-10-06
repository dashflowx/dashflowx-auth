import type { ReactNode } from 'react';
import {
  showsAuthPreview,
  type AuthPreviewProps,
  type AuthVariant,
} from './types';

type AuthShellProps = AuthPreviewProps & {
  variant: AuthVariant;
  className?: string;
  children: ReactNode;
};

/** Shared layout chrome driven by `variant`. */
export function AuthShell({
  variant,
  className = '',
  previewImg = '',
  previewTitle = '',
  PreviewDescription = '',
  children,
}: AuthShellProps) {
  const showPreview = showsAuthPreview(variant);
  const isMinimal = variant === 'minimal';

  if (!showPreview) {
    return (
      <div
        className={`flex min-h-screen w-full items-center justify-center bg-slate-50 p-4 ${className}`.trim()}
        data-auth-variant={variant}
      >
        <div
          className={
            isMinimal
              ? 'w-full max-w-sm'
              : 'w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm'
          }
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex h-screen w-screen flex-wrap ${className}`.trim()}
      data-auth-variant={variant}
    >
      <div className="flex w-full flex-col md:w-[40%]">
        <div className="z-10 flex h-full items-center justify-center">
          <div className="mx-auto w-[80%] max-w-md">{children}</div>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-[60%]">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          {PreviewDescription ? (
            <p className="mb-8 text-3xl font-semibold leading-10">{PreviewDescription}</p>
          ) : null}
          {previewTitle ? <p className="mb-7 text-sm opacity-70">{previewTitle}</p> : null}
        </div>
        {previewImg ? (
          <img
            className="absolute top-0 -z-[1] h-full w-full object-cover opacity-90"
            src={previewImg}
            alt=""
          />
        ) : null}
      </div>
    </div>
  );
}

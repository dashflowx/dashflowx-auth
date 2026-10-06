import { Button, Input2 } from '@dashflowx/core';
import { FcGoogle } from 'react-icons/fc';
import { AuthShell } from '../../shared/AuthShell';
import { AuthTextLink } from '../../shared/fields';
import type { AuthLinkType, AuthLibrary, AuthVariant } from '../../shared/types';

export type BasicSignUpProps = {
  library: AuthLibrary;
  type: AuthLinkType;
  redirectSignInUrl: string;
  previewImg?: string;
  previewTitle?: string;
  PreviewDescription?: string;
  logoUrl?: string;
  register: any;
  errors: Record<string, { message?: string } | undefined>;
  handleSubmitOn: (provider: string) => void;
  handleSubmit: any;
  handleSubmitForm: (data: any) => void;
  showSignIn?: boolean;
  showSignOn?: boolean;
  isLoading?: boolean;
  title?: string;
  submitLabel?: string;
  googleLabel?: string;
  errorMessage?: string | null;
  variant: AuthVariant;
  className?: string;
};

const BasicSignUp = ({
  logoUrl = '',
  handleSubmitOn,
  handleSubmit,
  handleSubmitForm,
  register,
  errors,
  isLoading,
  library,
  type,
  redirectSignInUrl,
  PreviewDescription = '',
  previewTitle = '',
  previewImg = '',
  showSignIn = true,
  showSignOn = true,
  title = 'Create a new account',
  submitLabel = 'Sign Up',
  googleLabel = 'Sign Up with Google',
  errorMessage,
  variant,
  className,
}: BasicSignUpProps) => (
  <AuthShell
    variant={variant}
    className={className}
    previewImg={previewImg}
    previewTitle={previewTitle}
    PreviewDescription={PreviewDescription}
  >
    <div className="flex flex-col pt-8 md:px-2">
      {logoUrl ? (
        <a href="#" className="py-4">
          <img className="h-10 w-auto" src={logoUrl} alt="" />
        </a>
      ) : null}
      <p className="text-left text-3xl font-bold">{title}</p>
      {showSignOn ? (
        <>
          <button
            type="button"
            className="mt-8 flex items-center justify-center rounded-md border px-4 py-1 hover:bg-black hover:text-white"
            onClick={() => handleSubmitOn('google')}
          >
            <FcGoogle className="mr-2" />
            {googleLabel}
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
              or
            </div>
          </div>
        </>
      ) : null}
      <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col gap-4 pt-4">
          <Input2
            type="text"
            id="login-username"
            placeholder="First and Last Name"
            fullWidth
            {...register('username')}
            errorMsg={errors.username?.message}
          />
          <Input2
            type="email"
            id="login-email"
            placeholder="Email"
            fullWidth
            {...register('email')}
            errorMsg={errors.email?.message}
          />
          <Input2
            type="password"
            id="login-password"
            placeholder="Password"
            fullWidth
            {...register('password')}
            errorMsg={errors.password?.message}
          />
        </div>
        {errorMessage ? (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        ) : null}
        <Button variant="primary" color="primary" type="submit" fullWidth className="mt-6" disabled={isLoading}>
          {isLoading ? 'Creating account…' : submitLabel}
        </Button>
      </form>
      {showSignIn ? (
        <p className="py-8 text-center text-gray-600">
          Already have an account?{' '}
          <AuthTextLink library={library} type={type} href={redirectSignInUrl}>
            Sign In
          </AuthTextLink>
        </p>
      ) : null}
    </div>
  </AuthShell>
);

export default BasicSignUp;

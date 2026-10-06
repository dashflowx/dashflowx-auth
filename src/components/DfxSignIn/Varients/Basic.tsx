import { Button, Input2, TypographyComp } from '@dashflowx/core';
import { FcGoogle } from 'react-icons/fc';
import { AuthShell } from '../../shared/AuthShell';
import type { AuthChromeProps, AuthLinkType, AuthLibrary, AuthVariant } from '../../shared/types';

export type BasicSignInProps = AuthChromeProps & {
  library: AuthLibrary;
  type: AuthLinkType;
  forgetPasswordUrl: string;
  redirectSignupUrl: string;
  logoUrl: string;
  register: ReturnType<typeof import('react-hook-form').useForm>['register'] | any;
  errors: Record<string, { message?: string } | undefined>;
  handleSubmitOn: (provider: string) => void;
  handleSubmit: any;
  handleSubmitForm: (data: any) => void;
  showSignUp?: boolean;
  showSignOn?: boolean;
  showForgetPassword?: boolean;
  title?: string;
  submitLabel?: string;
  googleLabel?: string;
  errorMessage?: string | null;
  variant: AuthVariant;
};

const BasicSignIn = ({
  logoUrl,
  handleSubmitOn,
  handleSubmit,
  handleSubmitForm,
  register,
  errors,
  isLoading,
  library,
  type,
  forgetPasswordUrl,
  redirectSignupUrl,
  PreviewDescription = '',
  previewTitle = '',
  previewImg = '',
  showSignUp = true,
  showSignOn = true,
  showForgetPassword = true,
  title = 'Sign in to your account',
  submitLabel = 'Sign in',
  googleLabel = 'Log in with Google',
  errorMessage,
  variant,
  className,
}: BasicSignInProps) => {
  return (
    <AuthShell
      variant={variant}
      className={className}
      previewImg={previewImg}
      previewTitle={previewTitle}
      PreviewDescription={PreviewDescription}
    >
      <div className="flex flex-col pt-8 md:px-2 md:pt-0">
        {logoUrl ? (
          <a href="#" className="py-4 text-2xl font-semibold text-gray-900">
            <img className="h-10 w-auto" src={logoUrl} alt="" />
          </a>
        ) : null}
        {showSignOn ? (
          <>
            <p className="text-left text-3xl font-bold">{title}</p>
            <button
              type="button"
              className="mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2"
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
        ) : (
          <p className="text-left text-3xl font-bold">{title}</p>
        )}
        <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="flex flex-col pt-4">
            <Input2
              type="email"
              id="login-email"
              className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Email"
              fullWidth
              {...register('email')}
              errorMsg={errors.email?.message}
            />
          </div>
          <div className="mb-6 flex flex-col pt-4">
            <Input2
              type="password"
              id="login-password"
              className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Password"
              fullWidth
              {...register('password')}
              errorMsg={errors.password?.message}
            />
          </div>
          {errorMessage ? (
            <p className="mb-4 text-sm text-red-600" role="alert">
              {errorMessage}
            </p>
          ) : null}
          <Button
            variant="primary"
            color="primary"
            type="submit"
            className="w-full rounded-lg px-4 py-2 text-center text-base font-semibold shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? 'Signing in…' : submitLabel}
          </Button>
        </form>
        {showForgetPassword ? (
          <div className="my-6 flex items-center justify-between">
            {library === 'react' ? (
              <TypographyComp
                as={type}
                to={forgetPasswordUrl}
                className="text-sm font-thin text-primary-600 hover:underline dark:text-primary-500"
              >
                Forget Password?
              </TypographyComp>
            ) : (
              <TypographyComp
                as={type}
                href={forgetPasswordUrl}
                className="text-sm font-thin text-primary-600 hover:underline dark:text-primary-500"
              >
                Forget Password?
              </TypographyComp>
            )}
          </div>
        ) : null}
        {showSignUp ? (
          <div className="py-8 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Don&apos;t have an account?{' '}
              {library === 'react' ? (
                <TypographyComp
                  as={type}
                  to={redirectSignupUrl}
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  Sign Up
                </TypographyComp>
              ) : (
                <TypographyComp
                  as={type}
                  href={redirectSignupUrl}
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  Sign Up
                </TypographyComp>
              )}
            </p>
          </div>
        ) : null}
      </div>
    </AuthShell>
  );
};

export default BasicSignIn;

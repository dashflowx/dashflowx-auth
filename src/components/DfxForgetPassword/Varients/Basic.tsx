import { Button, Input2 } from '@dashflowx/core';
import { AuthShell } from '../../shared/AuthShell';
import { AuthTextLink } from '../../shared/fields';
import type { AuthLinkType, AuthLibrary, AuthVariant } from '../../shared/types';

export type BasicForgetPasswordProps = {
  library: AuthLibrary;
  type: AuthLinkType;
  redirectSignInUrl: string;
  previewImg?: string;
  previewTitle?: string;
  PreviewDescription?: string;
  register: any;
  errors: Record<string, { message?: string } | undefined>;
  handleSubmit: any;
  handleSubmitForm: (data: any) => void;
  showSignIn?: boolean;
  isLoading?: boolean;
  title?: string;
  description?: string;
  submitLabel?: string;
  statusMessage?: string | null;
  errorMessage?: string | null;
  variant: AuthVariant;
  className?: string;
};

const BasicForgetPassword = ({
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
  title = 'Forgot password?',
  description = "Don't worry we'll send you reset instructions.",
  submitLabel = 'Send reset email',
  statusMessage,
  errorMessage,
  variant,
  className,
}: BasicForgetPasswordProps) => (
  <AuthShell
    variant={variant}
    className={className}
    previewImg={previewImg}
    previewTitle={previewTitle}
    PreviewDescription={PreviewDescription}
  >
    <div className="rounded-xl bg-white p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800">{title}</h1>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
      <form className="mt-6 flex flex-col" onSubmit={handleSubmit(handleSubmitForm)}>
        <Input2
          type="email"
          id="login-email"
          placeholder="Email"
          fullWidth
          {...register('email')}
          errorMsg={errors.email?.message}
        />
        {statusMessage ? (
          <p className="mt-3 text-sm text-green-700" role="status">
            {statusMessage}
          </p>
        ) : null}
        {errorMessage ? (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        ) : null}
        <Button variant="primary" color="primary" type="submit" fullWidth className="mt-4" disabled={isLoading}>
          {isLoading ? 'Sending…' : submitLabel}
        </Button>
      </form>
      {showSignIn ? (
        <p className="py-8 text-center text-gray-600">
          Remember your password?{' '}
          <AuthTextLink library={library} type={type} href={redirectSignInUrl}>
            Sign in here
          </AuthTextLink>
        </p>
      ) : null}
    </div>
  </AuthShell>
);

export default BasicForgetPassword;

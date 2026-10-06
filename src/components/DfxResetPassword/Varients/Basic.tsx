import { Button, Input2 } from '@dashflowx/core';
import { AuthShell } from '../../shared/AuthShell';
import { AuthTextLink } from '../../shared/fields';
import type { AuthLinkType, AuthLibrary, AuthVariant } from '../../shared/types';

export type BasicPasswordProps = {
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
  submitLabel?: string;
  errorMessage?: string | null;
  variant: AuthVariant;
  className?: string;
};

const BasicPassword = ({
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
  title = 'Reset password?',
  submitLabel = 'Reset password',
  errorMessage,
  variant,
  className,
}: BasicPasswordProps) => (
  <AuthShell
    variant={variant}
    className={className}
    previewImg={previewImg}
    previewTitle={previewTitle}
    PreviewDescription={PreviewDescription}
  >
    <div className="rounded-xl bg-white p-4 sm:p-7">
      <h1 className="block text-center text-2xl font-bold text-gray-800">{title}</h1>
      <form className="mt-6 flex flex-col gap-3" onSubmit={handleSubmit(handleSubmitForm)}>
        <Input2
          type="password"
          id="login-newpassword"
          placeholder="New Password"
          fullWidth
          {...register('newpassword')}
          errorMsg={errors.newpassword?.message}
        />
        <Input2
          type="password"
          id="login-confirmpassword"
          placeholder="Confirm Password"
          fullWidth
          {...register('confirmpassword')}
          errorMsg={errors.confirmpassword?.message}
        />
        {errorMessage ? (
          <p className="text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        ) : null}
        <Button variant="primary" color="primary" type="submit" fullWidth disabled={isLoading}>
          {isLoading ? 'Saving…' : submitLabel}
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

export default BasicPassword;

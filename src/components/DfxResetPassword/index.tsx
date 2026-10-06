import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/Providers/AuthProvider';
import { passwordPairSchema, type PasswordPairValues } from '../shared/schemas';
import {
  resolveAuthVariant,
  type AuthChromeProps,
  type AuthLibrary,
  type AuthLinkType,
  type AuthVariant,
} from '../shared/types';
import BasicPassword from './Varients/Basic';

export type DfxResetPasswordProps = AuthChromeProps & {
  library?: AuthLibrary;
  type?: AuthLinkType;
  redirectSignInUrl?: string;
  handleResetPassword?: (data: { password: string }) => void;
  handleResetPasswordError?: (error: unknown) => void;
  showSignIn?: boolean;
  /** Action code from the email link. */
  oobCode?: string;
  title?: string;
  submitLabel?: string;
};

const VARIANTS: Record<AuthVariant, typeof BasicPassword> = {
  basic: BasicPassword,
  split: BasicPassword,
  card: BasicPassword,
  minimal: BasicPassword,
};

const DfxResetPassword = ({
  library = 'react',
  type = 'a',
  redirectSignInUrl = '/sign-in',
  previewImg = '',
  previewTitle = '',
  PreviewDescription = '',
  handleResetPassword,
  handleResetPasswordError,
  isLoading: isLoadingProp,
  variant,
  varient,
  showSignIn = true,
  oobCode = '',
  title,
  submitLabel,
  className,
}: DfxResetPasswordProps) => {
  const resolved = resolveAuthVariant(variant, varient);
  const View = VARIANTS[resolved] ?? VARIANTS.basic;
  const { resetPassword } = useAuth();
  const [busy, setBusy] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordPairValues>({
    defaultValues: { newpassword: '', confirmpassword: '' },
    resolver: zodResolver(passwordPairSchema),
  });

  const handleSubmitForm = async (data: PasswordPairValues) => {
    setBusy(true);
    setErrorMessage(null);
    try {
      const result = await resetPassword(oobCode, data.confirmpassword);
      if (result == null) throw new Error('Auth is not ready');
      handleResetPassword?.({ password: data.confirmpassword });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : String(err));
      handleResetPasswordError?.(err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <View
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      register={register}
      errors={errors}
      isLoading={isLoadingProp ?? busy}
      library={library}
      type={type}
      redirectSignInUrl={redirectSignInUrl}
      PreviewDescription={PreviewDescription}
      previewTitle={previewTitle}
      previewImg={previewImg}
      showSignIn={showSignIn}
      title={title}
      submitLabel={submitLabel}
      errorMessage={errorMessage}
      variant={resolved}
      className={className}
    />
  );
};

export { DfxResetPassword };

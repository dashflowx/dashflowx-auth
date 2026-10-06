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
import BasicPassword from '../DfxResetPassword/Varients/Basic';

export type DfxChangePasswordProps = AuthChromeProps & {
  library?: AuthLibrary;
  type?: AuthLinkType;
  redirectSignInUrl?: string;
  handleChangePassword?: (data: { password: string }) => void;
  handleChangePasswordError?: (error: unknown) => void;
  showSignIn?: boolean;
  title?: string;
  submitLabel?: string;
};

const VARIANTS: Record<AuthVariant, typeof BasicPassword> = {
  basic: BasicPassword,
  split: BasicPassword,
  card: BasicPassword,
  minimal: BasicPassword,
};

const DfxChangePassword = ({
  library = 'react',
  type = 'a',
  redirectSignInUrl = '/sign-in',
  handleChangePassword,
  handleChangePasswordError,
  isLoading: isLoadingProp,
  variant,
  varient,
  showSignIn = true,
  title = 'Change password',
  submitLabel = 'Change password',
  className,
}: DfxChangePasswordProps) => {
  const resolved = resolveAuthVariant(variant, varient);
  const View = VARIANTS[resolved] ?? VARIANTS.basic;
  const { changePassword } = useAuth();
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
      const result = await changePassword(data.confirmpassword);
      if (result == null) throw new Error('Auth is not ready');
      handleChangePassword?.({ password: data.confirmpassword });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : String(err));
      handleChangePasswordError?.(err);
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
      showSignIn={showSignIn}
      title={title}
      submitLabel={submitLabel}
      errorMessage={errorMessage}
      variant={resolved}
      className={className}
    />
  );
};

export { DfxChangePassword };

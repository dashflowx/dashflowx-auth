import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/Providers/AuthProvider';
import { signInSchema, type SignInFormValues } from '../shared/schemas';
import {
  resolveAuthVariant,
  type AuthChromeProps,
  type AuthLibrary,
  type AuthLinkType,
  type AuthVariant,
} from '../shared/types';
import BasicSignIn from './Varients/Basic';

export type DfxSignInProps = AuthChromeProps & {
  library?: AuthLibrary;
  type?: AuthLinkType;
  forgetPasswordUrl?: string;
  redirectSignupUrl?: string;
  handleSignIn?: (data: { email: string; password: string }) => void;
  handleSignInError?: (error: unknown) => void;
  handleSignOn?: (data: unknown) => void;
  handleSignOnError?: (error: unknown) => void;
  logoUrl?: string;
  showSignUp?: boolean;
  showSignOn?: boolean;
  showForgetPassword?: boolean;
  title?: string;
  submitLabel?: string;
  googleLabel?: string;
};

const VARIANT_MAP: Record<AuthVariant, typeof BasicSignIn> = {
  basic: BasicSignIn,
  split: BasicSignIn,
  card: BasicSignIn,
  minimal: BasicSignIn,
};

const DfxSignIn = ({
  library = 'react',
  type = 'a',
  forgetPasswordUrl = '/forgot-password',
  redirectSignupUrl = '/sign-up',
  previewImg = '',
  previewTitle = '',
  PreviewDescription = '',
  handleSignIn,
  handleSignInError,
  isLoading: isLoadingProp,
  handleSignOn,
  handleSignOnError,
  logoUrl = '',
  variant,
  varient,
  showSignUp = true,
  showSignOn = true,
  showForgetPassword = true,
  title,
  submitLabel,
  googleLabel,
  className,
}: DfxSignInProps) => {
  const resolved = resolveAuthVariant(variant, varient);
  const VariantView = VARIANT_MAP[resolved] ?? VARIANT_MAP.basic;
  const { login, signInWithGoogle } = useAuth();
  const [busy, setBusy] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isLoading = isLoadingProp ?? busy;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(signInSchema),
  });

  const handleSubmitForm = async (data: SignInFormValues) => {
    setBusy(true);
    setErrorMessage(null);
    try {
      const result = await login(data.email, data.password);
      if (result == null) throw new Error('Auth is not ready');
      handleSignIn?.({ email: data.email, password: data.password });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setErrorMessage(message);
      handleSignInError?.(err);
    } finally {
      setBusy(false);
    }
  };

  const handleSubmitOn = async (provider: string) => {
    if (provider !== 'google') return;
    setBusy(true);
    setErrorMessage(null);
    try {
      const user = await signInWithGoogle();
      handleSignOn?.(user);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setErrorMessage(message);
      handleSignOnError?.(error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <VariantView
      logoUrl={logoUrl}
      handleSubmitOn={handleSubmitOn}
      handleSubmit={handleSubmit}
      handleSubmitForm={handleSubmitForm}
      register={register}
      errors={errors}
      isLoading={isLoading}
      library={library}
      type={type}
      forgetPasswordUrl={forgetPasswordUrl}
      redirectSignupUrl={redirectSignupUrl}
      PreviewDescription={PreviewDescription}
      previewTitle={previewTitle}
      previewImg={previewImg}
      showSignUp={showSignUp}
      showSignOn={showSignOn}
      showForgetPassword={showForgetPassword}
      title={title}
      submitLabel={submitLabel}
      googleLabel={googleLabel}
      errorMessage={errorMessage}
      variant={resolved}
      className={className}
    />
  );
};

export { DfxSignIn };
export type { AuthVariant };

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/Providers/AuthProvider';
import { signUpSchema, type SignUpFormValues } from '../shared/schemas';
import {
  resolveAuthVariant,
  type AuthChromeProps,
  type AuthLibrary,
  type AuthLinkType,
  type AuthVariant,
} from '../shared/types';
import BasicSignUp from './Varients/Basic';

export type DfxSignUpProps = AuthChromeProps & {
  library?: AuthLibrary;
  type?: AuthLinkType;
  redirectSignInUrl?: string;
  handleSignUp?: (data: { username: string; email: string; password: string }) => void;
  handleSignUpError?: (error: unknown) => void;
  handleSignOn?: (data: unknown) => void;
  handleSignOnError?: (error: unknown) => void;
  logoUrl?: string;
  showSignIn?: boolean;
  showSignOn?: boolean;
  continueUrl?: string;
  title?: string;
  submitLabel?: string;
  googleLabel?: string;
};

const VARIANTS: Record<AuthVariant, typeof BasicSignUp> = {
  basic: BasicSignUp,
  split: BasicSignUp,
  card: BasicSignUp,
  minimal: BasicSignUp,
};

const DfxSignUp = ({
  library = 'react',
  type = 'a',
  redirectSignInUrl = '/sign-in',
  previewImg = '',
  previewTitle = '',
  PreviewDescription = '',
  handleSignUp,
  handleSignUpError,
  isLoading: isLoadingProp,
  handleSignOn,
  handleSignOnError,
  logoUrl = '',
  variant,
  varient,
  showSignIn = true,
  showSignOn = true,
  continueUrl = '',
  title,
  submitLabel,
  googleLabel,
  className,
}: DfxSignUpProps) => {
  const resolved = resolveAuthVariant(variant, varient);
  const View = VARIANTS[resolved] ?? VARIANTS.basic;
  const { signUp, signInWithGoogle } = useAuth();
  const [busy, setBusy] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: { username: '', email: '', password: '' },
    resolver: zodResolver(signUpSchema),
  });

  const handleSubmitForm = async (data: SignUpFormValues) => {
    setBusy(true);
    setErrorMessage(null);
    try {
      const result = await signUp(data.email, data.password, continueUrl);
      if (result == null) throw new Error('Auth is not ready');
      handleSignUp?.({
        username: data.username,
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setErrorMessage(message);
      handleSignUpError?.(err);
    } finally {
      setBusy(false);
    }
  };

  const handleSubmitOn = async (provider: string) => {
    if (provider !== 'google') return;
    setBusy(true);
    try {
      const user = await signInWithGoogle();
      handleSignOn?.(user);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : String(error));
      handleSignOnError?.(error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <View
      logoUrl={logoUrl}
      handleSubmitOn={handleSubmitOn}
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
      showSignOn={showSignOn}
      title={title}
      submitLabel={submitLabel}
      googleLabel={googleLabel}
      errorMessage={errorMessage}
      variant={resolved}
      className={className}
    />
  );
};

export { DfxSignUp };

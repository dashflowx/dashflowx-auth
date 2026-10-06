import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/Providers/AuthProvider';
import { emailSchema, type EmailFormValues } from '../shared/schemas';
import {
  resolveAuthVariant,
  type AuthChromeProps,
  type AuthLibrary,
  type AuthLinkType,
  type AuthVariant,
} from '../shared/types';
import BasicForgetPassword from './Varients/Basic';

export type DfxForgetPasswordProps = AuthChromeProps & {
  library?: AuthLibrary;
  type?: AuthLinkType;
  redirectSignInUrl?: string;
  showSignIn?: boolean;
  /** URL the user lands on after opening the reset email. */
  continueUrl?: string;
  handleForgetPassword?: () => void;
  handleForgetPasswordError?: (error: unknown) => void;
  title?: string;
  description?: string;
  submitLabel?: string;
};

const VARIANTS: Record<AuthVariant, typeof BasicForgetPassword> = {
  basic: BasicForgetPassword,
  split: BasicForgetPassword,
  card: BasicForgetPassword,
  minimal: BasicForgetPassword,
};

const DfxForgetPassword = ({
  library = 'react',
  type = 'a',
  redirectSignInUrl = '/sign-in',
  previewImg = '',
  previewTitle = '',
  PreviewDescription = '',
  isLoading: isLoadingProp,
  variant,
  varient,
  showSignIn = true,
  continueUrl = '',
  handleForgetPassword,
  handleForgetPasswordError,
  title,
  description,
  submitLabel,
  className,
}: DfxForgetPasswordProps) => {
  const resolved = resolveAuthVariant(variant, varient);
  const View = VARIANTS[resolved] ?? VARIANTS.basic;
  const { forgotPassword } = useAuth();
  const [busy, setBusy] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(emailSchema),
  });

  const handleSubmitForm = async (data: EmailFormValues) => {
    setBusy(true);
    setErrorMessage(null);
    setStatusMessage(null);
    try {
      const result = await forgotPassword(data.email, continueUrl);
      if (result == null) throw new Error('Auth is not ready');
      setStatusMessage('Email sent successfully');
      handleForgetPassword?.();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      setErrorMessage(message);
      handleForgetPasswordError?.(err);
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
      description={description}
      submitLabel={submitLabel}
      statusMessage={statusMessage}
      errorMessage={errorMessage}
      variant={resolved}
      className={className}
    />
  );
};

export { DfxForgetPassword };

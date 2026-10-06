import { useEffect, useState } from 'react';
import { useAuth } from '@/Providers/AuthProvider';
import { AuthShell } from '../shared/AuthShell';
import { AuthTextLink } from '../shared/fields';
import {
  resolveAuthVariant,
  type AuthChromeProps,
  type AuthLibrary,
  type AuthLinkType,
} from '../shared/types';

export type DfxVerifyEmailProps = AuthChromeProps & {
  oobCode?: string;
  library?: AuthLibrary;
  type?: AuthLinkType;
  redirectSignInUrl?: string;
  showSignIn?: boolean;
  handleEmailVerified?: () => void;
  handleEmailVerificationError?: (err: unknown) => void;
  title?: string;
  pendingLabel?: string;
  successLabel?: string;
};

const DfxVerifyEmail = ({
  oobCode = '',
  handleEmailVerified,
  handleEmailVerificationError,
  library = 'react',
  type = 'a',
  redirectSignInUrl = '/sign-in',
  previewImg = '',
  previewTitle = '',
  PreviewDescription = '',
  variant,
  varient,
  showSignIn = true,
  title = 'Verify email',
  pendingLabel = 'Verifying your email…',
  successLabel = 'Your email is verified.',
  className,
}: DfxVerifyEmailProps) => {
  const { handleVerifyEmail } = useAuth();
  const resolved = resolveAuthVariant(variant, varient);
  const [status, setStatus] = useState<'pending' | 'ok' | 'error'>('pending');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Re-run only when the action code changes. Callbacks are read from the latest render.
    let cancelled = false;
    const result = handleVerifyEmail(oobCode);
    if (result == null) {
      setStatus('error');
      setErrorMessage('Auth is not ready');
      handleEmailVerificationError?.(new Error('Auth is not ready'));
      return;
    }
    Promise.resolve(result)
      .then(() => {
        if (cancelled) return;
        setStatus('ok');
        handleEmailVerified?.();
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setStatus('error');
        setErrorMessage(err instanceof Error ? err.message : String(err));
        handleEmailVerificationError?.(err);
      });
    return () => {
      cancelled = true;
    };
  }, [oobCode]);

  return (
    <AuthShell
      variant={resolved}
      className={className}
      previewImg={previewImg}
      previewTitle={previewTitle}
      PreviewDescription={PreviewDescription}
    >
      <div className="rounded-xl bg-white p-6 text-center" data-auth-mode="verifyEmail" data-status={status}>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="mt-3 text-sm text-gray-600" role="status">
          {status === 'pending' ? pendingLabel : null}
          {status === 'ok' ? successLabel : null}
          {status === 'error' ? errorMessage : null}
        </p>
        {showSignIn ? (
          <p className="py-6 text-gray-600">
            <AuthTextLink library={library} type={type} href={redirectSignInUrl}>
              Back to sign in
            </AuthTextLink>
          </p>
        ) : null}
      </div>
    </AuthShell>
  );
};

export default DfxVerifyEmail;
export { DfxVerifyEmail };

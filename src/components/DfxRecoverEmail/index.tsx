import { AuthShell } from '../shared/AuthShell';
import { AuthTextLink } from '../shared/fields';
import {
  resolveAuthVariant,
  type AuthChromeProps,
  type AuthLibrary,
  type AuthLinkType,
} from '../shared/types';

export type DfxRecoverEmailProps = AuthChromeProps & {
  library?: AuthLibrary;
  type?: AuthLinkType;
  redirectSignInUrl?: string;
  email?: string;
  showSignIn?: boolean;
  title?: string;
  description?: string;
};

const DfxRecoverEmail = ({
  library = 'react',
  type = 'a',
  redirectSignInUrl = '/sign-in',
  email,
  previewImg = '',
  previewTitle = '',
  PreviewDescription = '',
  variant,
  varient,
  showSignIn = true,
  title = 'Recover email',
  description = 'If this address was changed recently, use the link in your email to restore it.',
  className,
}: DfxRecoverEmailProps) => {
  const resolved = resolveAuthVariant(variant, varient);
  return (
    <AuthShell
      variant={resolved}
      className={className}
      previewImg={previewImg}
      previewTitle={previewTitle}
      PreviewDescription={PreviewDescription}
    >
      <div className="rounded-xl bg-white p-6 text-center" data-auth-mode="recoverEmail">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        {email ? <p className="mt-4 text-sm font-medium text-gray-800">{email}</p> : null}
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

export default DfxRecoverEmail;
export { DfxRecoverEmail };

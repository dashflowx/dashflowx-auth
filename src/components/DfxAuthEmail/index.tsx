import { DfxRecoverEmail } from '../DfxRecoverEmail';
import { DfxResetPassword, type DfxResetPasswordProps } from '../DfxResetPassword';
import { DfxVerifyEmail, type DfxVerifyEmailProps } from '../DfxVerifyEmail';
import type { AuthEmailMode } from '../shared/types';

export type DfxAuthEmailProps = DfxResetPasswordProps &
  Pick<
    DfxVerifyEmailProps,
    'handleEmailVerified' | 'handleEmailVerificationError' | 'title' | 'pendingLabel' | 'successLabel'
  > & {
    mode?: AuthEmailMode | string;
    email?: string;
    recoverTitle?: string;
    recoverDescription?: string;
  };

const DfxAuthEmail = ({
  mode = 'resetPassword',
  email,
  recoverTitle,
  recoverDescription,
  handleEmailVerified,
  handleEmailVerificationError,
  title,
  pendingLabel,
  successLabel,
  ...rest
}: DfxAuthEmailProps) => {
  if (mode === 'recoverEmail') {
    return (
      <DfxRecoverEmail
        {...rest}
        email={email}
        title={recoverTitle}
        description={recoverDescription}
      />
    );
  }
  if (mode === 'verifyEmail') {
    return (
      <DfxVerifyEmail
        {...rest}
        handleEmailVerified={handleEmailVerified}
        handleEmailVerificationError={handleEmailVerificationError}
        title={title}
        pendingLabel={pendingLabel}
        successLabel={successLabel}
      />
    );
  }
  return <DfxResetPassword {...rest} title={title} />;
};

export { DfxAuthEmail };
export type { AuthEmailMode };

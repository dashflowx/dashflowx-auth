import { z } from 'zod';

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter a valid email' })
    .email({ message: 'Not a valid email' }),
});

export const passwordPairSchema = z
  .object({
    newpassword: z
      .string()
      .min(1, { message: 'Please enter a valid password' })
      .max(20, { message: 'Password must be less than 20 characters' }),
    confirmpassword: z
      .string()
      .min(1, { message: 'Please enter a valid password' })
      .max(20, { message: 'Password must be less than 20 characters' }),
  })
  .refine((data) => data.newpassword === data.confirmpassword, {
    message: 'Passwords do not match',
    path: ['confirmpassword'],
  });

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter a valid email' })
    .email({ message: 'Not a valid email' }),
  password: z
    .string()
    .min(1, { message: 'Please enter a valid password' })
    .max(20, { message: 'Password must be less than 20 characters' }),
});

export const signUpSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Please enter a valid Username' })
    .max(20, { message: 'Username must be less than 20 characters' }),
  email: z
    .string()
    .min(1, { message: 'Please enter a valid email' })
    .email({ message: 'Not a valid email' }),
  password: z
    .string()
    .min(1, { message: 'Please enter a valid password' })
    .max(20, { message: 'Password must be less than 20 characters' }),
});

export type EmailFormValues = z.infer<typeof emailSchema>;
export type PasswordPairValues = z.infer<typeof passwordPairSchema>;
export type SignInFormValues = z.infer<typeof signInSchema>;
export type SignUpFormValues = z.infer<typeof signUpSchema>;

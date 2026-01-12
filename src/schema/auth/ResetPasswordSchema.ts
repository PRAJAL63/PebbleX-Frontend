import { z } from 'zod';

const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Minimum password length should be more than 8')
      .max(50, 'Maximum password length should be less than 50'),
    confirmPassword: z
      .string()
      .min(1, 'Confirm Password is required')
      .min(8, 'Minimum password length should be more than 8')
      .max(50, 'Maximum password length should be less than 50'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export default ResetPasswordSchema;

import { z } from 'zod';

const RegisterSchema = z
  .object({
    full_name: z
      .string()
      .min(1, 'Full Name is required')
      .min(2, 'Minimum name length should be more than 2')
      .max(50, 'Maximum name length should be less than 50'),
    email: z.string().email('Email is required'),
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

export default RegisterSchema;

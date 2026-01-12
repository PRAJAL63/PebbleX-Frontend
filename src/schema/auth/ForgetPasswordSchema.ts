import { z } from 'zod';

const ForgetPasswordSchema = z.object({
  email: z.string().email('Email is required'),
});

export default ForgetPasswordSchema;

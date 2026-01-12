import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(2, 'Minimum password length is 2')
    .max(50, 'Maximum password length is 50'),
});

// export type LoginSchema = z.infer<typeof loginSchema>
export default loginSchema;

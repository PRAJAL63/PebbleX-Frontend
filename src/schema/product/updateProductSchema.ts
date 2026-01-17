import { z } from 'zod';

const updateProductSchema = z.object({
  price: z.number().positive('Price must be a positive number'),
  stock: z.number().int('Stock must be an integer').nonnegative('Stock cannot be negative'),
});

export default updateProductSchema;

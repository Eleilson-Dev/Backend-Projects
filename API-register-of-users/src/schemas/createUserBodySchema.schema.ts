import { z } from 'zod';

export const createUserBodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  work: z.string(),
  wage: z.string(),
});

const paramsSchema = z.object({
  id: z.string().uuid(),
});

const bodySchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
});

const querySchema = z.object({
  search: z.string().optional(),
});

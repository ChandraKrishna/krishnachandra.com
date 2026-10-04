import { z } from 'zod';
export const contactSchema = z.object({ name: z.string(), email: z.string().email(), phone: z.string().optional(), subject: z.string(), message: z.string(), consent: z.literal(true), website: z.string().max(0).optional() });

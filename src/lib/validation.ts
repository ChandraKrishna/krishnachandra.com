import { z } from 'zod';
export const contactSchema = z.object({ name: z.string().min(2), email: z.string().email(), company: z.string().optional(), subject: z.string().min(3), message: z.string().min(10), consent: z.literal(true), website: z.string().max(0).optional() });

import { z } from 'zod';

export const searchFormSchema = z.object({
  caseTitle: z
    .string()
    .min(2, {
      message: 'case title must be at least 2 characters.',
    })
    .optional(),
  dateRange: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .optional(),
});

export type SearchFormSchema = z.infer<typeof searchFormSchema>;

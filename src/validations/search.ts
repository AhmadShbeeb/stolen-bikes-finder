import { z } from 'zod';

export const searchFormSchema = z.object({
  caseTitle: z.string().optional(),
  dateRange: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine((data) => {
      if (data.from && !data.to) return false;
      if (data.from && data.to && data.from > data.to) return false;
      return true;
    })
    .optional(),
});

export type SearchFormSchema = z.infer<typeof searchFormSchema>;

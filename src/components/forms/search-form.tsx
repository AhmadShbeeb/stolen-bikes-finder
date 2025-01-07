'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { DateRangePickerForm } from '../ui/date-range-picker-form';
import { Form } from '../ui/form';
import { InputForm } from '../ui/input-form';

const searchFormSchema = z.object({
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

export function SearchForm() {
  const searchForm = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      caseTitle: '',
    },
  });

  function onSubmit(values: z.infer<typeof searchFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex w-1/4 flex-col justify-center gap-4">
      <p className="text-lg">Filters:</p>

      <Form {...searchForm}>
        <form onSubmit={searchForm.handleSubmit(onSubmit)} className="flex min-w-[210px] flex-col gap-8">
          <InputForm control={searchForm.control} name="caseTitle" placeholder="Case title" />
          <DateRangePickerForm control={searchForm.control} name="dateRange" placeholder="Date range" />

          <Button type="submit">
            Search <Search className="h-4 w-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
}

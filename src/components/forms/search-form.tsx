'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const router = useRouter();
  const createQueryString = useCreateQueryString();

  const searchForm = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      caseTitle: searchParams.get('caseTitle') ?? '',
      dateRange:
        searchParams.get('dateFrom') && searchParams.get('dateTo')
          ? {
              from: new Date(searchParams.get('dateFrom')!),
              to: new Date(searchParams.get('dateTo')!),
            }
          : undefined,
    },
  });

  function onSubmit(values: z.infer<typeof searchFormSchema>) {
    const queryString = createQueryString({
      caseTitle: values.caseTitle ?? null,
      dateFrom: values.dateRange?.from ? format(values.dateRange?.from, 'yyyy-MM-dd') : null,
      dateTo: values.dateRange?.to ? format(values.dateRange?.to, 'yyyy-MM-dd') : null,
    });

    router.push(`/bikes?${queryString}`);
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

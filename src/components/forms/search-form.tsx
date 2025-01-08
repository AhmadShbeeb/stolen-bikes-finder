'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { QUERY_KEYS } from '@/lib/constants';
import { SearchFormSchema, searchFormSchema } from '@/validations/search';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { DateRangePickerForm } from '../ui/date-range-picker-form';
import { Form } from '../ui/form';
import { InputForm } from '../ui/input-form';

export function SearchForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const createQueryString = useCreateQueryString();
  const queryClient = useQueryClient();

  const searchForm = useForm<SearchFormSchema>({
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
      distance: parseInt(searchParams.get('distance') || '10'),
    },
  });

  function onSubmit(values: SearchFormSchema) {
    const queryString = createQueryString({
      caseTitle: values.caseTitle ?? null,
      dateFrom: values.dateRange?.from ? format(values.dateRange?.from, 'yyyy-MM-dd') : null,
      dateTo: values.dateRange?.to ? format(values.dateRange?.to, 'yyyy-MM-dd') : null,
      page: null,
      perPage: null,
      distance: values.distance ? values.distance.toString() : null,
    });

    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.BIKE_SEARCH], exact: false });

    router.push(`/bikes?${queryString}`);
  }

  return (
    <div className="flex w-1/4 flex-col justify-center gap-4 rounded-xl border-2 p-2.5 md:w-1/6">
      <p className="border-b-2 pb-2 text-lg font-semibold">Filters:</p>

      <Form {...searchForm}>
        <form onSubmit={searchForm.handleSubmit(onSubmit)} className="flex min-w-[8rem] flex-col gap-8">
          <InputForm control={searchForm.control} name="caseTitle" label="Case title" />
          <DateRangePickerForm control={searchForm.control} name="dateRange" label="Date range" />
          <InputForm control={searchForm.control} name="distance" label="Distance" type="number" />

          <Button type="submit">
            Search <Search className="h-4 w-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
}

'use client';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import { DEFAULT_PAGE_SIZE } from '@/lib/constants';

interface PaginationProps {
  total: number;
  pushUrl: string;
}

export function Pagination({ total, pushUrl }: PaginationProps) {
  const createQueryString = useCreateQueryString();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('perPage') || DEFAULT_PAGE_SIZE.toString());
  const totalPages = Math.ceil(total / perPage);

  const handlePageChange = (newPage: number) => {
    const queryString = createQueryString({ page: newPage.toString() });
    router.push(`${pushUrl}?${queryString}`);
  };

  const handlePageSizeChange = (newSize: string) => {
    const queryString = createQueryString({
      perPage: newSize,
      page: '1', // Reset to first page when changing page size
    });
    router.push(`${pushUrl}?${queryString}`);
  };

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <Button
        variant="ghost"
        className="rounded border p-1"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        type="button"
      >
        {'<<'}
      </Button>
      <Button
        variant="ghost"
        className="rounded border p-1"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        type="button"
      >
        {'<'}
      </Button>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {currentPage} of {totalPages}
        </strong>
      </span>
      <Button
        variant="ghost"
        className="rounded border p-1"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        type="button"
      >
        {'>'}
      </Button>
      <Button
        variant="ghost"
        className="rounded border p-1"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        type="button"
      >
        {'>>'}
      </Button>

      <Select
        defaultValue={searchParams.get('perPage') || DEFAULT_PAGE_SIZE.toString()}
        onValueChange={handlePageSizeChange}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Page Size" />
        </SelectTrigger>
        <SelectContent>
          {[10, 20, 30, 40].map((pageSize) => (
            <SelectItem key={pageSize} value={pageSize.toString()}>
              Show {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

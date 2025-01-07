import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export function useCreateQueryString() {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (params: Record<string, string | null>) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      Object.entries(params).forEach(([key, value]) => {
        if (value === null) {
          current.delete(key);
        } else {
          current.set(key, value);
        }
      });

      return current.toString();
    },
    [searchParams],
  );

  return createQueryString;
}

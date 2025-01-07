'use client';

import { useSearchParams } from 'next/dist/client/components/navigation';

export function BikesGrid() {
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col gap-6">
      <p>{searchParams.get('caseTitle')}</p>
    </div>
  );
}

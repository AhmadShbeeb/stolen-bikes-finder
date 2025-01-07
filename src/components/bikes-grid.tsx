'use client';

import { useSearchParams } from 'next/dist/client/components/navigation';
import { BikeCard } from './bike-card';
import { Pagination } from './pagination';

export function BikesGrid() {
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col gap-6">
      {/* {bikes.total > 0 && <p className="mb-2 text-gray-600">{bikes.total} results found</p>}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bikes.items.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>

      {bikes.items.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No bikes found matching your filters.</p>
        </div>
      )}

      {bikes.total > 0 && <Pagination pushUrl="/bikes" total={bikes.total} />} */}
    </div>
  );
}

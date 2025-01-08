'use client';

import { useBikeSearchWithCount } from '@/hooks/useBikeSearchWithCount';
import { BikeCard } from './bike-card';
import { Error } from './error';
import { LoadingSpinner } from './loading-spinner';
import { NotFound } from './not-found';
import { Pagination } from './pagination';

export function BikesGrid() {
  const { data, isFetching, isError } = useBikeSearchWithCount();

  if (isError) return <Error />;

  if (!data || isFetching) return <LoadingSpinner />;

  if (data.bikes.length === 0) return <NotFound />;

  return (
    <div className="flex w-5/6 flex-col gap-2">
      <p className="text-gray-600">{data.count.proximity} results found</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>

      <Pagination pushUrl="/bikes" total={data.count.proximity} />
    </div>
  );
}

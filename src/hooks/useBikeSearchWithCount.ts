import { axios } from '@/lib/axios';
import { QUERY_KEYS, SEARCH_LOCATION } from '@/lib/constants';
import { BikeSearchCountResponse, BikeSearchResponse } from '@/types/bike';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

export const useBikeSearchWithCount = () => {
  const searchParams = useSearchParams();
  const params = {
    caseTitle: searchParams.get('caseTitle') || '',
    page: parseInt(searchParams.get('page') || '1'),
    perPage: parseInt(searchParams.get('perPage') || '10'),
    distance: parseInt(searchParams.get('distance') || '10'),
  };

  const queryBikeSearchWithCount = useQuery({
    queryKey: [QUERY_KEYS.BIKE_SEARCH, SEARCH_LOCATION, params],
    queryFn: async ({ signal }) => {
      const [bikesResponse, countResponse] = await Promise.all([
        axios.get<BikeSearchResponse>(
          `/search?query=${params.caseTitle}&page=${params.page}&per_page=${params.perPage}&location=${SEARCH_LOCATION}&stolenness=proximity&distance=${params.distance}`,
          { signal },
        ),
        axios.get<BikeSearchCountResponse>(
          `/search/count?query=${params.caseTitle}&location=${SEARCH_LOCATION}&stolenness=proximity&distance=${params.distance}`,
          { signal },
        ),
      ]);

      return { bikes: bikesResponse.data, count: countResponse.data };
    },
    select: (data) => ({ bikes: data.bikes.bikes, count: data.count }),
    enabled: !!params.caseTitle || !!params.page || !!params.perPage,
  });

  return queryBikeSearchWithCount;
};

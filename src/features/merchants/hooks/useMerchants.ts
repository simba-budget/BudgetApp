import { MerchantsClient } from '@api/clients';
import { MerchantsFilter, MerchantsSort } from '@api/clients/merchants/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectMerchantsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: MerchantsFilter,
  sort: MerchantsSort,
  lastUpdated: number,
) => {
  return ['merchants', filter, sort, lastUpdated];
};

interface Options {
  filter: MerchantsFilter;
  sort: MerchantsSort;
}

const useMerchants = (options: Options) => {
  const { filter, sort } = options;
  const lastUpdated = useAppSelector(selectMerchantsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated),
    queryFn: () => MerchantsClient.getMerchants({ filter, sort }),
  });

  return {
    merchants: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useMerchants;

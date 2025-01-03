import { MerchantsClient } from '@api/clients';
import { MerchantsFilter, MerchantsSort } from '@api/clients/merchants/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectMerchantsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: MerchantsFilter,
  sort: MerchantsSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['merchants', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: MerchantsFilter;
  sort: MerchantsSort;
  paging: Paging;
}

const useMerchants = (options: Options) => {
  const { filter, sort, paging } = options;
  const lastUpdated = useAppSelector(selectMerchantsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => MerchantsClient.getMerchants({ filter, sort, paging }),
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

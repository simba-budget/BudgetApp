import { MerchantsClient } from '@api/clients';
import { MerchantsFilter, MerchantsSort } from '@api/clients/merchants/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectMerchantsLastUpdated } from '../selectors';

import { getQueryKey } from './useMerchants';

interface Options {
  filter: MerchantsFilter;
  sort: MerchantsSort;
}

const useMerchantsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectMerchantsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return MerchantsClient.getMerchants({ filter, sort, paging });
  };

  const {
    isLoading,
    refetch,
    isRefetching,
    data,
    isFetchingNextPage: isFetchingMore,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated),
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
  });

  const { items, total } = parseData(data);

  return {
    merchants: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useMerchantsInfinity;

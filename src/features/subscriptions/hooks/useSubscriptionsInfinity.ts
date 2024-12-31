import { SubscriptionsClient } from '@api/clients';
import {
  SubscriptionsFilter,
  SubscriptionsSort,
} from '@api/clients/subscriptions/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectSubscriptionsLastUpdated } from '../selectors';

import { getQueryKey } from './useSubscriptions';

interface Options {
  filter: SubscriptionsFilter;
  sort: SubscriptionsSort;
}

const useSubscriptionsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectSubscriptionsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return SubscriptionsClient.getSubscriptions({ filter, sort, paging });
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
    subscriptions: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useSubscriptionsInfinity;

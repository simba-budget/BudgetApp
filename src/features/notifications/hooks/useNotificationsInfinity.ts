import { NotificationsClient } from '@api/clients';
import {
  NotificationsFilter,
  NotificationsSort,
} from '@api/clients/notifications/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectNotificationsLastUpdated } from '../selectors';

import { getQueryKey } from './useNotifications';

interface Options {
  filter: NotificationsFilter;
  sort: NotificationsSort;
}

const useNotificationsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectNotificationsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return NotificationsClient.getNotifications({ filter, sort, paging });
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
    notifications: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useNotificationsInfinity;

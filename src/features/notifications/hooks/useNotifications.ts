import { NotificationsClient } from '@api/clients';
import {
  NotificationsFilter,
  NotificationsSort,
} from '@api/clients/notifications/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectNotificationsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: NotificationsFilter,
  sort: NotificationsSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['notifications', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: NotificationsFilter;
  sort: NotificationsSort;
  paging: Paging;
}

const useNotifications = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectNotificationsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => NotificationsClient.getNotifications({ filter, sort, paging }),
  });

  return {
    notifications: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useNotifications;

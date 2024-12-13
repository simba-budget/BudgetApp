import { NotificationsClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectNotificationsLastUpdated } from '../selectors';

export const getQueryKey = (lastUpdated: number) => {
  return ['notifications', lastUpdated];
};

const useNotifications = () => {
  const lastUpdated = useAppSelector(selectNotificationsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated),
    queryFn: NotificationsClient.getNotifications,
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

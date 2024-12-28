import { SubscriptionsClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectSubscriptionsLastUpdated } from '../selectors';

export const getQueryKey = (id: number, lastUpdated: number) => {
  return ['subscription', id, lastUpdated];
};

const useSubscription = (id: number) => {
  const lastUpdated = useAppSelector(selectSubscriptionsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated, id),
    queryFn: () => SubscriptionsClient.getSubscription(id),
  });

  return {
    subscription: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useSubscription;

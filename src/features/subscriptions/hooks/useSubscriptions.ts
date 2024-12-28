import { SubscriptionsClient } from '@api/clients';
import { SubscriptionsFilter as ApiSubscriptionsFilter } from '@api/clients/subscriptions/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectSubscriptionsLastUpdated } from '../selectors';
import { SubscriptionsFilter } from '../types';

export const getQueryKey = (filter: ApiSubscriptionsFilter, lastUpdated: number) => {
  return ['subscriptions', filter, lastUpdated];
};

interface Options {
  accountId: number;
  filter: SubscriptionsFilter;
}

const useSubscriptions = (options: Options) => {
  const { filter, accountId } = options;
  const lastUpdated = useAppSelector(selectSubscriptionsLastUpdated);
  const apiFilter = { ...filter, accountId };

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(apiFilter, lastUpdated),
    queryFn: () => SubscriptionsClient.getSubscriptions({ filter: apiFilter }),
  });

  return {
    subscriptions: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useSubscriptions;

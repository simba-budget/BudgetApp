import { SubscriptionsClient } from '@api/clients';
import { SubscriptionsFilter } from '@api/clients/subscriptions/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectSubscriptionsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: SubscriptionsFilter,
  paging: Paging,
  lastUpdated: number,
) => {
  return ['subscriptions', filter, paging, lastUpdated];
};

interface Options {
  filter: SubscriptionsFilter;
  paging: Paging;
}

const useSubscriptions = ({ filter, paging }: Options) => {
  const lastUpdated = useAppSelector(selectSubscriptionsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, paging, lastUpdated),
    queryFn: () => SubscriptionsClient.getSubscriptions({ filter, paging }),
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

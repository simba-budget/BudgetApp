import { SubscriptionsClient } from '@api/clients';
import {
  SubscriptionsFilter,
  SubscriptionsSort,
} from '@api/clients/subscriptions/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectSubscriptionsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: SubscriptionsFilter,
  sort: SubscriptionsSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['subscriptions', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: SubscriptionsFilter;
  sort: SubscriptionsSort;
  paging?: Paging;
}

const useSubscriptions = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectSubscriptionsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => SubscriptionsClient.getSubscriptions({ filter, sort, paging }),
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

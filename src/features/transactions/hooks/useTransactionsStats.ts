import { TransactionsClient } from '@api/clients';
import { TransactionsStatsFilter } from '@api/clients/transactions/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectTransactionsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: TransactionsStatsFilter,
  lastUpdated: number,
) => {
  return ['transactions-stats', filter, lastUpdated];
};

const useTransaction = (filter: TransactionsStatsFilter) => {
  const lastUpdated = useAppSelector(selectTransactionsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, lastUpdated),
    queryFn: () => TransactionsClient.getTransactionsStats(filter),
  });

  return {
    stats: data?.data ?? [],
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useTransaction;

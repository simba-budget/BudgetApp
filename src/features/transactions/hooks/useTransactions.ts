import { TransactionsClient } from '@api/clients';
import { TransactionsFilter as ApiTransactionsFilter } from '@api/clients/transactions/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectTransactionsLastUpdated } from '../selectors';
import { TransactionsFilter } from '../types';

export const getQueryKey = (filter: ApiTransactionsFilter, lastUpdated: number) => {
  return ['transactions', filter, lastUpdated];
};

interface Options {
  accountId: number;
  filter: TransactionsFilter;
}

const useTransactions = (options: Options) => {
  const { filter, accountId } = options;
  const lastUpdated = useAppSelector(selectTransactionsLastUpdated);
  const apiFilter = { ...filter, accountId };

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(apiFilter, lastUpdated),
    queryFn: () => TransactionsClient.getTransactions({ filter: apiFilter }),
  });

  return {
    transactions: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useTransactions;

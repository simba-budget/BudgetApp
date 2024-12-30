import { TransactionsClient } from '@api/clients';
import { TransactionsFilter, TransactionsSort } from '@api/clients/transactions/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectTransactionsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: TransactionsFilter,
  sort: TransactionsSort,
  paging: Paging,
  lastUpdated: number,
) => {
  return ['transactions', filter, sort, paging, lastUpdated];
};

interface Options {
  filter: TransactionsFilter;
  sort: TransactionsSort;
  paging: Paging;
}

const useTransactions = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectTransactionsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, paging, lastUpdated),
    queryFn: () => TransactionsClient.getTransactions({ filter, sort, paging }),
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

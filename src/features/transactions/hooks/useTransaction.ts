import { TransactionsClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectTransactionsLastUpdated } from '../selectors';

export const getQueryKey = (id: number, lastUpdated: number) => {
  return ['transaction', id, lastUpdated];
};

const useTransaction = (id: number) => {
  const lastUpdated = useAppSelector(selectTransactionsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated, id),
    queryFn: () => TransactionsClient.getTransaction(id),
  });

  return {
    transaction: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useTransaction;

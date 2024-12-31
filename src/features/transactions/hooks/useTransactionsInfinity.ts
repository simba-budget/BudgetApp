import { TransactionsClient } from '@api/clients';
import {
  TransactionsFilter,
  TransactionsSort,
} from '@api/clients/transactions/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectTransactionsLastUpdated } from '../selectors';

import { getQueryKey } from './useTransactions';

interface Options {
  filter: TransactionsFilter;
  sort: TransactionsSort;
}

const useTransactionsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectTransactionsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return TransactionsClient.getTransactions({ filter, sort, paging });
  };

  const {
    isLoading,
    refetch,
    isRefetching,
    data,
    isFetchingNextPage: isFetchingMore,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated),
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
  });

  const { items, total } = parseData(data);

  return {
    transactions: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useTransactionsInfinity;

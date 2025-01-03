import { AccountsClient } from '@api/clients';
import { AccountsFilter, AccountsSort } from '@api/clients/accounts/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectAccountsLastUpdated } from '../selectors';

import { getQueryKey } from './useAccounts';

interface Options {
  filter: AccountsFilter;
  sort: AccountsSort;
}

const useAccountsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectAccountsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return AccountsClient.getAccounts({ filter, sort, paging });
  };

  const {
    isLoading,
    refetch,
    isRefetching,
    data,
    isFetchingNextPage: isFetchingMore,
    hasNextPage,
    fetchNextPage,
    error,
  } = useInfiniteQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated),
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
  });

  const { items, total } = parseData(data);

  return {
    accounts: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useAccountsInfinity;

import { ExternalAccountsClient } from '@api/clients';
import {
  ExternalAccountsFilter,
  ExternalAccountsSort,
} from '@api/clients/externalAccounts/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectExternalAccountsLastUpdated } from '../selectors';

import { getQueryKey } from './useExternalAccounts';

interface Options {
  filter: ExternalAccountsFilter;
  sort: ExternalAccountsSort;
}

const useExternalAccountsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectExternalAccountsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return ExternalAccountsClient.getExternalAccounts({ filter, sort, paging });
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
    externalAccounts: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useExternalAccountsInfinity;

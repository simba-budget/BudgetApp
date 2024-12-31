import { ContributionsClient } from '@api/clients';
import {
  ContributionsFilter,
  ContributionsSort,
} from '@api/clients/contributions/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectContributionsLastUpdated } from '../selectors';

import { getQueryKey } from './useContributions';

interface Options {
  filter: ContributionsFilter;
  sort: ContributionsSort;
}

const useContributionsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectContributionsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return ContributionsClient.getContributions({ filter, sort, paging });
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
    contributions: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useContributionsInfinity;

import { GoalsClient } from '@api/clients';
import { GoalsFilter, GoalsSort } from '@api/clients/goals/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectGoalsLastUpdated } from '../selectors';

import { getQueryKey } from './useGoals';

interface Options {
  filter: GoalsFilter;
  sort: GoalsSort;
}

const useGoalsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectGoalsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return GoalsClient.getGoals({ filter, sort, paging });
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
    goals: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useGoalsInfinity;

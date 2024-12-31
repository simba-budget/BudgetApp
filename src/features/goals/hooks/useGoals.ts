import { GoalsClient } from '@api/clients';
import { GoalsFilter, GoalsSort } from '@api/clients/goals/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectGoalsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: GoalsFilter,
  sort: GoalsSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['goals', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: GoalsFilter;
  sort: GoalsSort;
  paging: Paging;
}

const useGoals = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectGoalsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => GoalsClient.getGoals({ filter, sort, paging }),
  });

  return {
    goals: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useGoals;

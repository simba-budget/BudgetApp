import { GoalsClient } from '@api/clients';
import { GoalsFilter } from '@api/clients/goals/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectGoalsLastUpdated } from '../selectors';

export const getQueryKey = (filter: GoalsFilter, lastUpdated: number, paging?: Paging) => {
  return ['goals', filter, lastUpdated, paging];
};

interface Options {
  filter: GoalsFilter;
  paging: Paging;
}

const useGoals = ({ filter, paging }: Options) => {
  const lastUpdated = useAppSelector(selectGoalsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, lastUpdated, paging),
    queryFn: () => GoalsClient.getGoals({ filter, paging }),
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

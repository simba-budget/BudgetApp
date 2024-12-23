import { GoalsClient } from '@api/clients';
import { GoalsFilter as ApiGoalsFilter } from '@api/clients/goals/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectGoalsLastUpdated } from '../selectors';
import { GoalsFilter } from '../types';

export const getQueryKey = (filter: ApiGoalsFilter, lastUpdated: number) => {
  return ['goals', filter, lastUpdated];
};

interface Options {
  accountId: number;
  filter: GoalsFilter;
}

const useGoals = (options: Options) => {
  const { filter, accountId } = options;
  const lastUpdated = useAppSelector(selectGoalsLastUpdated);
  const apiFilter = { ...filter, accountId };

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(apiFilter, lastUpdated),
    queryFn: () => GoalsClient.getGoals({ filter: apiFilter }),
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

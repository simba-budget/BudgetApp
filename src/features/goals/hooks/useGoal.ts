import { GoalsClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectGoalsLastUpdated } from '../selectors';

export const getQueryKey = (id: number, lastUpdated: number) => {
  return ['goal', id, lastUpdated];
};

const useGoal = (id: number) => {
  const lastUpdated = useAppSelector(selectGoalsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated, id),
    queryFn: () => GoalsClient.getGoal(id),
  });

  return {
    goal: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useGoal;

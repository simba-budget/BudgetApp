import { ContributionsClient } from '@api/clients';
import { ContributionsFilter as ApiContributionsFilter } from '@api/clients/contributions/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectContributionsLastUpdated } from '../selectors';
import { ContributionsFilter } from '../types';

export const getQueryKey = (filter: ApiContributionsFilter, lastUpdated: number) => {
  return ['contributions', filter, lastUpdated];
};

interface Options {
  accountId: number;
  filter: ContributionsFilter;
}

const useContributions = (options: Options) => {
  const { filter, accountId } = options;
  const lastUpdated = useAppSelector(selectContributionsLastUpdated);
  const apiFilter = { ...filter, accountId };

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(apiFilter, lastUpdated),
    queryFn: () => ContributionsClient.getContributions({ filter: apiFilter }),
  });

  return {
    contributions: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useContributions;

import { ContributionsClient } from '@api/clients';
import {
  ContributionsFilter,
  ContributionsSort,
} from '@api/clients/contributions/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectContributionsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: ContributionsFilter,
  sort: ContributionsSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['contributions', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: ContributionsFilter;
  sort: ContributionsSort;
  paging: Paging;
}

const useContributions = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectContributionsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => ContributionsClient.getContributions({ filter, sort, paging }),
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

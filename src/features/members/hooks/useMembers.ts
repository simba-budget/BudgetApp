import { MembersClient } from '@api/clients';
import { MembersFilter, MembersSort } from '@api/clients/members/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectMembersLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: MembersFilter,
  sort: MembersSort,
  lastUpdated: number,
) => {
  return ['members', filter, sort, lastUpdated];
};

interface Options {
  filter: MembersFilter;
  sort: MembersSort;
}

const useMembers = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectMembersLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated),
    queryFn: () => MembersClient.getMembers({ filter, sort }),
  });

  return {
    members: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useMembers;

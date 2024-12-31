import { MembersClient } from '@api/clients';
import { MembersFilter, MembersSort } from '@api/clients/members/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectMembersLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: MembersFilter,
  sort: MembersSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['members', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: MembersFilter;
  sort: MembersSort;
  paging: Paging;
}

const useMembers = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectMembersLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => MembersClient.getMembers({ filter, sort, paging }),
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

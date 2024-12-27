import { MembersClient } from '@api/clients';
import { MembersFilter as ApiMembersFilter } from '@api/clients/members/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectMembersLastUpdated } from '../selectors';
import { MembersFilter } from '../types';

export const getQueryKey = (filter: ApiMembersFilter, lastUpdated: number) => {
  return ['members', filter, lastUpdated];
};

interface Options {
  accountId: number;
  filter: MembersFilter;
}

const useMembers = (options: Options) => {
  const { filter, accountId } = options;
  const lastUpdated = useAppSelector(selectMembersLastUpdated);
  const apiFilter = { ...filter, accountId };

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(apiFilter, lastUpdated),
    queryFn: () => MembersClient.getMembers({ filter: apiFilter }),
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

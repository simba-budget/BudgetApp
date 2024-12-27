import { MembersClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectMembersLastUpdated } from '../selectors';

export const getQueryKey = (id: number, lastUpdated: number) => {
  return ['member', id, lastUpdated];
};

const useMember = (id: number) => {
  const lastUpdated = useAppSelector(selectMembersLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated, id),
    queryFn: () => MembersClient.getMember(id),
  });

  return {
    member: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useMember;

import { InvitationsClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectInvitationsLastUpdated } from '../selectors';

export const getQueryKey = (id: number, lastUpdated: number) => {
  return ['invitation', id, lastUpdated];
};

const useInvitation = (id: number) => {
  const lastUpdated = useAppSelector(selectInvitationsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated, id),
    queryFn: () => InvitationsClient.getInvitation(id),
  });

  return {
    invitation: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useInvitation;

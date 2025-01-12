import { InvitationsClient } from '@api/clients';
import { InvitationsFilter, InvitationsSort } from '@api/clients/invitations/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectInvitationsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: InvitationsFilter,
  sort: InvitationsSort,
  lastUpdated: number,
) => {
  return ['invitations', filter, sort, lastUpdated];
};

interface Options {
  filter: InvitationsFilter;
  sort: InvitationsSort;
}

const useInvitations = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectInvitationsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated),
    queryFn: () => InvitationsClient.getInvitations({ filter, sort }),
  });

  return {
    invitations: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useInvitations;

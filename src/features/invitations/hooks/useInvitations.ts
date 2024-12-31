import { InvitationsClient } from '@api/clients';
import { InvitationsFilter, InvitationsSort } from '@api/clients/invitations/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectInvitationsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: InvitationsFilter,
  sort: InvitationsSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['invitations', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: InvitationsFilter;
  sort: InvitationsSort;
  paging: Paging;
}

const useInvitations = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectInvitationsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => InvitationsClient.getInvitations({ filter, sort, paging }),
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

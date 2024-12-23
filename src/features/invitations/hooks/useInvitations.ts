import { InvitationsClient } from '@api/clients';
import { InvitationsFilter as ApiInvitationsFilter } from '@api/clients/invitations/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectInvitationsLastUpdated } from '../selectors';
import { InvitationsFilter } from '../types';

export const getQueryKey = (filter: ApiInvitationsFilter, lastUpdated: number) => {
  return ['invitations', filter, lastUpdated];
};

interface Options {
  accountId: number;
  filter: InvitationsFilter;
}

const useInvitations = (options: Options) => {
  const { filter, accountId } = options;
  const lastUpdated = useAppSelector(selectInvitationsLastUpdated);
  const apiFilter = { ...filter, accountId };

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(apiFilter, lastUpdated),
    queryFn: () => InvitationsClient.getInvitations({ filter: apiFilter }),
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

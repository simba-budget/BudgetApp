import { InvitationsClient } from '@api/clients';
import { InvitationsFilter, InvitationsSort } from '@api/clients/invitations/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectInvitationsLastUpdated } from '../selectors';

import { getQueryKey } from './useInvitations';

interface Options {
  filter: InvitationsFilter;
  sort: InvitationsSort;
}

const useInvitationsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectInvitationsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return InvitationsClient.getInvitations({ filter, sort, paging });
  };

  const {
    isLoading,
    refetch,
    isRefetching,
    data,
    isFetchingNextPage: isFetchingMore,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated),
    queryFn,
    initialPageParam: 0,
    getNextPageParam,
  });

  const { items, total } = parseData(data);

  return {
    invitations: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useInvitationsInfinity;

import { MembersClient } from '@api/clients';
import { MembersFilter, MembersSort } from '@api/clients/members/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectMembersLastUpdated } from '../selectors';

import { getQueryKey } from './useMembers';

interface Options {
  filter: MembersFilter;
  sort: MembersSort;
}

const useMembersInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectMembersLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return MembersClient.getMembers({ filter, sort, paging });
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
    members: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useMembersInfinity;

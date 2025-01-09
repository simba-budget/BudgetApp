import { TagsClient } from '@api/clients';
import { TagsFilter, TagsSort } from '@api/clients/tags/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectTagsLastUpdated } from '../selectors';

import { getQueryKey } from './useTags';

interface Options {
  filter: TagsFilter;
  sort: TagsSort;
}

const useTagsInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectTagsLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return TagsClient.getTags({ filter, sort, paging });
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
    placeholderData: (prev) => prev,
  });

  const { items, total } = parseData(data);

  return {
    tags: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useTagsInfinity;

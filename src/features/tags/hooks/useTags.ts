import { TagsClient } from '@api/clients';
import { TagsFilter, TagsSort } from '@api/clients/tags/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectTagsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: TagsFilter,
  sort: TagsSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['tags', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: TagsFilter;
  sort: TagsSort;
  paging: Paging;
}

const useTags = (options: Options) => {
  const { filter, sort, paging } = options;
  const lastUpdated = useAppSelector(selectTagsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => TagsClient.getTags({ filter, sort, paging }),
  });

  return {
    tags: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useTags;

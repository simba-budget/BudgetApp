import { TagsClient } from '@api/clients';
import { TagsFilter as ApiTagsFilter } from '@api/clients/tags/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectTagsLastUpdated } from '../selectors';
import { TagsFilter } from '../types';

export const getQueryKey = (filter: ApiTagsFilter, lastUpdated: number) => {
  return ['tags', filter, lastUpdated];
};

interface Options {
  accountId: number;
  filter: TagsFilter;
}

const useTags = (options: Options) => {
  const { filter, accountId } = options;
  const lastUpdated = useAppSelector(selectTagsLastUpdated);
  const apiFilter = { ...filter, accountId };

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(apiFilter, lastUpdated),
    queryFn: () => TagsClient.getTags({ filter: apiFilter }),
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

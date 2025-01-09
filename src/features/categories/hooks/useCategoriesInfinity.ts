import { CategoriesClient } from '@api/clients';
import { CategoriesFilter, CategoriesSort } from '@api/clients/categories/types';
import { useAppSelector } from '@core/store/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getNextPageParam, getPaging, parseData } from '@utils/paging';

import { selectCategoriesLastUpdated } from '../selectors';

import { getQueryKey } from './useCategories';

interface Options {
  filter: CategoriesFilter;
  sort: CategoriesSort;
}

const useCategoriesInfinity = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectCategoriesLastUpdated);

  const queryFn = ({ pageParam }: { pageParam: number }) => {
    const paging = getPaging(pageParam);
    return CategoriesClient.getCategories({ filter, sort, paging });
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
    placeholderData: (prev) => prev,
    getNextPageParam,
  });

  const { items, total } = parseData(data);

  return {
    categories: items,
    total,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore: () => hasNextPage && fetchNextPage(),
  };
};

export default useCategoriesInfinity;

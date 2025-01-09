import { CategoriesClient } from '@api/clients';
import { CategoriesFilter, CategoriesSort } from '@api/clients/categories/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectCategoriesLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: CategoriesFilter,
  sort: CategoriesSort,
  lastUpdated: number,
) => {
  return ['categories', filter, sort, lastUpdated];
};

interface Options {
  filter: CategoriesFilter;
  sort: CategoriesSort;
}

const useCategories = ({ filter, sort }: Options) => {
  const lastUpdated = useAppSelector(selectCategoriesLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated),
    queryFn: () => CategoriesClient.getCategories({ filter, sort }),
    placeholderData: (prev) => prev,
  });

  return {
    categories: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useCategories;

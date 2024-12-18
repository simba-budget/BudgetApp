import { CategoriesClient } from '@api/clients';
import { CategoriesFilter } from '@api/clients/categories/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectCategoriesLastUpdated } from '../selectors';

export const getQueryKey = (filter: CategoriesFilter, lastUpdated: number) => {
  return ['categories', filter, lastUpdated];
};

interface Options {
  filter: CategoriesFilter;
}

const useCategories = (options: Options) => {
  const { filter } = options;
  const lastUpdated = useAppSelector(selectCategoriesLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, lastUpdated),
    queryFn: () => CategoriesClient.getCategories({ filter }),
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

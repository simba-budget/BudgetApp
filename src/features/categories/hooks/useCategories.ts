import { CategoriesClient } from '@api/clients';
import { CategoriesFilter as ApiCategoriesFilter } from '@api/clients/categories/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectCategoriesLastUpdated } from '../selectors';
import { CategoriesFilter } from '../types';

export const getQueryKey = (filter: ApiCategoriesFilter, lastUpdated: number) => {
  return ['categories', filter, lastUpdated];
};

interface Options {
  accountId: number;
  filter: CategoriesFilter;
}

const useCategories = (options: Options) => {
  const { filter, accountId } = options;
  const lastUpdated = useAppSelector(selectCategoriesLastUpdated);
  const apiFilter = { ...filter, accountId };

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(apiFilter, lastUpdated),
    queryFn: () => CategoriesClient.getCategories({ filter: apiFilter }),
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

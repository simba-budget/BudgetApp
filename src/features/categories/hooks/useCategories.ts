import { CategoriesClient } from '@api/clients';
import { CategoriesFilter, CategoriesSort } from '@api/clients/categories/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectCategoriesLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: CategoriesFilter,
  sort: CategoriesSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['categories', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: CategoriesFilter;
  sort: CategoriesSort;
  paging: Paging;
}

const useCategories = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectCategoriesLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => CategoriesClient.getCategories({ filter, sort, paging }),
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

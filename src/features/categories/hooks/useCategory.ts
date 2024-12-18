import { CategoriesClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectCategoriesLastUpdated } from '../selectors';

export const getQueryKey = (id: number, lastUpdated: number) => {
  return ['client', id, lastUpdated];
};

const useCategory = (id: number) => {
  const lastUpdated = useAppSelector(selectCategoriesLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated, id),
    queryFn: () => CategoriesClient.getCategory(id),
  });

  return {
    category: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useCategory;

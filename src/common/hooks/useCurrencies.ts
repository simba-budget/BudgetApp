import { CurrenciesClient } from '@api/clients';
import { CurrenciesFilter, CurrenciesSort } from '@api/clients/currencies/types';
import { useQuery } from '@tanstack/react-query';

export const getQueryKey = (filter: CurrenciesFilter, sort: CurrenciesSort) => {
  return ['currencies', filter, sort];
};

interface Options {
  filter: CurrenciesFilter;
  sort: CurrenciesSort;
}

const useCurrencies = ({ filter, sort }: Options) => {
  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort),
    queryFn: () => CurrenciesClient.getCurrencies({ filter, sort }),
  });

  return {
    currencies: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useCurrencies;

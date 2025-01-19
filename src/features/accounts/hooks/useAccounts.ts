import { AccountsClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectAccountsLastUpdated } from '../selectors';

export const getQueryKey = (lastUpdated: number) => {
  return ['accounts', lastUpdated];
};

const useAccounts = () => {
  const lastUpdated = useAppSelector(selectAccountsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated),
    queryFn: () => AccountsClient.getAccounts(),
  });

  return {
    accounts: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useAccounts;

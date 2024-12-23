import { AccountsClient } from '@api/clients';
import { AccountsFilter } from '@api/clients/accounts/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectAccountsLastUpdated } from '../selectors';

export const getQueryKey = (filter: AccountsFilter, lastUpdated: number) => {
  return ['accounts', filter, lastUpdated];
};

const useAccounts = (filter: AccountsFilter) => {
  const lastUpdated = useAppSelector(selectAccountsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, lastUpdated),
    queryFn: () => AccountsClient.getAccounts({ filter }),
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

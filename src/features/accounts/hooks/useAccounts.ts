import { AccountsClient } from '@api/clients';
import { AccountsFilter, AccountsSort } from '@api/clients/accounts/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectAccountsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: AccountsFilter,
  sort: AccountsSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['accounts', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: AccountsFilter;
  sort: AccountsSort;
  paging: Paging;
}

const useAccounts = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectAccountsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () => AccountsClient.getAccounts({ filter, sort, paging }),
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

import { AccountsClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectAccountsLastUpdated } from '../selectors';

export const getQueryKey = (id: number, lastUpdated: number) => {
  return ['account', id, lastUpdated];
};

const useAccount = (id: number) => {
  const lastUpdated = useAppSelector(selectAccountsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated, id),
    queryFn: () => AccountsClient.getAccount(id),
  });

  return {
    account: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useAccount;

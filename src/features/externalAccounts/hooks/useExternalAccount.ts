import { ExternalAccountsClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectExternalAccountsLastUpdated } from '../selectors';

export const getQueryKey = (id: number, lastUpdated: number) => {
  return ['externalAccount', id, lastUpdated];
};

const useExternalAccount = (id: number) => {
  const lastUpdated = useAppSelector(selectExternalAccountsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated, id),
    queryFn: () => ExternalAccountsClient.getExternalAccount(id),
  });

  return {
    externalAccount: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useExternalAccount;

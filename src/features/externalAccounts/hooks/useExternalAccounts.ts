import { ExternalAccountsClient } from '@api/clients';
import {
  ExternalAccountsFilter,
  ExternalAccountsSort,
} from '@api/clients/externalAccounts/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectExternalAccountsLastUpdated } from '../selectors';

export const getQueryKey = (
  filter: ExternalAccountsFilter,
  sort: ExternalAccountsSort,
  lastUpdated: number,
  paging?: Paging,
) => {
  return ['externalAccounts', filter, sort, lastUpdated, paging];
};

interface Options {
  filter: ExternalAccountsFilter;
  sort: ExternalAccountsSort;
  paging: Paging;
}

const useExternalAccounts = ({ filter, sort, paging }: Options) => {
  const lastUpdated = useAppSelector(selectExternalAccountsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(filter, sort, lastUpdated, paging),
    queryFn: () =>
      ExternalAccountsClient.getExternalAccounts({ filter, sort, paging }),
  });

  return {
    externalAccounts: data ? data.data : [],
    total: data?.total ?? 0,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useExternalAccounts;

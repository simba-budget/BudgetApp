import { MerchantsClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { useQuery } from '@tanstack/react-query';

import { selectMerchantsLastUpdated } from '../selectors';

export const getQueryKey = (id: number, lastUpdated: number) => {
  return ['merchant', id, lastUpdated];
};

const useMerchant = (id: number) => {
  const lastUpdated = useAppSelector(selectMerchantsLastUpdated);

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated, id),
    queryFn: () => MerchantsClient.getMerchant(id),
  });

  return {
    merchant: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useMerchant;

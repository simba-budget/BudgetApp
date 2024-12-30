import { ProfileClient } from '@api/clients';
import { useAppSelector } from '@core/store/store';
import { changeLanguage } from '@i18n/utils';
import { useQuery } from '@tanstack/react-query';

import { selectProfileLastUpdated } from '../selectors';

export const getQueryKey = (lastUpdated: number) => {
  return ['profile', lastUpdated];
};

const useProfile = () => {
  const lastUpdated = useAppSelector(selectProfileLastUpdated);

  const queryFn = async () => {
    const response = await ProfileClient.getProfile();
    await changeLanguage(response.data.locale);
    return response;
  };

  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(lastUpdated),
    queryFn,
  });

  return {
    profile: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useProfile;

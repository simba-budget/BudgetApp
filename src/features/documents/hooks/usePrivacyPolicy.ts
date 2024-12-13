import { DocumentsClient } from '@api/clients';
import { useQuery } from '@tanstack/react-query';

export const getQueryKey = () => {
  return ['privacy-policy'];
};

const usePrivacyPolicy = () => {
  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(),
    queryFn: DocumentsClient.getPrivacyPolicy,
  });

  return {
    privacyPolicy: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default usePrivacyPolicy;

import { DocumentsClient } from '@api/clients';
import { useQuery } from '@tanstack/react-query';

export const getQueryKey = () => {
  return ['terms-and-conditions'];
};

const useTermsAndConditions = () => {
  const { isLoading, refetch, isRefetching, data, isFetching } = useQuery({
    queryKey: getQueryKey(),
    queryFn: DocumentsClient.getTermsAndConditions,
  });

  return {
    termsAndConditions: data?.data ?? null,
    isLoading,
    isRefetching,
    refetch,
    isFetching,
  };
};

export default useTermsAndConditions;

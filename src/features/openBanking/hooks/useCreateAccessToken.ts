import { OpenBankingClient } from '@api/clients';
import { useMutation } from '@tanstack/react-query';

interface Options {
  onSuccess: () => void;
}

const useCreateAccessToken = (options: Options) => {
  const { onSuccess } = options;

  const { mutateAsync: createAccessToken, isPending: isSubmitting } = useMutation({
    mutationFn: OpenBankingClient.createAccessToken,
    onSuccess,
  });

  return { createAccessToken, isSubmitting };
};

export default useCreateAccessToken;

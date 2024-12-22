import { OpenBankingClient } from '@api/clients';
import { useMutation } from '@tanstack/react-query';

interface Options {
  onSuccess: (linkToken: string) => void;
}

const useCreateLinkToken = (options: Options) => {
  const { onSuccess } = options;

  const { mutateAsync: createLinkToken, isPending: isSubmitting } = useMutation({
    mutationFn: OpenBankingClient.createLinkToken,
    onSuccess: (response) => onSuccess(response.data.linkToken),
  });

  return { createLinkToken, isSubmitting };
};

export default useCreateLinkToken;

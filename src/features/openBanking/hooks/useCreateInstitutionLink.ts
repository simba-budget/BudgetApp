import { OpenBankingClient } from '@api/clients';
import { useMutation } from '@tanstack/react-query';

interface Options {
  onSuccess?: () => void;
}

const useCreateInstitutionLink = (options: Options = {}) => {
  const { onSuccess } = options;

  const { mutateAsync: createInstitutionLink, isPending: isSubmitting } = useMutation({
    mutationFn: OpenBankingClient.createInstitutionLink,
    onSuccess,
  });

  return { createInstitutionLink, isSubmitting };
};

export default useCreateInstitutionLink;

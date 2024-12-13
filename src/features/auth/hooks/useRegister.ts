import { AuthClient } from '@api/clients';
import { RegisterRequest } from '@api/clients/auth/types';
import { useMutation } from '@tanstack/react-query';

interface Options {
  onSuccess: (expirationDate: string, email: string) => void;
}

const useRegister = (options: Options) => {
  const { onSuccess } = options;

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: AuthClient.register,
    onSuccess: ({ expirationDate }, { email }) => onSuccess(expirationDate, email),
  });

  const register = (request: RegisterRequest) => {
    return mutateAsync(request);
  };

  return { register, isSubmitting };
};

export default useRegister;

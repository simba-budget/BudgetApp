import { AuthClient } from '@api/clients';
import { SendOtpRequest } from '@api/clients/auth/types';
import { useMutation } from '@tanstack/react-query';

interface Options {
  onSuccess: (expirationDate: string, email: string) => void;
}

const useSendOtp = (options: Options) => {
  const { onSuccess } = options;

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: AuthClient.sendOtp,
    onSuccess: ({ expirationDate }, { email }) => onSuccess(expirationDate, email),
  });

  const sendOtp = (request: SendOtpRequest) => {
    return mutateAsync(request);
  };

  return { sendOtp, isSubmitting };
};

export default useSendOtp;

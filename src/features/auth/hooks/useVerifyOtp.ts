import { AuthClient } from '@api/clients';
import { VerifyOtpRequest } from '@api/clients/auth/types';
import { useAppDispatch } from '@core/store/store';
import { useMutation } from '@tanstack/react-query';

import { loginAction } from '../actions';

export interface Options {
  onError?: () => void;
}

const useVerifyOtp = (email: string, { onError }: Options = {}) => {
  const dispatch = useAppDispatch();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: AuthClient.verifyOtp,
    onSuccess: (loggedUser) => dispatch(loginAction(loggedUser)),
    onError,
  });

  const verifyOtp = (request: Pick<VerifyOtpRequest, 'otp'>) => {
    return mutateAsync({ ...request, email });
  };

  return { verifyOtp, isSubmitting };
};

export default useVerifyOtp;

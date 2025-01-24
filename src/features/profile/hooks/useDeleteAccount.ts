import { ProfileClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { logoutAction } from '@features/auth/actions';
import { useMutation } from '@tanstack/react-query';

const useDeleteAccount = () => {
  const dispatch = useAppDispatch();

  const { mutateAsync: deleteAccount, isPending: isSubmitting } = useMutation({
    mutationFn: ProfileClient.deleteAccount,
    onSuccess: () => dispatch(logoutAction()),
  });

  return { deleteAccount, isSubmitting };
};

export default useDeleteAccount;

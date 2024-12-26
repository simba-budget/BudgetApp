import { InvitationsClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useInvitationsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateInvitations } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteInvitation = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useInvitationsTranslations();

  const { mutateAsync: deleteInvitation, isPending: isSubmitting } = useMutation({
    mutationFn: InvitationsClient.deleteInvitation,
    onSuccess: () => {
      showSuccessToast(t('Invitation is successfully deleted!'));
      dispatch(updateInvitations());
      onSuccess();
    },
  });

  return { deleteInvitation, isSubmitting };
};

export default useDeleteInvitation;

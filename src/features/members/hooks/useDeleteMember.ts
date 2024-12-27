import { MembersClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useMembersTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateMembers } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteMember = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useMembersTranslations();

  const { mutateAsync: deleteMember, isPending: isSubmitting } = useMutation({
    mutationFn: MembersClient.deleteMember,
    onSuccess: () => {
      showSuccessToast(t('Member is successfully deleted!'));
      dispatch(updateMembers());
      onSuccess();
    },
  });

  return { deleteMember, isSubmitting };
};

export default useDeleteMember;

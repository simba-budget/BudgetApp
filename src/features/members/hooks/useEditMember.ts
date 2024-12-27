import { MembersClient } from '@api/clients';
import { Member, SaveMemberRequest } from '@api/clients/members/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useMembersTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateMembers } from '../slice';

interface Options {
  onSuccess: (member: Member) => void;
}

const useEditMember = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useMembersTranslations();

  const mutationFn = ({ id, ...request }: SaveMemberRequest & { id: number }) => {
    return MembersClient.editMember(id, request);
  };

  const { mutateAsync: editMember, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Member is successfully updated!'));
      onSuccess(response.data);
      dispatch(updateMembers());
    },
  });

  return { editMember, isSubmitting };
};

export default useEditMember;

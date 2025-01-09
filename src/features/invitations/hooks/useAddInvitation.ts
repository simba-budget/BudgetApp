import { InvitationsClient } from '@api/clients';
import { Invitation } from '@api/clients/invitations/types';
import { useAppDispatch } from '@core/store/store';
import { useMutation } from '@tanstack/react-query';

import { updateInvitations } from '../slice';
import { SaveInvitationRequest } from '../types';

interface Options {
  accountId: number;
  onSuccess: (invitation: Invitation) => void;
}

const useAddInvitation = (options: Options) => {
  const { onSuccess, accountId } = options;
  const dispatch = useAppDispatch();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: InvitationsClient.addInvitation,
    onSuccess: (response) => {
      onSuccess(response.data);
      dispatch(updateInvitations());
    },
  });

  const addInvitation = (request: SaveInvitationRequest) => {
    return mutateAsync({ ...request, accountId });
  };

  return { addInvitation, isSubmitting };
};

export default useAddInvitation;

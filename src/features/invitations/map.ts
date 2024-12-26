import { Invitation } from '@api/clients/invitations/types';

import { SaveInvitationRequest } from './types';

export const mapSaveInvitationRequest = (
  invitation?: Invitation | null,
): SaveInvitationRequest => ({
  email: invitation?.email ?? '',
  role: invitation?.role ?? 'MEMBER',
});

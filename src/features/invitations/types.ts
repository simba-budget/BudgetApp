import {
  InvitationsFilter as ApiInvitationsFilter,
  SaveInvitationRequest as ApiSaveInvitationRequest,
} from '@api/clients/invitations/types';

export type InvitationsFilter = Omit<ApiInvitationsFilter, 'accountId'>;
export type SaveInvitationRequest = Omit<ApiSaveInvitationRequest, 'accountId'>;

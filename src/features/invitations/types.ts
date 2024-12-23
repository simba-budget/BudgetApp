import { InvitationsFilter as ApiInvitationsFilter } from '@api/clients/invitations/types';

export type InvitationsFilter = Omit<ApiInvitationsFilter, 'accountId'>;

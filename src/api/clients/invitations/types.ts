import { MemberRole } from '@api/clients/members/types';
import { BaseModel, ListRequest, Sort } from '@api/types';

export interface Invitation extends BaseModel {
  email: string;
  role: MemberRole;
  expiresAt: string;
}

export interface SaveInvitationRequest {
  email: string;
  role: MemberRole;
  accountId: number;
}

export interface InvitationsFilter {
  keyword?: string | null;
  accountId: number;
}

export type InvitationsSort = Sort<'email'>;
export type ListInvitationsRequest = ListRequest<InvitationsFilter, InvitationsSort>;

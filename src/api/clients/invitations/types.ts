import { MemberRole } from '@api/clients/members/types';
import { BaseModel } from '@api/types';

export interface Invitation extends BaseModel {
  email: string;
  role: MemberRole;
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

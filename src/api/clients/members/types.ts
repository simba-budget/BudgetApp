import { BaseModel } from '@api/types';

export type MemberRole = 'OWNER' | 'MEMBER';

export interface Member extends BaseModel {
  email: string;
  firstName: string;
  lastName: string;
  role: MemberRole;
}

export interface SaveMemberRequest {
  role: MemberRole;
  accountId: number;
}

export interface MembersFilter {
  keyword?: string | null;
  accountId: number;
  roles?: MemberRole[] | null;
}

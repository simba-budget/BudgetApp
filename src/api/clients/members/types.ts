import { BaseModel, ListRequest, Sort } from '@api/types';

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

export type MembersSort = Sort<'email' | 'fullName'>;
export type ListMembersRequest = ListRequest<MembersFilter, MembersSort>;

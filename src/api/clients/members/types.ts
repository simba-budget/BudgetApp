import { BaseModel, ListRequest, Sort } from '@api/types';

export type MemberRole = 'OWNER' | 'MEMBER';

export interface Member extends BaseModel {
  email: string;
  firstName: string;
  lastName: string;
  roles: MemberRole[];
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

export type MembersSort = Sort<'createdAt'>;
export type ListMembersRequest = ListRequest<MembersFilter, MembersSort>;

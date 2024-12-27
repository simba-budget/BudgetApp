import {
  MembersFilter as ApiMembersFilter,
  SaveMemberRequest as ApiSaveMemberRequest,
} from '@api/clients/members/types';

export type MembersFilter = Omit<ApiMembersFilter, 'accountId'>;
export type SaveMemberRequest = Omit<ApiSaveMemberRequest, 'accountId'>;

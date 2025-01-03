import { Member } from '@api/clients/members/types';

import { SaveMemberRequest } from './types';

export const mapSaveMemberRequest = (member?: Member | null): SaveMemberRequest => ({
  role: member?.roles[0] ?? 'MEMBER',
});

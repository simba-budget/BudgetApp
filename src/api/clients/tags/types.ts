import { BaseModel } from '@api/types';

import { Member } from '../members/types';

export interface Tag extends BaseModel {
  name: string;
  createdBy: Member;
}

export interface SaveTagRequest {
  name: string;
  accountId: number;
}

export interface TagsFilter {
  keyword?: string | null;
  accountId: number;
}

import { BaseModel, ListRequest, Sort } from '@api/types';

export interface Tag extends BaseModel {
  name: string;
}

export interface SaveTagRequest {
  name: string;
  accountId: number;
}

export interface TagsFilter {
  keyword?: string | null;
  accountId: number;
}

export type TagsSort = Sort<'name'>;
export type ListTagsRequest = ListRequest<TagsFilter, TagsSort>;

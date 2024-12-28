import {
  SaveTagRequest as ApiSaveTagRequest,
  TagsFilter as ApiTagsFilter,
} from '@api/clients/tags/types';

export type TagsFilter = Omit<ApiTagsFilter, 'accountId'>;
export type SaveTagRequest = Omit<ApiSaveTagRequest, 'accountId'>;

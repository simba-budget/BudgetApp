import { Tag } from '@api/clients/tags/types';

import { SaveTagRequest } from './types';

export const mapSaveTagRequest = (tag?: Tag | null): SaveTagRequest => ({
  name: tag?.name ?? '',
});

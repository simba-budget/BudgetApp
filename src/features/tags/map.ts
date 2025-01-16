import { Tag } from '@api/clients/tags/types';
import { SelectOption } from '@common/components/Select';

import { SaveTagRequest } from './types';

export const mapSaveTagRequest = (tag?: Tag | null): SaveTagRequest => ({
  name: tag?.name ?? '',
});

export const mapTagToOption = (tag: Tag): SelectOption<number> => ({
  key: tag.id.toString(),
  value: tag.id,
  label: tag.name,
  iconName: 'card',
});

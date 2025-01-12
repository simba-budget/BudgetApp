import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useTagsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { TagForm } from '../components';
import { useEditTag, useTag, useTagForm } from '../hooks';
import { mapSaveTagRequest } from '../map';
import { SaveTagRequest } from '../types';

export interface TagEditProps {
  id: number;
}

const TagEdit = ({ id }: TagEditProps) => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { pop } = useNavigation<RootNavigation>();
  const { t } = useTagsTranslations();
  const { tag, isLoading } = useTag(id);
  const { handleSubmit, control, reset, isValid } = useTagForm();
  const { editTag, isSubmitting } = useEditTag({ onSuccess: () => pop(2) });

  const handleOnSubmit = (request: SaveTagRequest) => {
    return editTag({ id, ...request, accountId });
  };

  useEffect(() => {
    if (tag) reset(mapSaveTagRequest(tag));
  }, [tag, reset]);

  return (
    <TagForm
      isValid={isValid}
      title={t('Edit Tag')}
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading}
    />
  );
};

export default TagEdit;

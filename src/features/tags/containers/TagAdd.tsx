import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useTagsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { TagForm } from '../components';
import { useAddTag, useTagForm } from '../hooks';

const TagAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<RootNavigation>();
  const { t } = useTagsTranslations();
  const { handleSubmit, control, isValid } = useTagForm();
  const { addTag, isSubmitting } = useAddTag({ onSuccess: goBack, accountId });

  return (
    <TagForm
      isValid={isValid}
      title={t('Create Tag')}
      onSubmit={handleSubmit(addTag)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default TagAdd;

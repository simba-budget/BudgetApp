import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { TagForm } from '../components';
import { useAddTag, useTagForm } from '../hooks';

const TagAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<RootNavigation>();
  const { handleSubmit, control } = useTagForm();
  const { addTag, isSubmitting } = useAddTag({ onSuccess: goBack, accountId });

  return (
    <TagForm
      onSubmit={handleSubmit(addTag)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default TagAdd;

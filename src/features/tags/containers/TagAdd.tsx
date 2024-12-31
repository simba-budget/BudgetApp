import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { AccountNavigation } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { TagForm } from '../components';
import { useAddTag, useTagForm } from '../hooks';

const TagAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<AccountNavigation>();
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

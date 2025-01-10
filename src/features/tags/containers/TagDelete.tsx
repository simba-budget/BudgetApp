import { Confirmation } from '@common/components';
import { useTagsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { useDeleteTag } from '../hooks';

export interface TagDeleteProps {
  id: number;
}

const TagDelete = ({ id }: TagDeleteProps) => {
  const { goBack, pop } = useNavigation<RootNavigation>();
  const { t } = useTagsTranslations();
  const { deleteTag, isSubmitting } = useDeleteTag({ onSuccess: () => pop(2) });

  return (
    <Confirmation
      type="danger"
      onClose={goBack}
      onConfirm={() => deleteTag(id)}
      title={t('Delete Confirmation')}
      isSubmitting={isSubmitting}
      confirmText={t('Delete')}
      description={t('Are you sure that you want to delete this tag?')}
    />
  );
};

export default TagDelete;

import { Confirmation } from '@common/v2/components';
import { useCategoriesTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { useDeleteCategory } from '../hooks';

export interface CategoryDeleteProps {
  id: number;
}

const CategoryDelete = ({ id }: CategoryDeleteProps) => {
  const { goBack, pop } = useNavigation<RootNavigation>();
  const { t } = useCategoriesTranslations();

  const { deleteCategory, isSubmitting } = useDeleteCategory({
    onSuccess: () => pop(2),
  });

  return (
    <Confirmation
      type="danger"
      onClose={goBack}
      onConfirm={() => deleteCategory(id)}
      title={t('Delete Confirmation')}
      isSubmitting={isSubmitting}
      confirmText={t('Delete')}
      description={t('Are you sure that you want to delete this category?')}
    />
  );
};

export default CategoryDelete;

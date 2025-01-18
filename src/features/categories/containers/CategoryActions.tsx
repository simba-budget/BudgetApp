import { Actions } from '@common/components';
import { ActionItem } from '@common/components/Actions';
import { useCategoriesTranslations } from '@i18n/hooks';
import {
  categoryDeleteRoute,
  categoryEditRoute,
  categoryRoute,
  RootNavigation,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';

export interface CategoryActionsProps {
  id: number;
}

const CategoryActions = ({ id }: CategoryActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useCategoriesTranslations();

  const items = useMemo<ActionItem[]>(
    () => [
      {
        title: t('View'),
        iconName: 'eye',
        description: t('View category details'),
        onPress: () => {
          navigation.goBack();
          setTimeout(() => navigation.replace(categoryRoute, { id }));
        },
      },
      {
        title: t('Edit'),
        iconName: 'edit',
        description: t('Edit category details'),
        onPress: () => navigation.push(categoryEditRoute, { id }),
      },
      {
        title: t('Delete'),
        iconName: 'delete',
        description: t('Delete category'),
        onPress: () => navigation.push(categoryDeleteRoute, { id }),
      },
    ],
    [t, navigation, id],
  );

  return <Actions items={items} title={t('Category Actions')} />;
};

export default CategoryActions;

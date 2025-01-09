import { Action, Text } from '@common/v2/components';
import { ActionItem } from '@common/v2/components/Action';
import { useCategoriesTranslations } from '@i18n/hooks';
import {
  categoryDeleteRoute,
  categoryEditRoute,
  categoryRoute,
  RootNavigation,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { gap, margin, padding } from '@styles/lightTheme';
import React, { useMemo } from 'react';
import { View } from 'react-native';

export interface CategoryActionsProps {
  id: number;
}

const CategoryActions = ({ id }: CategoryActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useCategoriesTranslations();

  const actionItems = useMemo<ActionItem[]>(
    () => [
      {
        title: t('View'),
        iconName: 'eye',
        description: t('View category details'),
        onPress: () => navigation.replace(categoryRoute, { id }),
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

  return (
    <View
      style={[padding('horizontal')('m'), padding('top')('m'), gap('row')('xs')]}>
      <Text
        style={margin('bottom')('s')}
        textAlign="center"
        color="primary"
        size="m"
        weight="semiBold">
        {t('Category Actions')}
      </Text>
      {actionItems.map((item, index) => (
        <Action key={index} item={item} />
      ))}
    </View>
  );
};

export default CategoryActions;

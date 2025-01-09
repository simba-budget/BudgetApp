import { Action, Text } from '@common/v2/components';
import { ActionItem } from '@common/v2/components/Action';
import { useTagsTranslations } from '@i18n/hooks';
import {
  RootNavigation,
  tagDeleteRoute,
  tagEditRoute,
  tagRoute,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { gap, margin, padding } from '@styles/lightTheme';
import React, { useMemo } from 'react';
import { View } from 'react-native';

export interface TagActionsProps {
  id: number;
}

const TagActions = ({ id }: TagActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useTagsTranslations();

  const actionItems = useMemo<ActionItem[]>(
    () => [
      {
        title: t('View'),
        iconName: 'eye',
        description: t('View tag details'),
        onPress: () => navigation.replace(tagRoute, { id }),
      },
      {
        title: t('Edit'),
        iconName: 'edit',
        description: t('Edit tag details'),
        onPress: () => navigation.push(tagEditRoute, { id }),
      },
      {
        title: t('Delete'),
        iconName: 'delete',
        description: t('Delete tag'),
        onPress: () => navigation.push(tagDeleteRoute, { id }),
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
        {t('Tag Actions')}
      </Text>
      {actionItems.map((item, index) => (
        <Action key={index} item={item} />
      ))}
    </View>
  );
};

export default TagActions;

import { Action, Text } from '@common/v2/components';
import { ActionItem } from '@common/v2/components/Action';
import { useGoalsTranslations } from '@i18n/hooks';
import {
  goalDeleteRoute,
  goalEditRoute,
  goalRoute,
  RootNavigation,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { gap, margin, padding } from '@styles/lightTheme';
import React, { useMemo } from 'react';
import { View } from 'react-native';

export interface GoalActionsProps {
  id: number;
}

const GoalActions = ({ id }: GoalActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useGoalsTranslations();

  const actionItems = useMemo<ActionItem[]>(
    () => [
      {
        title: t('View'),
        iconName: 'eye',
        description: t('View goal details'),
        onPress: () => {
          navigation.pop();
          setTimeout(() => navigation.navigate(goalRoute, { id }));
        },
      },
      {
        title: t('Edit'),
        iconName: 'edit',
        description: t('Edit goal details'),
        onPress: () => navigation.push(goalEditRoute, { id }),
      },
      {
        title: t('Delete'),
        iconName: 'delete',
        description: t('Delete goal'),
        onPress: () => navigation.push(goalDeleteRoute, { id }),
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
        {t('Goal Actions')}
      </Text>
      {actionItems.map((item, index) => (
        <Action key={index} item={item} />
      ))}
    </View>
  );
};

export default GoalActions;

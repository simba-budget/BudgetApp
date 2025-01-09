import { Actions } from '@common/v2/components';
import { ActionItem } from '@common/v2/components/Actions';
import { useGoalsTranslations } from '@i18n/hooks';
import {
  goalDeleteRoute,
  goalEditRoute,
  goalRoute,
  RootNavigation,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';

export interface GoalActionsProps {
  id: number;
}

const GoalActions = ({ id }: GoalActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useGoalsTranslations();

  const items = useMemo<ActionItem[]>(
    () => [
      {
        title: t('View'),
        iconName: 'eye',
        description: t('View goal details'),
        onPress: () => {
          navigation.goBack();
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

  return <Actions items={items} title={t('Goal Actions')} />;
};

export default GoalActions;

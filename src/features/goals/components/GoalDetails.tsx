import { Goal } from '@api/clients/goals/types';
import { Button } from '@common/v2/components';
import { Text } from '@common/v2/components';
import { useGoalsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';

export interface GoalDetailsProps {
  style?: StyleProp<ViewStyle>;
  goal: Goal | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onContributionsPress: () => void;
  onEditPress: () => void;
}

const GoalDetails = ({
  goal,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
  onContributionsPress,
  onEditPress,
}: GoalDetailsProps) => {
  const { t } = useGoalsTranslations();

  return (
    <ScrollView
      style={style}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={isLoading || isRefreshing}
        />
      }
      contentContainerStyle={padding('full')('m')}>
      <Text>{JSON.stringify(goal, null, 2)}</Text>
      <Button style={margin('top')('m')} onPress={onEditPress} title={t('Edit')} />
      <Button
        style={margin('top')('m')}
        onPress={onContributionsPress}
        title={t('Contributions')}
      />
    </ScrollView>
  );
};

export default GoalDetails;

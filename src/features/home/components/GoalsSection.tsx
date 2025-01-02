import { Goal } from '@api/clients/goals/types';
import { Text } from '@common/v2/components';
import { GoalsListItem } from '@features/goals/components';
import { useHomeTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding, sizes } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';

export interface GoalsSectionProps {
  style?: StyleProp<ViewStyle>;
  total: number;
  goals: Goal[];
  onGoalPress: (goal: Goal) => void;
  onViewAllPress: () => void;
}

const GoalsSection = ({
  style,
  total,
  onGoalPress,
  goals,
  onViewAllPress,
}: GoalsSectionProps) => {
  const { t } = useHomeTranslations();
  const { width } = useWindowDimensions();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Goal>) => (
      <GoalsListItem
        style={{ width: width - sizes.xxl }}
        onPress={() => onGoalPress(item)}
        goal={item}
      />
    ),
    [onGoalPress],
  );

  return (
    <View style={[gap('row')('s'), style]}>
      <View style={[rowCenter, padding('horizontal')('m')]}>
        <Text style={flex1} color="primary" size="m" weight="semiBold">
          {t('Goals')}
        </Text>
        <TouchableOpacity
          style={[rowCenter, gap('column')('xxs')]}
          onPress={onViewAllPress}>
          <Text color="tertiary" size="s" weight="bold">
            {`${t('See All')} (${total})`}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={[gap('column')('m'), padding('horizontal')('m')]}
        pagingEnabled
        keyExtractor={(goal) => goal.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={goals}
        renderItem={renderItem}
      />
    </View>
  );
};

export default GoalsSection;

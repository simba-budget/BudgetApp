import { Goal } from '@api/clients/goals/types';
import { SkeletonsList, Text } from '@common/components';
import {
  GoalsEmpty,
  GoalsListItem,
  GoalsListItemSkeleton,
} from '@features/goals/components';
import { useHomeTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap, margin, padding, sizes } from '@styles/lightTheme';
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
  onGoalAddPress: () => void;
  onViewAllPress: () => void;
  isLoading: boolean;
}

const GoalsSection = ({
  style,
  total,
  onGoalAddPress,
  goals,
  onViewAllPress,
  isLoading,
}: GoalsSectionProps) => {
  const { t } = useHomeTranslations();
  const { width } = useWindowDimensions();
  const isGoalsEmpty = !isLoading && goals.length === 0 && !isLoading;

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Goal>) => (
      <GoalsListItem
        style={{ width: width - (goals.length > 1 ? sizes.xxl : sizes.xl) }}
        goal={item}
      />
    ),
    [width, goals.length],
  );

  return (
    <View style={style}>
      <View style={[rowCenter, padding('horizontal')('m'), margin('bottom')('xs')]}>
        <Text style={flex1} color="primary" size="s" weight="semiBold">
          {t('Recent Goals')}
        </Text>
        {!isGoalsEmpty && (
          <TouchableOpacity
            style={[rowCenter, gap('column')('xxs')]}
            onPress={onViewAllPress}>
            <Text color="tertiary" size="s" weight="medium">
              {`${t('See All')} (${total})`}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {isGoalsEmpty ? (
        <View style={padding('horizontal')('m')}>
          <GoalsEmpty onAddPress={onGoalAddPress} />
        </View>
      ) : isLoading ? (
        <SkeletonsList itemsCount={1} ItemComponent={GoalsListItemSkeleton} />
      ) : (
        <FlatList
          scrollEnabled={goals.length > 1}
          contentContainerStyle={[gap('column')('s'), padding('horizontal')('m')]}
          pagingEnabled
          keyExtractor={(goal) => goal.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={goals}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default GoalsSection;

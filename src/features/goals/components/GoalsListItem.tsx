import { Goal } from '@api/clients/goals/types';
import { IconButton, ProgressBar, Text } from '@common/components';
import {
  goalActionsRoute,
  goalRoute,
  RootNavigation,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatPrice } from '@utils/price';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface GoalsListItemProps {
  style?: StyleProp<ViewStyle>;
  goal: Goal;
}

const GoalsListItem = ({ style, goal }: GoalsListItemProps) => {
  const { navigate } = useNavigation<RootNavigation>();

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onLongPress={() => navigate(goalActionsRoute, { id: goal.id })}
      onPress={() => navigate(goalRoute, { id: goal.id })}>
      <View style={[rowCenter, gap('column')('s'), margin('bottom')('s')]}>
        <IconButton color="accent" isDisabled iconName="lock" />
        <View style={[flex1, gap('row')('xxxs')]}>
          <Text weight="semiBold" size="s" color="primary">
            {goal.name}
          </Text>
          <Text weight="semiBold" size="xs" color="tertiary">
            {`${goal.startedAt} - ${goal.endAt}`}
          </Text>
        </View>
      </View>
      <Text
        numberOfLines={3}
        style={margin('bottom')('l')}
        weight="medium"
        size="s"
        color="tertiary">
        {goal.description}
      </Text>
      <View style={[rowCenter, margin('bottom')('xxs')]}>
        <Text style={flex1} weight="semiBold" size="s" color="primary">
          {formatPrice(goal.baseAmount || goal.amount, goal.baseCurrency)}
        </Text>
        <Text weight="semiBold" size="s" color="primary">
          {formatPrice(
            goal.baseTargetAmount || goal.targetAmount,
            goal.baseCurrency,
          )}
        </Text>
      </View>
      <ProgressBar total={goal.targetAmount} current={goal.amount} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('full')('m'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 16,
  },
});

export default GoalsListItem;

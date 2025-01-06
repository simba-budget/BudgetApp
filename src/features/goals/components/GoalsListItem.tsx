import { Goal } from '@api/clients/goals/types';
import { IconButton, ProgressBar, Text } from '@common/v2/components';
import { flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatPrice } from '@utils/price';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface GoalsListItemProps {
  style?: StyleProp<ViewStyle>;
  goal: Goal;
  onPress: () => void;
}

const GoalsListItem = ({ style, goal, onPress }: GoalsListItemProps) => (
  <View style={[styles.container, style]}>
    <View style={[rowCenter, gap('column')('s'), margin('bottom')('s')]}>
      <IconButton isDisabled iconName="card" />
      <View style={flex1}>
        <Text weight="semiBold" size="m" color="primary">
          {goal.name}
        </Text>
        <Text weight="semiBold" size="xs" color="tertiary">
          {`${goal.startedAt} - ${goal.endAt}`}
        </Text>
      </View>
      <IconButton onPress={onPress} iconName="arrowRight" />
    </View>
    <Text
      numberOfLines={3}
      style={margin('bottom')('l')}
      weight="medium"
      size="s"
      color="tertiary">
      {goal.description}
    </Text>
    <View style={[rowCenter, margin('bottom')('xs')]}>
      <Text style={flex1} weight="semiBold" size="s" color="primary">
        {formatPrice(goal.amount, goal.currency)}
      </Text>
      <Text weight="semiBold" size="s" color="primary">
        {formatPrice(goal.targetAmount, goal.currency)}
      </Text>
    </View>
    <ProgressBar total={goal.targetAmount} current={goal.amount} />
  </View>
);

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

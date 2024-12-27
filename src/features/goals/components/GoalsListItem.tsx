import { Goal } from '@api/clients/goals/types';
import { Text } from '@common/v2/components';
import { padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

export interface GoalsListItemProps {
  style?: StyleProp<ViewStyle>;
  goal: Goal;
  onPress: () => void;
}

const GoalsListItem = ({ style, goal, onPress }: GoalsListItemProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text>{JSON.stringify(goal, null, 2)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...padding('full')('m'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 12,
  },
});

export default GoalsListItem;

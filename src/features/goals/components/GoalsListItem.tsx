import { Goal } from '@api/clients/goals/types';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

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
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
  },
});

export default GoalsListItem;

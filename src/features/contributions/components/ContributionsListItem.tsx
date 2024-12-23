import { Contribution } from '@api/clients/contributions/types';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

export interface ContributionsListItemProps {
  style?: StyleProp<ViewStyle>;
  contribution: Contribution;
  onPress: () => void;
}

const ContributionsListItem = ({
  style,
  contribution,
  onPress,
}: ContributionsListItemProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text>{JSON.stringify(contribution, null, 2)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
  },
});

export default ContributionsListItem;

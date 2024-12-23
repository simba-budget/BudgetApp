import { Invitation } from '@api/clients/invitations/types';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

export interface InvitationsListItemProps {
  style?: StyleProp<ViewStyle>;
  invitation: Invitation;
  onPress: () => void;
}

const InvitationsListItem = ({ style, invitation, onPress }: InvitationsListItemProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text>{JSON.stringify(invitation, null, 2)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
  },
});

export default InvitationsListItem;

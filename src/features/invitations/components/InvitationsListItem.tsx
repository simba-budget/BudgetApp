import { Invitation } from '@api/clients/invitations/types';
import { padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Text } from 'src/common/components';

export interface InvitationsListItemProps {
  style?: StyleProp<ViewStyle>;
  invitation: Invitation;
  onPress: () => void;
}

const InvitationsListItem = ({
  style,
  invitation,
  onPress,
}: InvitationsListItemProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text>{JSON.stringify(invitation, null, 2)}</Text>
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

export default InvitationsListItem;

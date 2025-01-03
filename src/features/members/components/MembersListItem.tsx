import { Member, MemberRole } from '@api/clients/members/types';
import { Badge, IconButton, Text } from '@common/v2/components';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface MembersListItemProps {
  style?: StyleProp<ViewStyle>;
  member: Member;
  onPress: () => void;
}

const MembersListItem = ({ style, member, onPress }: MembersListItemProps) => (
  <TouchableOpacity style={[style, styles.container]} onPress={onPress}>
    <IconButton backgroundColor="tertiary" size={42} iconName="userAdd" isDisabled />
    <View style={[flex1, gap('row')('xxs')]}>
      <Text weight="semiBold" size="s" color="primary">
        {`${member.firstName} ${member.lastName}`}
      </Text>
      <Text numberOfLines={1} weight="semiBold" size="xs" color="tertiary">
        {member.email}
      </Text>
    </View>
    <View style={[rowCenter, gap('column')('xs')]}>
      {member.roles.map((role) => (
        <Badge color={roleColorMap[role]} key={role} title={role} />
      ))}
    </View>
  </TouchableOpacity>
);

const roleColorMap: Record<MemberRole, keyof Colors['text']> = {
  MEMBER: 'warning',
  OWNER: 'success',
};

const styles = StyleSheet.create({
  container: {
    ...padding('full')('s'),
    ...gap('column')('s'),
    ...rowCenter,
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 16,
  },
});

export default MembersListItem;

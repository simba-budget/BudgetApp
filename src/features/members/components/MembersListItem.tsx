import { Member, MemberRole } from '@api/clients/members/types';
import { Avatar, Badge, Text } from '@common/components';
import { memberRoute, RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import { getInitials } from '@utils/string';
import React, { useCallback } from 'react';
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
}

const MembersListItem = ({ style, member }: MembersListItemProps) => {
  const navigation = useNavigation<RootNavigation>();

  const handleOnMemberPress = useCallback(() => {
    navigation.goBack();
    setTimeout(() => navigation.navigate(memberRoute, { id: member.id }));
  }, [navigation, member.id]);

  return (
    <TouchableOpacity
      style={[style, styles.container]}
      onPress={handleOnMemberPress}>
      <Avatar
        size={40}
        initials={getInitials(`${member.firstName} ${member.lastName}`)}
      />
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
};

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

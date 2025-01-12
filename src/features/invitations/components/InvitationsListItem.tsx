import { Invitation } from '@api/clients/invitations/types';
import { MemberRole } from '@api/clients/members/types';
import { Badge, IconButton, Text } from '@common/components';
import { useInvitationsTranslations } from '@i18n/hooks';
import {
  invitationActionsRoute,
  invitationRoute,
  RootNavigation,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import { formatDate } from '@utils/date';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface InvitationsListItemProps {
  style?: StyleProp<ViewStyle>;
  invitation: Invitation;
}

const InvitationsListItem = ({ style, invitation }: InvitationsListItemProps) => {
  const { t } = useInvitationsTranslations();
  const { navigate } = useNavigation<RootNavigation>();

  return (
    <TouchableOpacity
      onLongPress={() => navigate(invitationActionsRoute, { id: invitation.id })}
      onPress={() => navigate(invitationRoute, { id: invitation.id })}
      style={[styles.container, style]}>
      <IconButton isDisabled size={40} iconSize={20} iconName="profile" />
      <View style={[flex1, gap('row')('xxs')]}>
        <Text weight="semiBold" size="s" color="primary">
          {invitation.email}
        </Text>
        <Text numberOfLines={1} weight="semiBold" size="xs" color="tertiary">
          {t('Expires: {{date}}', { date: formatDate(invitation.expiresAt) })}
        </Text>
      </View>
      <Badge color={roleColorMap[invitation.role]} title={invitation.role} />
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

export default InvitationsListItem;

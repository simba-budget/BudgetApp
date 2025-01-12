import { Button, Text } from '@common/components';
import { useInvitationsTranslations } from '@i18n/hooks';
import { invitationAddRoute, RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface InvitationAddSectionProps {
  style?: StyleProp<ViewStyle>;
}

const InvitationAddSection = ({ style }: InvitationAddSectionProps) => {
  const { t } = useInvitationsTranslations();
  const navigation = useNavigation<RootNavigation>();

  return (
    <View style={[styles.container, style]}>
      <View style={[flex1, gap('row')('xxxs')]}>
        <Text weight="semiBold" color="primary" size="m">
          {t('Expand Your Circle')}
        </Text>
        <Text color="tertiary" size="s" weight="medium">
          {t('Invite others to manage finances and collaborate seamlessly.')}
        </Text>
      </View>
      <Button
        iconName="userPlus"
        size="small"
        onPress={() => navigation.navigate(invitationAddRoute)}
        color="primary"
        title={t('Invite')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...padding('full')('l'),
    ...gap('column')('m'),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.tertiary,
  },
});

export default InvitationAddSection;

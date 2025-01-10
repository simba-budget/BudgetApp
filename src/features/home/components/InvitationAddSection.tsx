import { useHomeTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Button, Text } from 'src/common/components';

export interface InvitationAddSectionProps {
  style?: StyleProp<ViewStyle>;
  onInvitationAddPress: () => void;
}

const InvitationAddSection = ({
  style,
  onInvitationAddPress,
}: InvitationAddSectionProps) => {
  const { t } = useHomeTranslations();

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <View style={[rowCenter, margin('bottom')('xs')]}>
        <Text style={flex1} color="primary" size="s" weight="semiBold">
          {t('Invite other members')}
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={margin('bottom')('xs')}
          weight="semiBold"
          color="secondary"
          size="m">
          {t('Expand Your Circle')}
        </Text>
        <Text style={margin('bottom')('m')} color="accent" size="s" weight="medium">
          {t('Invite others to manage finances and collaborate seamlessly.')}
        </Text>
        <Button
          size="small"
          onPress={onInvitationAddPress}
          color="secondary"
          title={t('Invite')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('full')('l'),
    alignItems: 'flex-start',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.accent,
  },
});

export default InvitationAddSection;

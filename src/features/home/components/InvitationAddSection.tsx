import { Button, Text } from '@common/components';
import { useHomeTranslations } from '@i18n/hooks';
import { invitationAddRoute, RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1, rowCenter } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface InvitationAddSectionProps {
  style?: StyleProp<ViewStyle>;
}

const InvitationAddSection = ({ style }: InvitationAddSectionProps) => {
  const { t } = useHomeTranslations();
  const navigation = useNavigation<RootNavigation>();

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
          onPress={() => navigation.navigate(invitationAddRoute)}
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

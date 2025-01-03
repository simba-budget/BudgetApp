import { Button, Text } from '@common/v2/components';
import { useHomeTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

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
      <View style={styles.container}>
        <Text
          style={margin('bottom')('xs')}
          weight="semiBold"
          color="primary"
          size="m">
          {t('Expand Your Circle')}
        </Text>
        <Text
          style={margin('bottom')('m')}
          color="tertiary"
          size="s"
          weight="medium">
          {t('Invite others to manage finances and collaborate seamlessly.')}
        </Text>
        <Button
          size="small"
          onPress={onInvitationAddPress}
          color="primary"
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
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 30,
  },
});

export default InvitationAddSection;

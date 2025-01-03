import { Button, Text } from '@common/v2/components';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import { center } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface SubscriptionsEmptyProps {
  style?: StyleProp<ViewStyle>;
  onAddPress: () => void;
}

const SubscriptionsEmpty = ({ style, onAddPress }: SubscriptionsEmptyProps) => {
  const { t } = useSubscriptionsTranslations();

  return (
    <View style={[styles.container, style]}>
      <Text
        style={margin('bottom')('m')}
        color="tertiary"
        textAlign="center"
        size="s">
        {t(
          'You have no active subscriptions. Manage expenses better by adding one now!',
        )}
      </Text>
      <Button
        size="small"
        color="secondary"
        onPress={onAddPress}
        title={t('Add New Subscription')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...center,
    ...padding('full')('xxl'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 30,
  },
});

export default SubscriptionsEmpty;

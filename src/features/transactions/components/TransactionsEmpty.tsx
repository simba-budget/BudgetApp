import { Button, Text } from '@common/v2/components';
import { useTransactionsTranslations } from '@i18n/hooks';
import { center } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface TransactionsEmptyProps {
  style?: StyleProp<ViewStyle>;
  onAddPress: () => void;
}

const TransactionsEmpty = ({ style, onAddPress }: TransactionsEmptyProps) => {
  const { t } = useTransactionsTranslations();

  return (
    <View style={[styles.container, style]}>
      <Text
        style={margin('bottom')('m')}
        color="tertiary"
        textAlign="center"
        size="s">
        {t(
          'Keep your finances in check—add your first transaction and stay organized!',
        )}
      </Text>
      <Button
        size="small"
        color="secondary"
        onPress={onAddPress}
        title={t('Create New Transaction')}
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

export default TransactionsEmpty;

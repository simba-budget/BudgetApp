import { EmptySection } from '@common/v2/components';
import { useTransactionsTranslations } from '@i18n/hooks';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface TransactionsEmptyProps {
  style?: StyleProp<ViewStyle>;
  onAddPress: () => void;
}

const TransactionsEmpty = ({ style, onAddPress }: TransactionsEmptyProps) => {
  const { t } = useTransactionsTranslations();

  return (
    <EmptySection
      style={style}
      description={t(
        'Keep your finances in check—add your first transaction and stay organized!',
      )}
      ctaTitle={t('Create New Transaction')}
      onPress={onAddPress}
    />
  );
};

export default TransactionsEmpty;

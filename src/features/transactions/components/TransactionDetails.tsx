import { Transaction } from '@api/clients/transactions/types';
import { Button } from '@common/v2/components';
import { Text } from '@common/v2/components';
import { useTransactionsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';

export interface TransactionDetailsProps {
  style?: StyleProp<ViewStyle>;
  transaction: Transaction | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onEditPress: () => void;
}

const TransactionDetails = ({
  transaction,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
  onEditPress,
}: TransactionDetailsProps) => {
  const { t } = useTransactionsTranslations();

  return (
    <ScrollView
      style={style}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={isLoading || isRefreshing}
        />
      }
      contentContainerStyle={padding('full')('m')}>
      <Text>{JSON.stringify(transaction, null, 2)}</Text>
      <Button style={margin('top')('m')} onPress={onEditPress} title={t('Edit')} />
    </ScrollView>
  );
};

export default TransactionDetails;

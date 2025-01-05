import { Tag } from '@api/clients/tags/types';
import { Transaction } from '@api/clients/transactions/types';
import { Badge, DetailsItem, IconButton } from '@common/v2/components';
import { Text } from '@common/v2/components';
import { formatExternalAccount } from '@features/externalAccounts/utils';
import { useTransactionsTranslations } from '@i18n/hooks';
import { center, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatDate } from '@utils/date';
import { formatPrice } from '@utils/price';
import React, { useCallback } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface TransactionDetailsProps {
  style?: StyleProp<ViewStyle>;
  transaction: Transaction;
}

const TransactionDetails = ({ transaction, style }: TransactionDetailsProps) => {
  const { t } = useTransactionsTranslations();
  const { bottom } = useSafeAreaInsets();
  const isPlaidTransaction = !transaction.createdBy;

  const formatTags = useCallback(
    (tags: Tag[]) => (
      <View style={[rowCenter, gap('column')('xxs')]}>
        {tags.map((tag) => (
          <Badge key={tag.id} title={tag.name} />
        ))}
      </View>
    ),
    [],
  );

  return (
    <View style={[{ paddingBottom: bottom }, style]}>
      <View style={styles.container}>
        <View style={[center, gap('row')('xs')]}>
          <IconButton
            backgroundColor="tertiary"
            size={56}
            iconSize={28}
            iconName="card"
          />
          <Text textAlign="center" weight="semiBold" size="m" color="primary">
            {transaction.category?.name ?? t('Other')}
          </Text>
          <View>
            <Text
              textAlign="center"
              color={transaction.amount < 0 ? 'error' : 'success'}
              size="xxl"
              weight="bold">
              {formatPrice(transaction.amount, transaction.currency)}
            </Text>
            <Text textAlign="center" weight="semiBold" size="m" color="primary">
              {transaction.description}
            </Text>
          </View>
          <Text textAlign="center" weight="medium" size="s" color="tertiary">
            {formatDate(transaction.date)}
          </Text>
        </View>
        <View style={gap('row')('s')}>
          <View style={styles.details}>
            <DetailsItem value={transaction.id} title={t('Transaction ID')} />
            <DetailsItem
              placeholder={t('Other')}
              formatValue={(category) => category.name}
              value={transaction.category}
              title={t('Category')}
            />
            <DetailsItem
              formatValue={formatDate}
              value={transaction.date}
              title={t('Date')}
            />
            {isPlaidTransaction && (
              <DetailsItem
                placeholder={t('None')}
                formatValue={formatExternalAccount}
                value={transaction.externalAccount}
                title={t('Account')}
              />
            )}
            {isPlaidTransaction && (
              <DetailsItem
                placeholder={t('None')}
                formatValue={(merchant) => merchant.name}
                value={transaction.merchant}
                title={t('Merchant')}
              />
            )}
            <DetailsItem
              placeholder={t('None')}
              formatValue={formatTags}
              value={transaction.tags}
              title={t('Tags')}
            />
          </View>
          <View style={styles.details}>
            {!isPlaidTransaction && (
              <DetailsItem
                formatValue={(member) => `${member.firstName} ${member.lastName}`}
                value={transaction.createdBy}
                title={t('Created By')}
              />
            )}
            <DetailsItem
              placeholder={t('None')}
              formatValue={formatDate}
              value={transaction.updatedAt}
              title={t('Updated At')}
            />
            <DetailsItem
              placeholder={t('None')}
              formatValue={formatDate}
              value={transaction.createdAt}
              title={t('Created At')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('horizontal')('m'),
    ...padding('vertical')('l'),
    ...gap('row')('l'),
  },
  details: {
    ...padding('full')('m'),
    ...gap('row')('s'),
    borderWidth: 1,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.tertiary,
    borderRadius: 16,
  },
});

export default TransactionDetails;

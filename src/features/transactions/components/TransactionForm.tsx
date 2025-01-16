import { SaveTransactionRequest } from '@api/clients/transactions/types';
import { Button, DatePickerSheet, FormControl, Input } from '@common/components';
import { CategoriesSelect } from '@features/categories/containers';
import { MerchantsSelect } from '@features/merchants/containers';
import { SubscriptionsSelect } from '@features/subscriptions/containers';
import { TagsSelect } from '@features/tags/containers';
import { useTransactionsTranslations } from '@i18n/hooks';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface CategoryFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveTransactionRequest>;
}

const TransactionForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: CategoryFormProps) => {
  const { t } = useTransactionsTranslations();

  return (
    <View style={[padding('full')('m'), style]}>
      <Controller
        control={control}
        name="amount"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Amount')}>
            <Input
              iconName="search"
              readOnly={isDisabled}
              placeholder={t('Amount')}
              autoFocus
              {...rest}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="currency"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Currency')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Currency')}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Description')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Description')}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Date')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Date')}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="tagsIds"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Tags')}>
            <TagsSelect {...rest} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="subscriptionId"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Subscription')}>
            <SubscriptionsSelect {...rest} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="merchantId"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Merchant')}>
            <MerchantsSelect {...rest} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="categoryId"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Category')}>
            <CategoriesSelect {...rest} />
          </FormControl>
        )}
      />
      <DatePickerSheet isOpen onClose={console.log} />
      <Button
        onPress={onSubmit}
        isDisabled={isSubmitting || isDisabled}
        title={t('Save')}
      />
    </View>
  );
};

export default TransactionForm;

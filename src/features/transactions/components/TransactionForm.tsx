import { SaveTransactionRequest } from '@api/clients/transactions/types';
import { Button, FormControl, Input } from '@common/v2/components';
import { useTransactionsTranslations } from '@i18n/hooks';
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
    <View style={style}>
      <Controller
        control={control}
        name="amount"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Amount')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Amount')} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="currency"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Currency')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Currency')} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="categoryId"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Category')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Category')} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Date')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Date')} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Description')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Description')} />
          </FormControl>
        )}
      />
      <Button
        onPress={onSubmit}
        isDisabled={isSubmitting || isDisabled}
        title={t('Save')}
      />
    </View>
  );
};

export default TransactionForm;

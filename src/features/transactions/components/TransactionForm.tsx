import { SaveTransactionRequest } from '@api/clients/transactions/types';
import { Button, FormControl, Input, Picker } from '@common/v2/components';
import { PickerOption } from '@common/v2/components/Picker';
import { CategoriesSelect } from '@features/categories/containers';
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
            <CategoriesSelect {...rest} />
          </FormControl>
        )}
      />
      <Button
        onPress={onSubmit}
        isDisabled={isSubmitting || isDisabled}
        title={t('Save')}
      />
      <Picker
        title={t('Quick Actions')}
        isOpen
        onClose={console.log}
        options={options}
      />
    </View>
  );
};

const options: PickerOption[] = [
  {
    title: 'Create Transaction',
    description: 'Lorem Ipsum is simply dummy text of the printing and',
    iconName: 'arrowRightLeft',
    onPress: console.log,
  },
  {
    title: 'Create Category',
    description: 'Lorem Ipsum is simply dummy text of the printing and',
    iconName: 'squaresPlus',
    onPress: console.log,
  },
  {
    title: 'Create Subscription',
    description: 'Lorem Ipsum is simply dummy text of the printing and',
    iconName: 'squaresPlus',
    onPress: console.log,
  },
  {
    title: 'Invite Member',
    description: 'Lorem Ipsum is simply dummy text of the printing and',
    iconName: 'userPlus',
    onPress: console.log,
  },
];

export default TransactionForm;

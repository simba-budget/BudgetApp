import {
  BottomSheetAmountInput,
  BottomSheetTextArea,
  Button,
  DatePicker,
  FormControl,
  Text,
} from '@common/components';
import { CategoriesSelect } from '@features/categories/containers';
import { TagsSelect } from '@features/tags/containers';
import { useTransactionsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveTransactionRequest } from '../types';

export interface TransactionFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveTransactionRequest>;
  title: string;
}

const TransactionForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
  title,
}: TransactionFormProps) => {
  const { t } = useTransactionsTranslations();

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <Text
        style={[padding('horizontal')('m'), margin('bottom')('s')]}
        textAlign="center"
        color="primary"
        weight="semiBold"
        size="l">
        {title}
      </Text>
      <Controller
        control={control}
        name="amount"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl
            style={margin('bottom')('s')}
            error={error?.message}
            label={t('Amount')}>
            <BottomSheetAmountInput readOnly={isDisabled} autoFocus {...rest} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl
            style={margin('bottom')('s')}
            error={error?.message}
            label={t('Description')}>
            <BottomSheetTextArea
              readOnly={isDisabled}
              placeholder={t('Description')}
              {...rest}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl
            style={margin('bottom')('xs')}
            error={error?.message}
            label={t('Date')}>
            <DatePicker label={t('Date')} {...rest} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="categoryId"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl
            style={margin('bottom')('xs')}
            error={error?.message}
            label={t('Category')}>
            <CategoriesSelect label={t('Category')} {...rest} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="tagsIds"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl
            style={margin('bottom')('l')}
            error={error?.message}
            label={t('Tags')}>
            <TagsSelect label={t('Tags')} {...rest} />
          </FormControl>
        )}
      />
      <Button
        isSubmitting={isSubmitting}
        onPress={onSubmit}
        isDisabled={isDisabled}
        title={t('Save')}
      />
    </View>
  );
};

export default TransactionForm;

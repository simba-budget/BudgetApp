import {
  Button,
  DatePicker,
  FormControl,
  Input,
  ScrollView,
  Text,
} from '@common/components';
import Textarea from '@common/components/Textarea';
import { useSafeBottomInset } from '@common/hooks';
import { CategoriesSelect } from '@features/categories/containers';
import { MerchantsSelect } from '@features/merchants/containers';
import { SubscriptionsSelect } from '@features/subscriptions/containers';
import { TagsSelect } from '@features/tags/containers';
import { useTransactionsTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveTransactionRequest } from '../types';

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
  const paddingBottom = useSafeBottomInset();

  return (
    <View style={[flex1, padding('top')('xs'), style]}>
      <ScrollView
        bounces={false}
        contentContainerStyle={[gap('row')('m'), padding('bottom')('m')]}>
        <View style={[rowCenter, gap('column')('xs')]}>
          <Controller
            control={control}
            name="amount"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl style={flex1} error={error?.message} label={t('Amount')}>
                <Input
                  bgColor="secondary"
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
              <FormControl
                style={flex1}
                error={error?.message}
                label={t('Currency')}>
                <Input
                  bgColor="secondary"
                  iconName="search"
                  readOnly={isDisabled}
                  placeholder={t('Currency')}
                  {...rest}
                />
              </FormControl>
            )}
          />
        </View>
        <Controller
          control={control}
          name="description"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <FormControl error={error?.message} label={t('Description')}>
              <Textarea
                bgColor="secondary"
                readOnly={isDisabled}
                placeholder={t('Description')}
                {...rest}
              />
            </FormControl>
          )}
        />
        <View style={gap('row')('xs')}>
          <Text weight="semiBold" size="xs" color="tertiary">
            {t('Required')}
          </Text>
          <Controller
            control={control}
            name="date"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl error={error?.message} label={t('Date')}>
                <DatePicker label={t('Date')} {...rest} />
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="categoryId"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl error={error?.message} label={t('Category')}>
                <CategoriesSelect label={t('Category')} {...rest} />
              </FormControl>
            )}
          />
        </View>
        <View style={gap('row')('xs')}>
          <Text weight="semiBold" size="xs" color="tertiary">
            {t('Optional')}
          </Text>
          <Controller
            control={control}
            name="tagsIds"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl error={error?.message} label={t('Tags')}>
                <TagsSelect label={t('Tags')} {...rest} />
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="subscriptionId"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl error={error?.message} label={t('Subscription')}>
                <SubscriptionsSelect label={t('Subscription')} {...rest} />
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="merchantId"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl error={error?.message} label={t('Merchant')}>
                <MerchantsSelect label={t('Merchant')} {...rest} />
              </FormControl>
            )}
          />
        </View>
      </ScrollView>
      <View
        style={[
          padding('horizontal')('m'),
          padding('top')('xs'),
          { paddingBottom },
        ]}>
        <Button
          isSubmitting={isSubmitting}
          onPress={onSubmit}
          isDisabled={isDisabled}
          title={t('Save')}
        />
      </View>
    </View>
  );
};

export default TransactionForm;

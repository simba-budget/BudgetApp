import { SaveClientRequest } from '@api/clients/clients/types';
import { FormContainer, FormControl, Input, View } from '@common/components';
import { useClientsTranslations } from '@i18n/hooks';
import { flex1 } from '@styles/common';
import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';

export interface ClientFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveClientRequest>;
  onCancel: () => void;
}

const ClientForm: FC<ClientFormProps> = (props) => {
  const { style, isSubmitting, onSubmit, control, isDisabled = false, onCancel } = props;
  const { t } = useClientsTranslations();

  return (
    <FormContainer
      onCancel={onCancel}
      style={style}
      isDisabled={isDisabled}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}>
      <View direction="row" gap="s">
        <Controller
          control={control}
          name="name"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <FormControl
              error={error?.message}
              style={flex1}
              isRequired
              label={t('Company name')}>
              <Input
                {...rest}
                readOnly={isDisabled}
                isError={!!error}
                iconName="profile"
                placeholder={t('Company name')}
              />
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="code"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <FormControl
              error={error?.message}
              style={flex1}
              isRequired
              label={t('Company code')}>
              <Input
                {...rest}
                readOnly={isDisabled}
                isError={!!error}
                iconName="document"
                placeholder={t('Company code')}
              />
            </FormControl>
          )}
        />
      </View>
      <Controller
        control={control}
        name="vat"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('VAT code')}>
            <Input
              {...rest}
              readOnly={isDisabled}
              isError={!!error}
              iconName="document"
              placeholder={t('VAT code')}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="address"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Address')}>
            <Input
              {...rest}
              readOnly={isDisabled}
              isError={!!error}
              iconName="location"
              placeholder={t('Address')}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Phone')}>
            <Input
              {...rest}
              readOnly={isDisabled}
              isError={!!error}
              iconName="call"
              placeholder={t('Phone')}
            />
          </FormControl>
        )}
      />
    </FormContainer>
  );
};

export default ClientForm;

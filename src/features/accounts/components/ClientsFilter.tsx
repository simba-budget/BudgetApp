import { Input, View } from '@common/components';
import { useClientsTranslations } from '@i18n/hooks';
import { shadow } from '@styles/common';
import React, { FC } from 'react';
import DropShadow from 'react-native-drop-shadow';

export interface ClientsFilterProps {
  onChange: (value: string) => void;
  value?: string | null;
}

const ClientsFilter: FC<ClientsFilterProps> = (props) => {
  const { value, onChange } = props;
  const { t } = useClientsTranslations();

  return (
    <DropShadow style={shadow}>
      <View ph="l" pb="xs" bgColor="white">
        <Input
          iconName="search"
          placeholder={t('Search client')}
          onChange={onChange}
          value={value}
        />
      </View>
    </DropShadow>
  );
};

export default ClientsFilter;

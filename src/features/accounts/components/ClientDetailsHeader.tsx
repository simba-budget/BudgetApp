import { Client } from '@api/clients/clients/types';
import { Divider, View } from '@common/components';
import { useClientsTranslations } from '@i18n/hooks';
import { flex1, shadow } from '@styles/common';
import { formatPrice } from '@utils/price';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import { ClientDetailsHeaderSkeleton } from '../skeletons';

import ClientDetailsItem from './ClientDetailsItem';

export interface ClientDetailsHeaderProps {
  style?: StyleProp<ViewStyle>;
  client: Client | null;
  isLoading: boolean;
}

const ClientDetailsHeader: FC<ClientDetailsHeaderProps> = (props) => {
  const { client, style, isLoading } = props;
  const { t } = useClientsTranslations();

  if (isLoading || !client) {
    return <ClientDetailsHeaderSkeleton />;
  }

  return (
    <DropShadow style={[shadow, style]}>
      <View pb="xl" pt="m" ph="l" gap="m" bgColor="primary500">
        <ClientDetailsItem
          value={client.name}
          label={t('Company name')}
          iconName="profile"
        />
        <View direction="row" gap="s">
          <ClientDetailsItem
            style={flex1}
            value={client.code}
            label={t('Company code')}
            iconName="document"
          />
          <ClientDetailsItem
            style={flex1}
            value={client.vat}
            label={t('VAT code')}
            iconName="document"
          />
        </View>
        <View direction="row" gap="s">
          <ClientDetailsItem
            style={flex1}
            value={client.phone}
            label={t('Phone')}
            iconName="call"
          />
          <ClientDetailsItem
            style={flex1}
            value={client.address}
            label={t('Address')}
            iconName="location"
          />
        </View>
        <Divider mv="xs" variant="secondary" />
        <View direction="row" gap="s">
          <ClientDetailsItem
            style={flex1}
            value={client.invoicesCount}
            label={t('Invoices')}
            iconName="document"
          />
          <ClientDetailsItem
            style={flex1}
            value={formatPrice(
              client.total[0]?.total ?? 0,
              client.total[0]?.currency ?? 'EUR',
            )}
            label={t('Invoices total')}
            iconName="card"
          />
        </View>
        <View direction="row" gap="s">
          <ClientDetailsItem
            style={flex1}
            color={client.unpaidInvoicesCount ? 'error' : 'success'}
            value={client.unpaidInvoicesCount}
            label={t('Unpaid')}
            iconName="document"
          />
          <ClientDetailsItem
            style={flex1}
            value={formatPrice(
              client.vatTotal[0]?.total ?? 0,
              client.vatTotal[0]?.currency ?? 'EUR',
            )}
            label={t('VAT total')}
            iconName="card"
          />
        </View>
      </View>
    </DropShadow>
  );
};

export default ClientDetailsHeader;

import { Merchant } from '@api/clients/merchants/types';
import { Button } from '@common/v2/components';
import { Text } from '@common/v2/components';
import { useMerchantsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';

export interface MerchantDetailsProps {
  style?: StyleProp<ViewStyle>;
  merchant: Merchant | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onEditPress: () => void;
}

const MerchantDetails = ({
  merchant,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
  onEditPress,
}: MerchantDetailsProps) => {
  const { t } = useMerchantsTranslations();

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
      <Text>{JSON.stringify(merchant, null, 2)}</Text>
      <Button style={margin('top')('m')} onPress={onEditPress} title={t('Edit')} />
    </ScrollView>
  );
};

export default MerchantDetails;

import { AccountNavigation, toMerchantEdit } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { MerchantDetails } from '../components';
import { useMerchant } from '../hooks';

export interface MerchantProps {
  id: number;
}

const Merchant = ({ id }: MerchantProps) => {
  const navigation = useNavigation<AccountNavigation>();
  const { merchant, refetch, isRefetching, isLoading } = useMerchant(id);
  const handleOnEditPress = useCallback(
    () => toMerchantEdit(navigation, { id }),
    [navigation, id],
  );

  return (
    <MerchantDetails
      merchant={merchant}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      onEditPress={handleOnEditPress}
    />
  );
};

export default Merchant;

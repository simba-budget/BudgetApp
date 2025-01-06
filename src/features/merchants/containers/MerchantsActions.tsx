import { IconButton } from '@common/v2/components';
import { AccountNavigation, toMerchantAdd } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { rowCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { View } from 'react-native';

const MerchantsActions = () => {
  const navigation = useNavigation<AccountNavigation>();
  const handleOnAddPress = useCallback(
    () => toMerchantAdd(navigation),
    [navigation],
  );

  return (
    <View style={[rowCenter, gap('column')('s')]}>
      <IconButton onPress={handleOnAddPress} iconName="plus" />
    </View>
  );
};

export default MerchantsActions;

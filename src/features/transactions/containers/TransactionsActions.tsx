import { IconButton } from '@common/components';
import { RootNavigation, toTransactionAdd } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { rowCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { View } from 'react-native';

const TransactionsActions = () => {
  const navigation = useNavigation<RootNavigation>();
  const handleOnAddPress = useCallback(
    () => toTransactionAdd(navigation),
    [navigation],
  );

  return (
    <View style={[rowCenter, gap('column')('s')]}>
      <IconButton onPress={handleOnAddPress} iconName="filter" />
      <IconButton onPress={handleOnAddPress} iconName="plus" />
    </View>
  );
};

export default TransactionsActions;

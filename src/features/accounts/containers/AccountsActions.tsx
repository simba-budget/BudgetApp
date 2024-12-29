import { IconButton } from '@common/v2/components';
import { MainNavigation, toAccountAdd } from '@navigation/navigators/main';
import { useNavigation } from '@react-navigation/native';
import { rowCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { View } from 'react-native';

const AccountsActions = () => {
  const navigation = useNavigation<MainNavigation>();
  const handleOnAddPress = useCallback(() => toAccountAdd(navigation), [navigation]);

  return (
    <View style={[rowCenter, gap('column')('s')]}>
      <IconButton onPress={handleOnAddPress} iconName="userAdd" />
    </View>
  );
};

export default AccountsActions;

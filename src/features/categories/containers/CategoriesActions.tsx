import { IconButton } from '@common/v2/components';
import { RootNavigation, toCategoryAdd } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { rowCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { View } from 'react-native';

const CategoriesActions = () => {
  const navigation = useNavigation<RootNavigation>();
  const handleOnAddPress = useCallback(
    () => toCategoryAdd(navigation),
    [navigation],
  );

  return (
    <View style={[rowCenter, gap('column')('s')]}>
      <IconButton onPress={handleOnAddPress} iconName="plus" />
    </View>
  );
};

export default CategoriesActions;

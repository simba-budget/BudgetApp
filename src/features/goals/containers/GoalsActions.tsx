import { IconButton } from '@common/components';
import { goalAddRoute, RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { rowCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

const GoalsActions = () => {
  const navigation = useNavigation<RootNavigation>();

  return (
    <View style={[rowCenter, gap('column')('s')]}>
      <IconButton
        onPress={() => navigation.navigate(goalAddRoute)}
        iconName="plus"
      />
    </View>
  );
};

export default GoalsActions;

import { RootNavigation, tagAddRoute } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { rowCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'src/common/components';

const TagsActions = () => {
  const navigation = useNavigation<RootNavigation>();

  return (
    <View style={[rowCenter, gap('column')('s')]}>
      <IconButton onPress={() => navigation.push(tagAddRoute)} iconName="plus" />
    </View>
  );
};

export default TagsActions;

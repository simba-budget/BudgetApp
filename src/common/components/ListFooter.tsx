import { center } from '@styles/common';
import { padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';

export interface ListFooterProps {
  isFetchingMore?: boolean;
  style?: StyleProp<ViewStyle>;
}

const ListFooter = ({ isFetchingMore, style }: ListFooterProps) => (
  <View style={[center, padding('bottom')('m'), style]}>
    {isFetchingMore && (
      <ActivityIndicator size="small" color={colors.text.primary} />
    )}
  </View>
);

export default ListFooter;

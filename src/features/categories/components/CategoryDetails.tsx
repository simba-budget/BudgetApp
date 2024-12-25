import { Category } from '@api/clients/categories/types';
import { Button } from '@common/v2/components';
import { useGoalsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, Text, ViewStyle } from 'react-native';

export interface CategoryDetailsProps {
  style?: StyleProp<ViewStyle>;
  category: Category | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onEditPress: () => void;
}

const CategoryDetails = ({
  category,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
  onEditPress,
}: CategoryDetailsProps) => {
  const { t } = useGoalsTranslations();

  return (
    <ScrollView
      style={style}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={isLoading || isRefreshing} />
      }
      contentContainerStyle={padding('full')('m')}>
      <Text>{JSON.stringify(category, null, 2)}</Text>
      <Button style={margin('top')('m')} onPress={onEditPress} title={t('Edit')} />
    </ScrollView>
  );
};

export default CategoryDetails;

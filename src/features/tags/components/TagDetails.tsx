import { Tag } from '@api/clients/tags/types';
import { Text } from '@common/components';
import { Button } from '@common/components';
import { useTagsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';

export interface TagDetailsProps {
  style?: StyleProp<ViewStyle>;
  tag: Tag | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onEditPress: () => void;
}

const TagDetails = ({
  tag,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
  onEditPress,
}: TagDetailsProps) => {
  const { t } = useTagsTranslations();

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
      <Text>{JSON.stringify(tag, null, 2)}</Text>
      <Button style={margin('top')('m')} onPress={onEditPress} title={t('Edit')} />
    </ScrollView>
  );
};

export default TagDetails;

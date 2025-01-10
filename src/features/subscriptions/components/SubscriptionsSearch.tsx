import { Input } from '@common/components';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface SubscriptionsSearchProps {
  style?: StyleProp<ViewStyle>;
  keyword?: string | null;
  onKeywordChange: (keyword: string) => void;
}

const SubscriptionsSearch = ({
  style,
  keyword,
  onKeywordChange,
}: SubscriptionsSearchProps) => {
  const { t } = useSubscriptionsTranslations();

  return (
    <View style={[margin('vertical')('m'), padding('horizontal')('m'), style]}>
      <Input
        iconName="search"
        onChange={onKeywordChange}
        value={keyword}
        placeholder={t('Search....')}
      />
    </View>
  );
};

export default SubscriptionsSearch;
